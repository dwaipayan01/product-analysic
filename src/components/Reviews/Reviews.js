import { useEffect, useState } from "react";
import Product from "../../hooks/Product";
import Cart from "../Cart/Cart";
import './Reviews.css';


const Reviews = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="product-detail">
            {
                products.map(product => <Cart product={product} key={product.id}></Cart>)
            }
        </div>
    );
};

export default Reviews;
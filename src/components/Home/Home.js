import React from 'react';
import Product from '../../hooks/Product';
import ShowDetails from '../ShowDetails/ShowDetails';
import "./Home.css";
const Home = () => {
    const [products, setProducts] = Product();
    return (
        <div >
            <div className='details'>
                <div className='text-details'>
                    <h1>Your next TShirt</h1>
                    <p>A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. </p>

                </div>
                <div className='img-detail'>
                    <img src="https://img.freepik.com/free-psd/white-t-shirt-model-front-view-mockup_125540-861.jpg?t=st=1649573271~exp=1649573871~hmac=87d7c7afd1a182d9582c6626f5d6457d0655447fc272dd9c21721ceedfa5f6b6&w=740" alt="" />
                </div>

            </div>
            <h2 className='text'>Customer review(3)</h2>
            <div className='display'>
                {
                    products.slice(0, 3).map(product => <ShowDetails product={product} key={product.id}></ShowDetails>)
                }
            </div>


        </div>
    );
};

export default Home;
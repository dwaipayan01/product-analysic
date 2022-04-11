import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const { name, Rating, picture, review } = props.product;
    return (
        <div>
            <div className='image-detail'>
                <img src={picture} alt="" />
            </div>
            <div>
                <h3>name :{name}</h3>
                <p>{review}</p>
                <p> Rating : {Rating}</p>
            </div>

        </div>
    );
};

export default Cart;
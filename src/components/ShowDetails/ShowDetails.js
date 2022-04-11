import React from 'react';
import "./ShowDetails.css";

const ShowDetails = (props) => {
    const { name, picture, Rating, id, review } = props.product;
    return (
        <div>
            <div className='All-details'>
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

export default ShowDetails;
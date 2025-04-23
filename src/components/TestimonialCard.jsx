import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({name, review}){
    return(
        <div className='card'>
            <h3> name : {name}</h3>
            <h5>Reviews: {review}</h5>
        </div>
    );
};

export default TestimonialCard;
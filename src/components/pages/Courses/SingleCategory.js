import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCategory.css'

const SingleCategory = ({ category }) => {
    const { name, image, price, review, description, id } = category;
    return (
        <div>
            <div className='border'>
                <img className='image-info' src={image} alt="" />
                <div className='ms-2 mt-3'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>Price ${price}</p>
                    <p>Review {review}</p>
                </div>
                <div className=''>
                    <Link to={`/courses/:${id}`}><button className='w-100 border-0 py-2 bg-primary text-light'>Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;
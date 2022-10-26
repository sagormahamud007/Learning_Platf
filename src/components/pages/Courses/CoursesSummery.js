import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CoursesSummery = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
            <div className='border'>
                <img className='image-info' src={courseDetails.image} alt="" />
                <div className='ms-2 mt-3'>
                    <h4>{courseDetails.name}</h4>
                    <p>{courseDetails.description}</p>
                    <p>Price ${courseDetails.price}</p>
                    <p>Review {courseDetails.review}</p>
                </div>
                <div className=''>
                    <Link to={`/courses/:${courseDetails.id}`}><button className='w-100 border-0 py-2 bg-primary text-light'>Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesSummery;
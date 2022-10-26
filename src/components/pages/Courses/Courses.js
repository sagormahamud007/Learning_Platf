import React from 'react';
import Category from './Category';
import CourseInfo from './CourseInfo';


const Courses = () => {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <CourseInfo></CourseInfo>
                </div>
                <div className="col-sm-8">
                    <Category></Category>
                </div>
            </div>
        </div>


    );
};

export default Courses;

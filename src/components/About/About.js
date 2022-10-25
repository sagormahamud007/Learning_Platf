import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div className='found-page'>
            <h1 className='found-Code'><span className='text-danger'>4</span> <span className='text-info'>0</span> <span className='text-primary'>4</span></h1>
            <h2>Opps! Page Not Found</h2>
            <p>Sorry the page you're looking for doesn't exist. if you think somethings is broken,report a problem</p>
            <Link to='/'><button className='home-btn'>Return Home</button></Link>
        </div>
    );
};

export default About;
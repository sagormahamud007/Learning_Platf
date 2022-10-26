import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { FaArtstation, FaAsterisk, FaBook, FaCss3, FaDesktop, FaGraduationCap, FaHtml5, FaLaptop, FaNotesMedical, FaShoppingBag } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='home-container'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='text-Light fw-bold'>APPLY ONLINE TRAINING COURSES</h1>
                        <p className='text-light'>These instructors have expertise in conveying knowledge, and even "hard to grasp" concepts, through video instruction. Through the combination of excellent instruction and immediate feedback, students are quickly able to start experiencing success within their coursework.</p>
                        <Link to='/course'>  <button className='border-0 py-2 px-5 rounded'>Show course</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://media.istockphoto.com/photos/group-of-graduates-throwing-graduation-caps-in-the-air-picture-id947295034?k=20&m=947295034&s=612x612&w=0&h=SLyTAzhRJ6ji7GzlNqoLARuamRxCuYuPSNUggGxL2ig="
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-Light fw-bold'>APPLY ONLINE TRAINING COURSES</h1>
                        <p className='text-light'>These instructors have expertise in conveying knowledge, and even "hard to grasp" concepts, through video instruction. Through the combination of excellent instruction and immediate feedback, students are quickly able to start experiencing success within their coursework.</p>
                        <Link to='/course'>  <button className='border-0 py-2 px-5 rounded'>Show course</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h image"
                        src="https://media.istockphoto.com/photos/female-mentor-teaching-employees-group-analyzing-online-project-picture-id1135346386?k=20&m=1135346386&s=612x612&w=0&h=mkEAGV56EQye-0i0UtaHQbDYyruPA7es_aZurFdH20M="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-Light fw-bold'>APPLY ONLINE TRAINING COURSES</h1>
                        <p className='text-light'>These instructors have expertise in conveying knowledge, and even "hard to grasp" concepts, through video instruction. Through the combination of excellent instruction and immediate feedback, students are quickly able to start experiencing success within their coursework.</p>
                        <Link to='/course'>  <button className='border-0 py-2 px-5 rounded'>Show course</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='text-center mt-5'>
                <h1 className='fw-bold'>OUR POPULAR SERVICES</h1>
                <span className='cap-style'> <FaGraduationCap></FaGraduationCap></span>
                <p>Beside provide course for students, we have some best services to support beloved clients.</p>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-4 text-center ">
                        <div className='border mb-5 p-2'>
                            <span className='bg-primary fs-2 text-light px-4  py-2  rounded'><FaBook></FaBook></span>
                            <h4 className='mt-4'>Certified Courses</h4>
                            <p>Certificate or PDF you must study and complete all modules and score 80% or more in each of the course assessments.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='border mb-5 p-2'>
                            <span className='bg-primary fs-2 text-light px-4  py-2  rounded'><FaLaptop></FaLaptop> </span>
                            <h4 className='mt-4'>Technology & Software</h4>
                            <p>Our school uses the lastest technology & Software to service students and we have had 10 experience years.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='border mb-5 p-2'>
                            <span className='bg-primary fs-2 text-light px-4  py-2   rounded'><FaDesktop></FaDesktop></span>
                            <h4 className='mt-4'>Web Design</h4>
                            <p>We have had 10 experience years for design Website and web development – HTML5, CSS3 and JavaScript.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='border mb-5 p-2'>
                            <span className='bg-primary fs-2 text-light px-4  py-2  rounded'><FaArtstation></FaArtstation></span>
                            <h4 className='mt-4'>Creative Arts & Media</h4>
                            <p>Our have had 10 experience years and always creates friendly Arts & Media to make customers satisfied.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='border mb-5 p-2'>
                            <span className='bg-primary fs-2 text-light px-4  py-2  rounded'><FaHtml5></FaHtml5></span>
                            <h4 className='mt-4'>HTML / CSS</h4>
                            <p>In this tutorial we’re going to learn from scratch 3 most popular items in front end web development – HTML5, CSS3.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className='border mb-5 p-2'>
                            <span className='bg-primary fs-2 text-light px-4  py-2 rounded'><FaShoppingBag></FaShoppingBag></span>
                            <h4 className='mt-4'>Business and Management</h4>
                            <p>We are proud of Management department to carry out large business and we have had 15 experience years for business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
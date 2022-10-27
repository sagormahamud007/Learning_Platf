import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaClock, FaCalendarDay, FaUserClock, FaFileDownload } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import Pdf from "react-to-pdf";


const CourseDetails = () => {
    const course = useLoaderData()
    const { name, image, startDate, time, duration, futures, description, price } = course;
    const ref = React.createRef();
    return (
        <div className='container'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='border-0 bg-primary text-light py-3 px-5 rounded mb-3' onClick={toPdf}><FaFileDownload></FaFileDownload>  Generate Pdf</button>}
            </Pdf>
            <h1>{course.name}</h1>
            <div className="row" ref={ref}>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>{name}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={image} />
                            <Card.Title className='mt-3'>{description}</Card.Title>
                            <Card.Text>
                                {futures}
                            </Card.Text>
                            <p>Price : ${price}</p>
                            <Link to='/course'> <Button variant="primary">Go beck course</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-6">

                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://c0.wallpaperflare.com/preview/534/41/125/school-books-young-adult-education.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ803n_yn3W8dfJvr0V57jLxS-vvYAmf9htZg&usqp=CAU"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxN6QiHVLlHGOwiNQUh_JuXSU2_ZLJz1eYw&usqp=CAU"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='mt-5 bg-primary'>
                        <div className='p-3 text-light'>
                            <h4><span ><FaClock className='text-light'></FaClock> Course duration: {duration}</span></h4>

                            <h4><span><FaCalendarDay className='text-light'></FaCalendarDay> startDate: {startDate}</span></h4>

                            <h4><span><FaUserClock className='text-light'></FaUserClock> Times: {time}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
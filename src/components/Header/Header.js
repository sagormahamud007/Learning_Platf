import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Header.css'
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { useState } from 'react';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [dark, setDark] = useState(false)


    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {

            });
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar> <Link to='/'><img className='header' src='https://education.cmsmart.net/wp-content/uploads/2016/12/logo.png' alt="" /></Link> </Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <h6 className='px-3'>Training center</h6>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/'>Home</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/course'>Courses</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2 ' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2 ' to='/login'>Login</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/register'>Register</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/*'>About</Link>

                        </Nav>

                        <Link className='m-2' to='/profile'>
                            {
                                user?.photoURL ?
                                    <abbr title={user?.displayName}>
                                        <Image style={{ height: '40px' }} roundedCircle
                                            src={user?.photoURL}></Image></abbr>
                                    : <FaUser></FaUser>
                            }
                        </Link>

                        {user?.uid ?
                            <>
                                <span> {user?.displayName}</span>
                                <Button onClick={handleSignOut} className='mx-5 text-light' variant="success">Log Out</Button>
                            </>
                            :
                            <>
                                <Link to='/login'> <Button className='px-4 me-3'
                                    variant="secondary">Log in</Button></Link>

                                <Link to='/register'> <Button variant="dark">Register</Button></Link>
                            </>
                        }

                        <button className='px-4 py-2 rounded text-light border-0 m-2 bg-success' onClick={() => setDark(!dark)}>
                            {dark ?
                                <>
                                    <FaSun></FaSun>
                                    Light
                                </>
                                :
                                <>
                                    <FaMoon></FaMoon>
                                    Dark
                                </>
                            }
                        </button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
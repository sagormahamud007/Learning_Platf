import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from '../image/logo.jpg'
import './Header.css'
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

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
                    <Navbar> <Link to='/'><img className='header' src={logo} alt="" /></Link> </Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/'>Home</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/course'>Courses</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/login'>Login</Link>
                            <Link className='text-decoration-none text-dark ms-3 me-3 mt-2' to='/register'>Register</Link>


                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>

                        <Link className='m-4' to='/profile'>
                            {
                                user?.photoURL ?

                                    <Image style={{ height: '40px' }} roundedCircle
                                        src={user?.photoURL}></Image>
                                    : <FaUser></FaUser>
                            }
                        </Link>

                        {user?.uid ?
                            <>
                                <span> {user?.displayName}</span>
                                <Button onClick={handleSignOut} className='mx-3' variant="info">Log Out</Button>
                            </>
                            :
                            <>
                                <Link to='/login'> <Button className='px-4 me-3' variant="secondary">Log in</Button></Link>

                                <Link to='/register'> <Button variant="dark">Register</Button></Link>
                            </>
                        }



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
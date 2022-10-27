import React, { useContext } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { logInUser, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMassage = error.massage;
                setError(errorMassage)
            })
    }
    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    return (
        <div className='Login-page container mt-3'>
            <div className='login-form'>
                <Form onSubmit={handleLoginSubmit} className='form-style'>
                    <Form.Text className="text-warning">
                        <p>{error}</p>
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <div onClick={handleGoogleSignUp} className='text-center bg-primary py-2 text-light'>
                        <span className='me-2'><FaGoogle></FaGoogle></span>
                        <span>Google Sign In</span>
                    </div>
                    <p><small>Are you already register <Link to='/register'>Register now</Link></small></p>
                    <Button className='px-5' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
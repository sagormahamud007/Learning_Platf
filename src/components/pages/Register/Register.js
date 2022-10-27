import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Register.css';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [accepted, setAccepted] = useState(false)
    const [error, setError] = useState('')
    const { createUser, updateUserProfile, googleSignIn, githubLogin } = useContext(AuthContext)
    const provider = new GithubAuthProvider();
    const prov = new GoogleAuthProvider()

    const handleRegisterSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        if (password.length < 6) {
            setError('Password must be 6 character')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')
                setError('')
                handleUpdateProfile(name, photoURL);
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMassage = error.massage;
                setError(errorMassage)
            })

    }
    const handleGoogleSignUp = () => {
        googleSignIn(prov)
            .then(result => {
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    const handleGithubLogin = () => {
        githubLogin(provider)
            .then(result => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.massage;
            })
    }


    return (
        <div className='bg-light container shadow-md mt-3 register'>
            <div className='bg-light'>
                <img className='bg-light w-100 w-full image' src='https://png.pngtree.com/png-clipart/20220910/original/pngtree-register-now-label-with-megaphone-transparent-background-vector-illustration-design-png-image_8529214.png' alt="" />
            </div>

            <Form onSubmit={handleRegisterSubmit} className='w-75 mx-auto py-3'>
                <Form.Text className="text-warning">
                    <p> {error}</p>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-primary'>Your name</Form.Label>
                    <Form.Control type="text" className='text-primary' name='name' placeholder="Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-primary'>URL</Form.Label>
                    <Form.Control type="text" className='text-primary' name='photoURL' placeholder="PhotoURL" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary'>Email address</Form.Label>
                    <Form.Control type="email" className='text-primary' name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-primary'>Password</Form.Label>
                    <Form.Control type="password" className='text-primary'
                        name='password' placeholder="Password" required />
                </Form.Group>

                <div onClick={handleGoogleSignUp} className='text-center bg-primary py-2 text-light'>
                    <span className='me-2'><FaGoogle></FaGoogle></span>
                    <span>Google Sign In</span>
                </div>

                <div onClick={handleGithubLogin} className='text-center bg-primary py-2 text-light mt-3'>
                    <span className='me-2'><FaGithub></FaGithub></span>
                    <span>GitHub Sign In</span>
                </div>

                <p><small>Are you already register <Link to='/login'>Login now</Link></small></p>
                <Form.Group className="mb-3"
                    controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted}
                        type="checkbox"
                        label={<> Accept <Link to='/terms'>Terms and condition</Link></>} />
                </Form.Group>
                <Button className='px-5' variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
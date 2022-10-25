import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'

const Register = () => {
    return (
        <div className='bg-light container shadow-md mt-3 register'>
            <div className='bg-light'>
                <img className='bg-light w-100 w-full image' src='https://png.pngtree.com/png-clipart/20220910/original/pngtree-register-now-label-with-megaphone-transparent-background-vector-illustration-design-png-image_8529214.png' alt="" />
            </div>
            <Form className='w-75 mx-auto py-3'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-primary'>Your name</Form.Label>
                    <Form.Control type="text" className='text-primary' name='name' placeholder="Name" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className='px-5' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
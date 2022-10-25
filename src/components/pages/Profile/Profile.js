import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Profile.css'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='container mt-5 bg-light'>
            <div className='text-center'>
                <img className='images w-25 h-25' src={user?.photoURL} alt="" />
                <h3>{user?.displayName}</h3>
            </div>
            <div className='form-info'>
                <Form className='mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Label>photoURL</Form.Label>
                        <Form.Control readOnly defaultValue={user?.photoURL} type="text" placeholder="photoURL" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Profile;
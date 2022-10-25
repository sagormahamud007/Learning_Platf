import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center mt-5'>
            <h3 className='mb-3'>Go Back </h3>
            <Link to='/register'> <Button className='px-5' variant="primary">Register</Button></Link>
        </div>
    );
};

export default Terms;
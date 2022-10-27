import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer  text-center bg-light mt-5">
            <div className="grid grid-flow-col gap-4">
                <Link className="link link-hover me-4 text-decoration-none">About us</Link>
                <Link className="link link-hover me-4 text-decoration-none">Contact</Link>
                <Link className="link link-hover me-4 text-decoration-none">Jobs</Link>
                <Link className="link link-hover me-4 text-decoration-none">Press kit</Link>
            </div>
            <div className='mb-2 mt-3'>
                <div className="grid grid-flow-col gap-4">
                    <Link className='me-4'><FaFacebook className='fs-3'></FaFacebook></Link>
                    <Link className='me-4 text-primary'><FaGithub className='fs-3'></FaGithub></Link>
                    <Link className='me-4'><FaLinkedin className='fs-3'></FaLinkedin></Link>
                </div>
            </div>
            <div>
                <p className='text-dark mt-4'>Copyright © Md Shagor-Mahamud 2022</p>
            </div>
        </footer>
    );
};

export default Footer;
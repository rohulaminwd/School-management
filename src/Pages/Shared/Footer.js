import React from 'react';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='bg-cyan-900 text-base-content'>
            <div className='flex justify-center items-center'>
                <img src={logo} className='mt-4 w-10' alt="" />
                <h1 className='text-white text-xl font-bold ml-1'>Nabojagorn</h1>
            </div>
            <footer className="footer p-10 px-2 lg:px-16 ox-hidden">
                <div className='rounded-xl shadow-md w-full border text-white border-cyan-700 border-x-8 p-2 md:p-3' data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                    <span className="text-xl font-bold">Services</span> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div className='rounded-xl shadow-md w-full border text-white border-cyan-700 border-x-8 p-2 md:p-3' data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="800">
                    <span className="text-xl font-bold">Company</span> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='rounded-xl shadow-md w-full border text-white border-cyan-700 border-x-8 p-2 md:p-3' data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="800">
                    <span className="text-xl font-bold">Quick Contact</span>
                    <input type="text" placeholder="Email" className="input text-blue-900 input-bordered border-blue-900 input-blue-900 w-full" />
                    <button className='btn btn-secondary btn-sm md:btn-md text-white'>submit</button>
                </div>
            </footer>
            
            <div>
                <p className='text-center text-white pb-4'>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
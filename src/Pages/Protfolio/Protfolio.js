import React from 'react';
import rohul from '../../assets/images/rohul.png'
import {SiPolymerproject} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'

const Protfolio = () => {
    return (
        <div className="ox-hidden">
            <div className='mt-20 mx-4 md:mx-8 lg:mx-16' data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
            <h1 className='text-3xl uppercase font-bold text-center text-cyan-500 my-8'>My Portfolio</h1>
            <div className="border text-center md:w-[500px] mx-auto p-5 border-x-8 border-cyan-200 rounded-2xl shadow-xl">
                <div class="avatar">
                    <div class="w-32 mask mask-squircle">
                        <img src={rohul} />
                    </div>
                </div>
                <div className="">
                    <h1 className='text-cyan-500 font-bold text-2xl'>Rohul amin</h1>
                    <h1 className='font-bold'>Bathkuchi, Nalitabari, Sherpur</h1>
                    <p className=''>I am a student of class Inter 2nd Year Hazi Nururl Haquea Nonni puragong Mointri Collage. and I am junior web developer of MERN stack</p>
                </div>
            </div>
            <h1 className='text-3xl uppercase font-bold text-center underline underline-offset-4 text-blue-500 my-10'>Others Information</h1>
            <div className="grid md:grid-cols-1 mt-10 lg:grid-cols-2 gap-5">
                <div className="border p-3 border-x-8 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Coding Skills</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>HTML & CSS: <span className='text-primary'>90%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="90" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>JavaScript : <span className='text-primary'>60%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="60" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>Node js: <span className='text-primary'>40%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="40" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>React JS: <span className='text-primary'>80%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="80" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>WordPress: <span className='text-primary'>92%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="92" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className="border p-3 border-x-8 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-left" data-aos-delay="400" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Educational Skills</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>HSC - 2020</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>Haji Nurul Haqua Nonni Puragong Moitri Collage</h1>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>SSC - 2018</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>Polasi kura Jonota High School</h1>
                        </div>
                        <h1 className='text-primary mb-5 font-bold text-2xl'>My best Project</h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
                            <a href="https://grocery-stock-90a1c.web.app/" className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'><SiPolymerproject width={24} />Grosari stock</h1>
                            </a>
                            <a href="https://gymnasium-99909.firebaseapp.com/" className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'><SiPolymerproject width={24} />Gymnasium</h1>
                            </a>
                            <a href="https://red-onion-ff595.web.app" className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'><SiPolymerproject width={24} />  Red Onion</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border p-3 border-x-8 my-10 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Contact Information</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Address</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>Batkuchi, Nonni, Nalitabari, Serpur.</h1>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Phone Number</h1>
                            <div class="card-actions mt-3">
                                <a href="tel:+0183194559" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone /> +0183194559 </button></a>
                                <a href="tel:+0183194559" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone /> +0183194559 </button></a>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Email</h1>
                            <div class="card-actions mt-3">
                                <a href="mailto: rohulaminwd@gmail.com"><span className='text-primary text-xl'>rohulaminwd@gmail.com </span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border p-3 border-x-8 my-10 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Project Information</h1>
                    <p className='text-blue-500'>1. This project use react js, node js, Express, HTML, CSS, main code</p>
                    <p className='text-blue-500'>2. Project main 4 page home, portfolio, blog, dashboard</p>
                    <p className='text-blue-500'>3. Home page 7 section banner, footer, purses, review, buisness, brand, some purses section 1 button clik the purses page</p>
                    <p className='text-blue-500'>4. Dashboard simple user 3 page seen profile, add review, my Order and admin 5 page seen profile, manage order, manage product, add admin, add product </p>
                    <p className='text-blue-500'>5. Navbar Notfound page and some animation aos</p>
                    <p className='text-blue-500'>6. React dependence use react hook, react form, firebase, react icon, react payment system added</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Protfolio;
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div class="hero mt-16 lg:py-16 -z-10 bg-cyan-900 lg:w-full ">
            <div class="hero-content px-2 sm:px-4 md:px-8 lg:px-16 flex-col md:flex-row-reverse">
                <div className="">
                 <img src={banner} class=" md:max-w-md " />
                </div>
                <div className='ox-hidden'>
                    <h1 class="md:text-xl text-cyan-300 uppercase font-bold"  data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">Welcome to..</h1>
                    <h1 class="text-2xl sm:text-3xl md:text-5xl text-white font-bold"  data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="800"><span className='text-accent'>Nabojagoron</span> Academy!</h1>
                    <p class="my-2 text-white lg:my-4 sm:w-3/4"  data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="800">Keep Your Vehicle in Great Condition with Top Auto Parts, Engineered for your best workout yet, Select YOur auto parts..</p>
                    <Link to='/register' class="btn btn-secondary text-white md:btn-md btn-sm"  data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="800">Register now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
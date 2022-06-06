import React from 'react';

const BusnessSummery = () => {
    
    return (
        <div className='my-10'>
            <div className="sm:flex bg-gradient-to-r from-cyan-200 to-blue-200 border shadow-lg rounded-xl my-5 items-center p-2 md:p-5">
                <div className="sm:w-[50%]" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                <h1 className='text-xl md:text-3xl text-secondary font-bold'>Have any question about us for get a product request..?</h1>
                <h1 className='md:text-xl text-primary'>don't hesitate to contact us</h1>
                </div>
                <div className="sm:w-[50%] mx-auto" data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="800">
                    <button className='btn btn-sm md:btn-md  btn-secondary text-white my-3 mr-2 sm:mx-3'>Register now</button>
                    <button className='btn btn-sm md:btn-md text-white'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default BusnessSummery;
import React from 'react';
import { Link } from 'react-router-dom';

const BannerTop = () => {
    return (
        <div className='flex items-center px-2 sm:px-4 justify-center md:mb-0 py-10 md:pt-8'>
            <div className="w-full md:w-[80%] flex justify-between items-center lg:-mt-20 bg-gradient-to-r from-cyan-200 to-blue-200 shadow-md p-2 md:p-4 -bottom-20 rounded-xl">
                <div className="">
                    <h1 className='text-xl font-bold text-cyan-900'>school management</h1>
                    <p className="md:my-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor accusamus voluptas! Fugiat, inventore, est esse, porro atque eaque magni tempora facilis</p>
                    <Link to='/register' className='btn btn-sm btn-secondary  text-white font-bold'>Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;
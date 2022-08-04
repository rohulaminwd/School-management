import React from 'react';
import comingSoon from '../../assets/images/coming-soon.png'

const Blog = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className="w-full mx-auto">
                <h1 className='text-3xl text-red-600 uppercase text-center font-bold'>Coming soon This blog</h1>
                <img src={comingSoon} className='w-full md:w-1/3 mx-auto'  alt="" />
            </div>
        </div>
    );
};

export default Blog;
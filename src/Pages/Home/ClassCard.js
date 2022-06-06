import React from 'react';
import './Home.css'

const ClassCard = ({classes}) => {
    return (
        <div className="p-3" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
            <div className='rounded-xl p-3 shadow-box duration-200 hover:-translate-y-1'>
                <div className="rounded-lg">
                    <img src={classes.img} className='rounded-md' alt="" />
                </div>
                <div className="mt-2">
                    <div className="flex items-center justify-between">
                        <h1 className='text-cyan-900 text-xl font-bold '>Class {classes.class}</h1>
                        <h1 className='text-cyan-500 font-bold rounded-md px-2 bg-cyan-200'>55</h1>
                    </div>
                    <p className='font-xs'>{classes.tittle}</p>
                    <button className='btn-sm mt-2 btn w-full btn-secondary text-white'>See details</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
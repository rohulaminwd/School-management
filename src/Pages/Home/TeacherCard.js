import React from 'react';
import './Home.css'
import {FaPhone} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const TeacherCard = ({teacher}) => {
    return (
        <div className='p-3' data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
            <div className="shadow-box rounded-lg border-2 relative bg-secondary duration-200 hover:-translate-y-1">
                <div className="flex items-center justify-between p-3">
                    <div className='cursor-pointer'><a className='text-white font-bold text-xl' href={`mailto: ${teacher.email}`}><SiGmail /></a></div>
                    <div className='cursor-pointer'><a className='text-white font-bold text-xl' href={`tel: ${teacher.phone}`}><FaPhone /></a></div>
                </div>
                <div class="avatar -translate-x-1/2 left-1/2 absolute z-10 top-5">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={teacher.img} alt='teacher' />
                    </div>
                </div>
                <div className="clip-path bg-base-100 w-full h-full">
                    <div className="pt-12 p-2 text-center">
                        <h1 className='text-xl leading-none mb-0 pb-0 text-cyan-900 font-bold placeholder:'>{teacher.name}</h1>
                        <small className='my-0 py-0 text-xs font-bold text-cyan-800'>{teacher.title}</small>
                        <p className='text-sm'>{teacher.describe.slice(0, 200)}</p>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-sm text-center text-white w-full btn-ghost">See Profile</button>
                </div>
            </div>
        </div>
    ); 
};

export default TeacherCard;
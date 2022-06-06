import React, { useEffect, useState } from 'react';
import {SiGmail} from 'react-icons/si'
import {FaPhone} from 'react-icons/fa'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const ContactUs = () => {
    const [map, setMap] = useState([]);
    
    useEffect(() => {
        fetch('GoogleMap.json')
        .then(res => res.json())
        .then(data => setMap(data))
    }, [])
    return (
        <div className='my-10  ox-hidden'>
            <h1 className='text-2xl md:text-4xl text-center py-5 text-cyan-900 font-bold'>Contact Us</h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="border rounded-xl shadow-box p-2 md:p-4" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                    <h1 className='text-xl font-bold'>Contact information</h1>
                    <div className="">
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a sint incidunt. expedita fugit labore omnis!</p>
                        <div className="">
                            <div className='cursor-pointer my-2 flex items-center'><FaPhone />  <a className='font-bold ml-2 text-cyan-900 block' href='tel:01831294559'>+01831294559</a></div>
                        </div>
                        <div className="">
                            <div className='cursor-pointer my-2 flex items-center'><FaPhone />  <a className='font-bold ml-2 text-cyan-900 block' href='tel:01831294559'>+01965476647</a></div>
                        </div>
                        <div className="">
                            <div className='cursor-pointer my-2 flex items-center'><SiGmail /> <a className='font-bold ml-2 text-cyan-900' href='mailto:rohulamin@gmail.com'>rohulamin@gmail.com</a></div>
                        </div>
                        <div className="">
                            <div className='cursor-pointer my-2 flex items-center'><GrLocation /> <a className='font-bold ml-2 text-cyan-900' href='mailto:rohulamin@gmail.com'>Nonni, Nalitabari, Sherpur</a></div>
                        </div>
                    </div>
                    <div className="">
                        <button className='btn md:text-xl btn-sm md:btn-md btn-circle btn-secondary border-2 border-accent text-cyan-900 font-bold'><FiFacebook /></button>
                        <button className='btn md:text-xl btn-sm md:btn-md btn-circle mx-2 btn-secondary border-2 border-accent text-cyan-900 font-bold'><AiOutlineTwitter /></button>
                        <button className='btn md:text-xl btn-sm md:btn-md btn-circle btn-secondary border-2 border-accent text-cyan-900 font-bold'><BsInstagram /></button>
                        <button className='btn md:text-xl btn-sm md:btn-md btn-circle mx-2 btn-secondary border-2 border-accent text-cyan-900 font-bold'><FaPhone /></button>
                    </div>
                </div>
                <div className="border rounded-xl" data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="1000">
                    {
                        map.map(i => <iframe className='w-full h-full rounded-xl' 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        src={i.map}></iframe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
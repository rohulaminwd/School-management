import React, { useState } from 'react';
import './dashboard.css'
import { motion } from "framer-motion"
import { useAuthState } from 'react-firebase-hooks/auth';
import {FaChevronLeft} from 'react-icons/fa'
import {IoIosAddCircle} from 'react-icons/io'
import {FaUserTie} from 'react-icons/fa'
import {GrProductHunt} from 'react-icons/gr'
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import {FiUserX} from 'react-icons/fi'
import {FaUserCog} from 'react-icons/fa'
import {AiOutlineFileProtect} from 'react-icons/ai'
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(false);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="flex">
            <motion.div 
            animate={{ width: !open ? '80px' : '210px',
                transition:{
                    duration: 0.5,
                    type: 'spring',
                    damping: 10, 
                }
            }}
            className={`${!show ? 'block' : 'hidden'} md:block p-2 pt-20 h-screen bg-blue-900 z-20 fixed md:relative`}
            >
                <div onClick={() => setOpen(!open)} className={`${!open && "rotate-180"} absolute cursor-pointer p-1 border-blue-900 border-2 rounded-full text-blue-900 font-bold top-28 -right-3 bg-white`}> <FaChevronLeft /> </div>
                <div className="flex items-center pt-4">
                    <img src={logo} className={`cursor-pointer w-14 duration-500 ${!open && 'rotate-[360deg]'}`} alt="" />
                    {open && <h1 className={`text-white ml-2 origin-left text-2xl whitespace-nowrap duration-300 font-medium`}>E school</h1>}
                </div>
                <div className="mt-4">
                    <ul class="text-white menu overflow-y-auto">
                        <li className='font-bold my-1'>
                            <NavLink activeClassName='active' to='/dashboard/'>
                                <FaUserTie size={'20px'} /> 
                                <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>My Profile</h1>
                            </NavLink>
                        </li>
                        { !admin && <>
                            <li className='font-bold my-1'>
                                <NavLink to='/dashboard/myOrder'>
                                    <AiOutlineFileProtect size={'20px'} /> 
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>My Orders</h1>
                                </NavLink>
                            </li>
                            <li className='font-bold my-1'>
                                <NavLink to='/dashboard/addReview'>
                                    <IoIosAddCircle size={'20px'} /> 
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Add Review</h1>
                                </NavLink>
                            </li>
                          </>
                        }
                        { admin && <>
                            <li className='font-bold my-1'>
                                <NavLink to='/dashboard/manageOrder'>
                                    <AiOutlineFileProtect size={'20px'} /> 
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Mange All Order</h1>
                                </NavLink>
                            </li>
                            <li className='font-bold my-1'>
                                <NavLink to='/dashboard/addProduct'>
                                    <FiUserX size={'20px'} /> 
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Add Product</h1>
                                </NavLink>
                            </li>
                            <li className='font-bold my-1'>
                                <NavLink to='/dashboard/users'>
                                    <FaUserCog size={'20px'} /> 
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Make Admin</h1>
                                </NavLink>
                            </li>
                            <li className='font-bold my-1'>
                                <NavLink to='/dashboard/manageProduct'>
                                    <GrProductHunt size={'20px'}/> 
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Manage Product</h1>
                                </NavLink>
                            </li>
                          </>
                        }
                    </ul>
                </div>
            </motion.div>
            <div className="bg-base-100 flex-1 relative pt-[80px] p-4 h-screen overflow-y-auto">
                <div onClick={() => setShow(!show)} className={`${!show && ""} md:hidden fixed z-50 cursor-pointer rounded-2xl text-white p-2 pr-4 font-bold top-[63px] -right-3 bg-blue-900`}>{!show ? <MdClose /> : <FaBars />}</div>
                <h1 className='text-center text-primary text-4xl font-bold'>Dashboard</h1>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
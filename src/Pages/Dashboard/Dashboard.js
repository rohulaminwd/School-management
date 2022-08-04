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
import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/Student-avatar.jpg'
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import { useContext } from 'react';
import { ProfileContext, titleContext, userContext } from '../../App';

const Dashboard = ({applyUsers, userClass}) => {
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(false);
    const [ProfileUser, setProfileUser] = useContext(ProfileContext);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const [title, setTitle] = useContext(titleContext)
    const [users, students, teachers, gardens] = useContext(userContext)
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
            className={`${!show ? 'block' : 'hidden'} md:block pt-20 h-screen bg-blue-100 z-20 fixed md:relative`}
            >
                <div className="bg-base-100  border-r rounded-lg p-2 h-full">
                    <div onClick={() => setOpen(!open)} className={`${!open && "rotate-180"} absolute cursor-pointer p-1 border-white border-2 rounded-full text-blue-900 font-bold top-28 -right-2.5 bg-white`}> <FaChevronLeft /> </div>
                    <div className="flex items-center pt-4">
                        <img src={logo} className={`cursor-pointer w-14 duration-500 ${!open && 'rotate-[360deg]'}`} alt="" />
                        {open && <h1 className={`text-cyan-900 ml-2 origin-left text-2xl whitespace-nowrap duration-300 font-medium`}>E school</h1>}
                    </div>
                    <div className="mt-4">
                        <ul className="text-cyan-900 menu overflow-y-auto">
                            <li className='font-bold my-1'>
                                <NavLink onClick={() => setProfileUser(user?.email)} activeClassName='active' to='/dashboard/'>
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
                                    <NavLink to='/dashboard/addResult'>
                                        <FiUserX size={'20px'} /> 
                                        <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Add Result</h1>
                                    </NavLink>
                                </li>
                                <li className='font-bold my-1'>
                                    <NavLink to='/dashboard/users'>
                                        <FaUserCog size={'20px'} /> 
                                        <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Manage Users</h1>
                                    </NavLink>
                                </li>
                                <li className='font-bold my-1'>
                                    <NavLink to='/dashboard/manageProduct'>
                                        <GrProductHunt size={'20px'}/> 
                                        <h1 className={`origin-left whitespace-nowrap duration-300 font-medium ${!open && 'scale-0 hidden'}`}>Attendance</h1>
                                    </NavLink>
                                </li>
                            </>
                            }
                        </ul>
                        <div className="mt-3">
                            { admin && <Link to='/dashboard/applyUser' className="w-full">
                                <div className="border border-green-800 items-center text-center mb-2 bg-green-600 hover:bg-green-800 p-1 rounded-md w-full">
                                    <div className="px-2 w-auto bg-green-700 rounded-md">
                                        <span className='text-xl font-bold p-0 m-0 text-white'>{applyUsers}</span>
                                    </div>
                                    <h1 className='text-sm mt-0 text-white font-bold pt-0'>Apply</h1>
                                </div>
                            </Link>}
                        </div>
                        <div className="mt-20">
                            <Link onClick={() => setProfileUser(user?.email)} to='/dashboard/' className="w-full">
                                <div className={`items-center mb-2 text-center bg-blue-200 p-2 rounded-md w-full ${open && 'flex'}`}>
                                    <div className="avatar online">
                                        <div className="w-10 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-1">
                                            {userClass?.image? <img src={userClass.image} alt='profile'/> : <img src={profile} alt='profile'/>}
                                        </div>
                                    </div>
                                    <div className={`${open && 'ml-2 text-left'}`}>
                                        <h1 className='text-sm mt-0 text-cyan-900 font-bold pt-0'>{userClass?.name}</h1>
                                        {/* <h1 className='text-sm mt-0 text-cyan-800 pt-0'>{userClass?.role}</h1> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div> 
            </motion.div>
            <div className="bg-blue-100 flex-1 relative pt-[80px] sm:pt-[80px] p-2 sm:p-4 h-screen overflow-y-auto">
                <div onClick={() => setShow(!show)} className={`${!show && ""} md:hidden fixed z-50 cursor-pointer rounded-2xl text-white p-2 pr-4 font-bold top-[63px] -right-3 bg-blue-900`}>{!show ? <MdClose /> : <FaBars />}</div>
                <div className="p-2 sm:p-3 border flex justify-between mb-2 sm:mb-3 items-center bg-white rounded-lg">
                    <div className="">
                        <h1 className='text-cyan-800 text-2xl md:text-4xl font-bold'>{title}</h1>
                        <h1 className='text-primary text-sm sm:text-lg md:text-2xl font-bold'>Nabojagorn Academe</h1>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
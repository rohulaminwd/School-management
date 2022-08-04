import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from  '../../assets/images/logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import { FaBlogger } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'
import {HiOutlineLogin} from 'react-icons/hi'
import profile from '../../assets/images/Student-avatar.jpg'

const Navbar = ({userClass}) => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li className='mx-1'>
            <NavLink className='' to='/' >
                <div className='sm:flex justify-center sm:items-center'>
                    <div className='font-bold fontSize text-[18px] sm:block flex justify-center'><AiOutlineHome /></div>
                    <span className='ml-1 mt-0 hide-p sm:text-[18px] text-sm'>Home</span>
                </div>
            </NavLink>
        </li>
        <li className='mx-1'>
            <NavLink className='' to='/blog' >
                <div className='sm:flex justify-center sm:items-center'>
                    <div className='font-bold fontSize text-[18px] sm:block flex justify-center'><FaBlogger /></div>
                    <span className='ml-1 mt-0  hide-p sm:text-[18px] text-sm'>Blog</span>
                </div>
            </NavLink>
        </li>
        {user && <li className='mx-1'>
            <NavLink className='' to='/dashboard' >
                <div className='sm:flex justify-center sm:items-center'>
                    <div className='font-bold fontSize text-[18px] sm:block flex justify-center'><MdOutlineDashboard /></div>
                    <span className='ml-1 mt-0 hide-p sm:text-[18px] text-sm'>Dashboard</span>
                </div>
            </NavLink>
        </li>
        }
    </>

    const ProfileItems = <>
        <li className='pl-2 ml-0 list-none'>
          {
              user?
              <div className="dropdown p-0 dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle online avatar">
                        <div className="w-8 sm:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                         { userClass?.image? <img src={userClass?.image} alt='profile' /> : <img src={profile} alt='profile' />}
                        </div>
                    </label>
                    <ul tabindex="0" className="p-2 shadow-md border text-cyan-800 border-blue-200 top-[60px] menu menu-compact dropdown-content bg-base-100 rounded-box w-48">
                        <div className="text-center border-b-2 border-blue-200 mb-3">
                            <div className="avatar online">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                 { userClass?.image? <img src={userClass?.image} alt='profile' /> : <img src={profile} alt='profile' />}
                                </div>
                            </div>
                            <h1 className='mb-2 text-blue-900'>{userClass?.name}</h1>
                        </div>
                        <li className='mx-1'>
                            <NavLink className='' to='/dashboard' >
                                <div className='sm:flex justify-center sm:items-center'>
                                    <div className='font-bold fontSize text-[18px] sm:block flex justify-center'><MdOutlineDashboard /></div>
                                    <span className='ml-1 mt-0 hide-p sm:text-[18px] text-sm'>Dashboard</span>
                                </div>
                            </NavLink>
                        </li>
                        <li><a>Update Profile</a></li>
                        <li><a>Settings</a></li>
                        <li onClick={logOut}><a>Sign Out</a></li>
                    </ul>
                </div>
              :
              <li className='mx-1'>
                <NavLink className='' to='/Login' >
                    <div className='sm:flex justify-center sm:items-center'>
                        <div className='font-bold text-[18px] sm:block flex justify-center'><HiOutlineLogin /></div>
                        <span className='ml-1 mt-0 block sm:text-[18px] text-sm'>Login</span>
                    </div>
                </NavLink>
            </li>
          }
        </li>
    </>
    return (
        <div className="fixed top-0 z-50 font-bold left-0 bg-white text-cyan-900 w-full">
            <div className="navbar p-0 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <a className="btn p-0 btn-ghost normal-case text-xl">
                        <img src={logo} className='w-12' alt="" />
                        <h1 className='text-xl text-secondary uppercase hidden sm:block font-bold'>Nabogaron</h1>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="flex">
                        <ul className="menu menu-horizontal font-bold p-0">
                            {menuItems}
                        </ul>
                    </div>
                    {ProfileItems}
                    {/* <div className="dropdown dropdown-end text-cyan-900 lg:text-white lg:hidden">
                        <label tabindex="1" className="btn p-0 btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    {ProfileItems} */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
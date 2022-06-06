import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from  '../../assets/images/logo.png'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
        <li className='mx-2'><NavLink to='/' >Home</NavLink></li>
        <li className='mx-2'><NavLink to='/Portfolio'>Portfolio</NavLink></li>
        <li className='mx-2'><NavLink to='/blog' >Blog</NavLink></li>
        {user && <li className='mx-2'><NavLink to='/dashboard' >Dashboard</NavLink></li>}
    </>

    const ProfileItems = <>
        <li className='pl-2 ml-0 list-none'>
          {
              user?
              <div class="dropdown p-0 dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle online avatar">
                        <div class="w-8 sm:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                        { user?.photoURL? <img src={user.photoURL} alt='profile' /> : <img src="https://api.lorem.space/image/face?hash=33791" alt='profile' />}
                        </div>
                    </label>
                    <ul tabindex="0" class="p-2 shadow-md border text-cyan-800 border-blue-200 top-[60px] menu menu-compact dropdown-content bg-base-100 rounded-box w-48">
                        <div className="text-center border-b-2 border-blue-200 mb-3">
                            <div class="avatar online">
                                <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                { user?.photoURL? <img src={user.photoURL} alt='profile' /> : <img src="https://api.lorem.space/image/face?hash=33791" alt='profile' />}
                                </div>
                            </div>
                            <h1 className='mb-2 text-blue-900'>{user.displayName}</h1>
                        </div>
                        <li>
                            <NavLink to='/dashboard/'>Profile</NavLink>
                        </li>
                        <li><a>Update Profile</a></li>
                        <li><a>Settings</a></li>
                        <li onClick={logOut}><a>Sign Out</a></li>
                    </ul>
                </div>
              :
              <Link to='/Login' >Login</Link>
          }
        </li>
    </>
    return (
        <div className="fixed top-0 z-50 font-bold left-0 bg-cyan-900 text-white w-full">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <a className="btn p-0 btn-ghost normal-case text-xl">
                        <img src={logo} className='w-12' alt="" />
                        <h1 className='text-xl text-secondary uppercase hidden sm:block font-bold'>Nabogaron</h1>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal font-bold p-0">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end text-cyan-900 lg:text-white lg:hidden">
                        <label tabindex="1" className="btn p-0 btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    {ProfileItems}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import profile from '../../assets/images/Student-avatar.jpg'
import {FaPhone} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import { ProfileContext } from '../../App';
import { Link } from 'react-router-dom';

const UsersRow = ({user, index, setDeletingModal}) => {
    const {email, name, role, subject, phone} = user;
    const [ProfileUser, setProfileUser] = useContext(ProfileContext);
    const classe = user.class;
    const makeAdmin = () => {
        fetch(`https://arcane-journey-12889.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('fail to make an admin') 
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('success make an admin')
            }
        })
    }
    return (
        <div className="p-3 rounded-lg flex items-center justify-between bg-white ">
            <div className="flex items-center w-full">
                <h1 className='font-bold'>{index + 1}</h1>
                <div className="flex items-center w-full ml-2">
                    <Link to='/dashboard/' onClick={() => setProfileUser(user?.email)} className="avatar">
                        <div className="w-12 mask mask-squircle">
                        {user?.image?  <img src={user?.image} alt='profile' /> : <img src={profile} alt='profile' />}
                        </div>
                    </Link>
                    <div className="sm:flex ml-2 w-full items-center">
                        <div className="w-full">
                            <h1 className='text-cyan-900 text-xl mb-0 font-bold'>{name}</h1>
                            <h1 className='text-sm hidden sm:block text-green-900 font-bold'>{email}</h1>
                        </div>
                        <div className="sm:ml-2 w-full lg:ml-20">
                            {role === 'admin' && <h1 className='text-red-600 capitalize mb-0 font-bold'>{role}</h1>}
                            {role === 'student' && <h1 className='text-green-600 capitalize mb-0 font-bold'>{role}</h1>}
                            {role === 'teacher' && <h1 className='text-purple-700 capitalize mb-0 font-bold'>{role}</h1>}
                            {role === 'garden' && <h1 className='text-blue-600 capitalize mb-0 font-bold'>{role}</h1>}
                            { role === "student" && <h1 className='text-sm capitalize text-green-900 font-bold'>Class: {classe}</h1>}
                            { role === "teacher" && <h1 className='text-sm capitalize text-green-900 font-bold'>Subject: {subject}</h1>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <a className='block' href={`tel:{phone}`} >
                    <button className="btn btn-ghost bg-green-200  text-green-700 btn-xs">
                        <span className=''><FaPhone /></span>
                    </button>
                </a>
                <label onClick={() => setDeletingModal(user)} for="delete-confirm-modal" className="btn ml-2 btn-ghost text-red-700 btn-xs" disabled={role === "admin"}>
                    <span className=' text-xl font-bold px-0 mx-0'><MdDelete /> </span>
                </label>
            </div>
        </div>
    );
};

export default UsersRow;
import React, { useContext, useState } from 'react';
import profile from '../../assets/images/Student-avatar.jpg'
import { attendanceContext, ProfileContext, titleContext } from '../../App';
import {FaPhone, FaUserEdit} from 'react-icons/fa'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import bg1 from '../../assets/images/bg-4.jpg'
import UpdateModul from '../Modul/UpdateModul';
import { useEffect } from 'react';
import ResultCart from '../Shared/ResultCart';

const MyProfile = ({setClass}) => {
    const [title,  setTitle] = useContext(titleContext);
    const [attendance, dateAttendance, present, absent ] = useContext(attendanceContext);
    const [updateModal, setUpdateModal] = useState(null)
    const [ProfileUser, setProfileUser] = useContext(ProfileContext);
    const [date, setDate] = useState(new Date('2022-07-10T10:12:50.5000z'))
    const formateDate = format(date, 'PP')
    const email = ProfileUser;
    setTitle('My Profile');

    const {data: user, isLoading, refetch} = useQuery(['UserProfile', email], () => fetch(`http://localhost:5000/UserProfile/${email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const {data: Result} = useQuery(['ExamResults', email], () => fetch(`http://localhost:5000/ExamResults/${email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    useEffect(() => {
        setClass(user)
    }, [user])

    let pre = []
    let abs = []

    console.log(attendance);
    console.log(dateAttendance);
    console.log(present);
    console.log(absent);

    present.map(i => {
        const p = new Date(i.date);
        pre.push(p);
    })

    absent.map(i => {
        const A = new Date(i.date);
        abs.push(A);
    })


    if(isLoading){
        <Loading />
    }

    // ======== Day pikers ========
    const bookedStyle = { border: '2px solid red', color: 'red', backgroundColor: '#f6eaf9', fontSize: '120%',}
    const mySelected = { border: '2px solid green', fontSize: '120%', backgroundColor: '#cefce6', color: 'green', }
    const myToday = { color: 'purple', fontSize: '130%'}



    return (
        <div className=''>
            <div className="md:flex gap-3 w-full">
                <div className="w-full">
                    <div className="bg-white w-full rounded-xl p-2 sm:p-3">
                        <div style={{ backgroundImage: `url(${bg1})` }} className="w-full bg-cover bg-orange-200 flex items-center justify-center rounded-md h-40">
                            <div className="">
                                <h1 className='text-xl md:text-4xl pt-3 font-bold uppercase text-center text-purple-500'>Nabojagoron Academy</h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div className="flex items-center">
                                <div className="avatar lg:ml-10 ml-5 -mt-10">
                                    <div className="w-24 sm:w-28 rounded-full ring bg-blue-200 ring-base-100 ring-offset-blue-600 ring-offset-2">
                                    {user?.image?  <img src={user?.image} alt='profile' /> : <img src={profile} alt='profile' />}
                                    </div>
                                </div>
                                <div className="w-full pl-2">
                                    {user?.role === 'admin' && <h1 className='text-red-600 sm:text-2xl uppercase mb-0 font-bold'>{user?.role}</h1>}
                                    {user?.role === 'student' && <h1 className='text-green-600 sm:text-2xl uppercase mb-0 font-bold'>{user?.role}</h1>}
                                    {user?.role === 'teacher' && <h1 className='text-purple-700 sm:text-2xl uppercase mb-0 font-bold'>{user?.role}</h1>}
                                    {user?.role === 'garden' && <h1 className='text-blue-600 sm:text-2xl uppercase mb-0 font-bold'>{user?.role}</h1>}
                                    { user?.role === "student" && <h1 className='text-xs sm:text-sm capitalize text-green-900 font-bold'>Class: {user?.class}</h1>}
                                    { user?.role === "teacher" && <h1 className='text-xs sm:text-sm capitalize text-green-900 font-bold'>Subject: {user?.subject}</h1>}
                                </div>
                            </div>
                            <div className="ml-3 flex ">
                                <a className='block' href={`tel:{user?.phone}`} >
                                    <button className="btn bg-green-200 btn-ghost text-green-700 btn-xs">
                                        <span className=''> <FaPhone /></span>
                                    </button>
                                </a>
                                <label onClick={() => setUpdateModal(user)} for="add-update-modal" className="btn ml-2 bg-blue-200 btn-ghost text-blue-700  btn-xs">
                                    <span className='font-bold'><FaUserEdit /></span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center w-full justify-between">
                            <div className="w-full">
                                <h1 className='text-2xl font-bold text-cyan-900'>{user?.name}</h1>
                                <h1 className='text-cyan-700 font-bold'>{user?.address}</h1>
                            </div>
                            <div className="border-l-2 w-full flex justify-between items-center border-green-800">
                                <div className="text-center w-full">
                                    <h1 className='text-xl font-bold text-orange-800'>{absent?.length}</h1>
                                    <span className='text-xs text-red-700 sm:text-sm font-bold'>Absent</span>
                                </div>
                                <div className="text-center w-full border-l-2 border-green-800">
                                    <h1 className='text-xl font-bold text-green-800'>{present?.length}</h1>
                                    <span className='text-xs text-green-700 sm:text-sm font-bold'>Present</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                           { !user?.bio && <span className='text-xs block l-height sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur atque ullam distinctio dolorem eaque laboriosam obcaecati temporibus amet, non enim vel quaerat vero sunt suscipit, aliquid ex, necessitatibus voluptate!</span>}
                           { user?.bio && <span className='text-xs block l-height sm:text-sm'>{user?.bio}</span>}
                        </div>
                        <div className="w-full flex my-2 justify-between items-center">
                            { user?.role === 'student' && <div className=" w-full">
                                <h1 className='text-xl font-bold'>Class Roll: <span className='text-2xl text-green-800'>{user?.roleNo}</span></h1>
                            </div>}
                            <div className="w-full text-right">
                                <h1 className='text-xl font-bold'>Age: <span className='text-2xl text-green-800'>{user?.age}</span></h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-between gap-2 sm:gap-3 mt-3 items-center">
                            <div className="text-center w-full bg-purple-100 rounded-md p-2">
                                <h1 className='text-xl font-bold text-orange-800'>12</h1>
                                <span className='text-xs sm:text-sm font-bold'>Absent</span>
                            </div>
                            <div className="text-center w-full bg-orange-100 rounded-md p-2">
                                <h1 className='text-xl font-bold text-green-800'>12</h1>
                                <span className='text-xs sm:text-sm font-bold'>Present</span>
                            </div>
                            <div className="text-center w-full bg-cyan-100 rounded-md p-2">
                                <h1 className='text-xl font-bold text-green-800'>12</h1>
                                <span className='text-xs sm:text-sm font-bold'>Present</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 sm:mt-3">
                        {
                            Result && Result.map(exam => <ResultCart
                                key={exam._id}
                                exam={exam}
                                 />)
                        }
                    </div>
                </div>
                <div className=" w-full sm:w-[320px] lg:w-[328px] mx-auto mt-3 md:mt-0 rounded-xl">
                    <div className="w-full bg-white p-3 rounded-md">
                        <div className='mx-auto'>
                            <DayPicker 
                                mode="single"
                                selected={pre}
                                defaultMonth={new Date} 
                                fromYear={(2022)}
                                modifiers={{ booked: abs }}
                                modifiersStyles={{ 
                                    booked: bookedStyle, 
                                    selected: mySelected,
                                    today: myToday
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                updateModal && <UpdateModul 
                updateModal={updateModal} 
                refetch={refetch} 
                setUpdateModal={setUpdateModal}
                />
            }
        </div>
    );
};

export default MyProfile;
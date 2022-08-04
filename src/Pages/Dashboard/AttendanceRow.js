import React from 'react';
import { useState } from 'react';
import profile from '../../assets/images/Student-avatar.jpg'

const AttendanceRow = ({student, attendanceData, index, newArr}) => {



    const item = newArr?.find(i => i?.email.includes(student.email))

    const [p, setP] = useState(item.status)

    const handleClick = () => {
        if(item.status === "A"){
            newArr[index].status = "P";
            setP("P")
        }else{
            newArr[index].status = "A";
            setP("A")
        }
    }

    // const handleAttendance = () => {

    //     const data = {
    //         name : attendanceData.name,
    //         class : attendanceData.name,
    //         subject : attendanceData.subject,
    //         date: new Date,
    //         newArr,
    //     }
    // }



    return (
        <div className="">
            <div onClick={() => handleClick()} className={`rounded-xl cursor-pointer bg-white p-2 ${(p === "P")? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-800' }`}>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1 className='text-xl font-bold '>{student.roleNo}</h1>
                    </div>
                    <div className="">
                        { p === "P" && <h1 className='text-xl font-bold text-green-700'>{p}</h1>}
                        { p === "A" && <h1 className='text-xl font-bold text-red-800'>{p}</h1>}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-5 rounded-full">
                        {student?.image?  <img src={student?.image} alt='profile' /> : <img src={profile} alt='profile' />}
                        </div>
                    </div>
                    <div className="text-center ml-1">
                        <p className='text-xs capitalize'>{student.name.slice(0,6)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceRow;
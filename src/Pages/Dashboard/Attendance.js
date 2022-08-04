import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {titleContext, userContext } from '../../App';
import Loading from '../Shared/Loading';
import AttendanceRow from './AttendanceRow';


const Attendance = () => {

    const [users, students, teachers, gardens] = useContext(userContext);

    const [title, setTitle] = useContext(titleContext)
    setTitle("Attendance of Student")
    const [date, setDate] = useState(new Date)
    const formateDate = format(date, 'PP')
    const [Attendance, setAttendance] = useState()

    const handleClass = (classData) => {

        const studentValue = students?.filter(i => i?.class?.includes(classData));
        const sorted = studentValue?.sort(function(a, b){
           return a.roleNo - b.roleNo
        })
        setData(sorted)
        setClass(classData)
    }

    const studentValue = students?.filter(i => i?.class?.includes("Six"));
    const sorted = studentValue?.sort(function(a, b){
        return a.roleNo - b.roleNo
    })


    const [data, setData] = useState(sorted);
    const [subject, setSubject] = useState('Bangla');
    const [classes, setClass] = useState('Six');
    const [id, setId] = useState()

    useEffect(() => {

        fetch(`http://localhost:5000/attendance/${classes}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => setAttendance(data));

    }, [classes])


    const Dates = []
    Attendance?.map(date => {
        const formateDate = format(new Date(date.date), 'PP')
        Dates.push(formateDate);
    })
    const exsist = Dates?.filter(x => x === formateDate);
    console.log("exsist", exsist)

    console.log(Dates);

    let attendance = []

    data && data?.map(item => {
        
        const data = {
            status: "A",
            date: new Date,
            email: item.email,
            roleNo: item.roleNo
        }

        attendance.push(data);

    })

    console.log("data", Attendance)

    const newArr = [...attendance]

    const attendanceData = {
        subject: subject,
        date: new Date,
        class: classes,
        name: 'Rohul amin',
        newArr,
    }


    const handleAttendance = () => {

        fetch('http://localhost:5000/attendance', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(attendanceData)
            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success('Attendance successful');
                    setId(inserted.insertedId)
                }else{
                    toast.error('Opps no..! Please try again.')
                }
            })
    }

    return (
        <div> 
            <div className="">
                <div className="w-full">
                    <div className="bg-white rounded-lg w-full p-3">
                        <div className="w-full flex justify-between">
                            <h1 className='text-xl text-cyan-600 font-bold'>Rohul amin</h1>
                            <h1 className='text-xl text-purple-700 font-bold'>{formateDate}</h1>
                        </div>
                        <div className="flex w-full mt-3 gap-x-3 justify-between">
                            <div className="w-full">
                                <p className='text-green-800 mb-1'>Select Class</p>
                                <select
                                    onChange={(e) => handleClass(e.target.value)}
                                    className="select sm:select-md select-sm select-bordered select-success rounded-md w-full" >
                                    <option value="Six" select>Six</option>
                                    <option value="Seven">Seven</option>
                                    <option value="Eight">Eight</option>
                                    <option value="Nine">Nine</option>
                                    <option value="Tan">Tan</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <p className='text-green-800 mb-1'>Select Subject</p>
                                <select
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="select sm:select-md select-sm select-bordered select-success rounded-md w-full" >
                                    <option value="Bangla" select>Bangla</option>
                                    <option value="English">English</option>
                                    <option value="Math">Math</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Biology">Biology</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attendance-grid mt-4">
                    {
                        data && data.map((student, index) => <AttendanceRow 
                        key={student._id}
                        index={index}
                        student={student}
                        newArr={newArr}
                        attendance={attendance}
                        attendanceData={attendanceData}
                        />)
                    }
                </div>
                <div className="mt-3">
                    <button onClick={() => handleAttendance()} disabled={(id || (exsist[0] === formateDate))} className="btn text-white btn-success w-full">submit</button>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
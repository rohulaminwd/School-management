import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { titleContext, userContext } from '../../App';
import profile from '../../assets/images/Student-avatar.jpg'
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import useTimer from '../../Hooks/useTimer';
import ExamName from '../Shared/ExamName';
import Loading from '../Shared/Loading';

const AddResult = ({userClass}) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [users, students, teachers, gardens] = useContext(userContext);
    const [title, setTitle] = useContext(titleContext)
    setTitle("Add Exam Result")
    const [date, setDate] = useState(new Date)
    const formateDate = format(date, 'PP')
    const dateFormate = format(date, 'dd')

    const {data: Name, isLoading, refetch} = useQuery('ExamName', () => fetch('http://localhost:5000/ExamName', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    const [timeLefts] = useTimer(Name)
    if(isLoading){
        <Loading />
    }
// ============ class ===========

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

// ========= Role ===========
    const handleRole = (role) => {
        const student = data?.find(i => i?.roleNo?.includes(role));
        setRole(student)
    }

    const student = data?.find(i => i?.roleNo?.includes("01"));
    const [Role, setRole] = useState(student);

    const [subject, setSubject] = useState('Bangla');
    const [classes, setClass] = useState('Six');
    const [id, setId] = useState()


    // ======= add result =======
    const [results, setResult] = useState();
    const name = Name && Name[0]?.name;
    useEffect(() => {

        fetch(`http://localhost:5000/ExamResult/${name}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => setResult(data));

    }, [name])

    const exsistResult = results?.find(i => i?.student?.includes(Role.email))

    const onSubmit = (data) => {

        const results = {
            subject: subject,
            writing: data.writing,
            mcq: data.mcq,
            feedback: data.bio,
            date: date,
            sir: userClass?.name
        }

        const ExamResult = {
            name: Name[0]?.name,
            student: Role.email,
            class: Role.class,
            RollNo: Role.roleNo,
            result: [results]
        }

        if(!exsistResult){

            fetch('http://localhost:5000/ExamResult', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(ExamResult)
            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success('Add Exam Result successful');
                    setId(inserted.insertedId)
                    reset()
                    refetch()
                }else{
                    toast.error('Opps no..! Please try again.')
                }
            })
        }
        else if(exsistResult){
                fetch(`http://localhost:5000/ExamResult/${exsistResult?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'                    
                },
                body: JSON.stringify(results)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount){
                        toast.success('Add Exam Result successful');
                        reset()
                        refetch()
                    }else{
                        toast.error('Opps no..! Please try again.')
                    }
            })
        }
    }


    return (
        <div>
            <div className="w-full">
                    <div className="bg-white rounded-lg w-full p-3">
                        <div className="w-full flex justify-between">
                            <h1 className='text-xl text-cyan-600 font-bold'>{userClass?.name}</h1>
                            <h1 className='text-xl text-purple-700 font-bold'>{formateDate}</h1>
                        </div>
                        <div className="flex w-full mt-3 gap-x-2 sm:gap-x-3 justify-between">
                            <div className="w-full">
                                <p className='text-green-800 mb-1'>Select Class</p>
                                <select
                                    onChange={(e) => handleClass(e.target.value)}
                                    className="select sm:select-md select-sm select-bordered px-1 select-success rounded-md w-full" >
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
                                    className="select sm:select-md select-sm select-bordered px-1 select-success rounded-md w-full" >
                                    <option value="Bangla" select>Bangla</option>
                                    <option value="English1">English1</option>
                                    <option value="English2">English2</option>
                                    <option value="Math">Math</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Biology">Biology</option>
                                </select>
                            </div>
                            <div className="w-40 sm:w-52">
                                <p className='text-green-800 mb-1'>RollNo</p>
                                <select
                                    onChange={(e) => handleRole(e.target.value)}
                                    className="select sm:select-md select-sm select-bordered px-1 select-success rounded-md w-full" >
                                    {
                                        data?.map(item => <option key={item.roleNo} value={item?.roleNo} select>{item?.roleNo}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg w-full bg-white p-3 mt-2 sm:mt-3">
                        <div className="flex w-full items-center">
                            <div className="flex items-center w-full">
                                <div className="avatar">
                                    <div className="w-10 ring rounded-full">
                                    {Role?.image?  <img src={Role?.image} alt='profile' /> : <img src={profile} alt='profile' />}
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <h1 className='text-cyan-900 mb-0 font-bold'>{Role?.name}</h1>
                                    <h1 className='text-sm text-green-900 font-bold'>{Role?.class}</h1>
                                </div>
                            </div>
                            <div className="">
                                <h1 className='text-cyan-900 text-xl mb-0 font-bold'>{Role?.roleNo}</h1>
                            </div>
                        </div>
                        <div className="w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="mt-3">
                                    <div className="flex text-center gap-2 sm:gap-3 justify-between items-center">
                                        <div className="w-full">
                                            <input 
                                                type="number" 
                                                placeholder="Writing part" 
                                                className="input input-bordered input-success w-full" 
                                                {...register("writing", {
                                                    required: {
                                                        value: true,
                                                        message: 'result required'  
                                                    }
                                                })}
                                            />
                                            <label className="label text-xs">
                                            {errors.writing?.type === 'required' && <span className="label-text-alt text-red-500">{errors.writing.message}</span>}
                                            </label>
                                        </div>
                                        { (subject !== ("English1" && "English2")) && <div className="w-full">
                                            <input 
                                                type="number"
                                                placeholder="MCQ part" 
                                                className="input input-bordered input-success w-full" 
                                                {...register("mcq", {
                                                    required: {
                                                        value: true,
                                                        message: 'result required'  
                                                    }
                                                })}
                                            />
                                            <label className="label text-xs">
                                            {errors.mcq?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mcq.message}</span>}
                                            </label>
                                        </div> 
                                        }
                                    </div>
                                    <div className="">
                                        <textarea  
                                            className="textarea w-full textarea-success" 
                                            placeholder="Exam Feedback"
                                            {...register("bio", {
                                                required: {
                                                    value: true,
                                                    message: 'Bio required'  
                                                }
                                            })}        
                                        ></textarea>
                                        <label className="label text-xs">
                                        {errors.bio?.type === 'required' && <span className="label-text-alt text-red-500">{errors.bio.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input type="submit" value="Submit" disabled={!timeLefts?.dateOver} className="btn btn-success text-white w-full" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        {timeLefts?.dateOver && <h1 className='text-center text-2xl mb-2 text-green-700 font-bold'> {Name && Name[0]?.name} Processing</h1>}
                        { !timeLefts?.dateOver && <h1 className='text-center text-2xl mb-2 text-green-700 font-bold'>Our {Name && Name[0]?.name} After</h1>}
                        { !timeLefts?.dateOver && <div className="flex gap-3 items-center justify-center">
                            <div className="p-2 text-center rounded-lg bg-white">
                                <h1 className='text-2xl font-bold text-purple-700'>{timeLefts?.days}</h1>
                                <span>Days</span>
                            </div>
                            <div className="p-2 text-center rounded-lg bg-white">
                                <h1 className='text-2xl font-bold text-purple-700'>{timeLefts?.hours}</h1>
                                <span>Hours</span>
                            </div>
                            <div className="p-2 text-center rounded-lg bg-white">
                                <h1 className='text-2xl font-bold text-purple-700'>{timeLefts?.minutes}</h1>
                                <span>Minutes</span>
                            </div>
                            <div className="p-2 text-center rounded-lg bg-white">
                                <h1 className='text-2xl font-bold text-purple-700'>{timeLefts?.seconds}</h1>
                                <span>Seconds</span>
                            </div>
                        </div>}
                    </div>
                    { admin && <div className="w-full bg-white rounded-lg mt-3 p-3">
                        <ExamName Name={Name} refetch={refetch} />
                    </div>}
                </div>
        </div>
    );
};

export default AddResult;
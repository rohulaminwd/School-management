import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import RegisterModul from '../Modul/RegisterModul';

const Registaion = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [sector, setData] = useState('student');
    const [gender, setGender] = useState('male');
    const [registerModul, setRegisterModul] = useState('data');
    console.log(registerModul);


    console.log(sector);
    
    const onSubmit = async data => {
        
        const formData = {
            name: data.name,
            address: data.address,
            email: data.email,
            password: data.password,
            phone: data.phone,
            sector: sector,
            gender: gender,
            age: data.age,
            gpa: data.gpa,
            class: data.class,
            subject: data.subject,
        }
        // send data backend
        fetch(`http://localhost:5000/applyUser/${data.email}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    reset()
                    setRegisterModul(formData)
                    toast.success('Apply successful');
                }else{
                    toast.error('Opps no..! Please try again.')
                }
            })
    }
    return (
        <div className='h-screen mt-[66px] sm:mt-0 bg-base-200 flex items-center'>
            <div className="w-full sm:w-[80%] bg-base-100 shadow-box md:w-[60%] border p-4 rounded-xl mx-auto">
                <h1 className='text-xl font-bold text-cyan-900'>Regestation Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between">
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'  
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Must be 3 characters longer'
                                      }
                                })}
                            />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Your Address</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Your Address" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Your Address is required'  
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Must be 5 characters longer'
                                      }
                                })}
                            />
                            <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            {errors.address?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex justify-between">
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Phone Number</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Phone Number" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is required'  
                                    },
                                    pattern: {
                                        value: /^(?:\+88|01)?\d{11}\r?$/,
                                        message: 'Invalid Number'
                                      }
                                })}
                            />
                            <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Your Email</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Your Email" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Your Email is required'  
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email..'
                                      }
                                })}
                            />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Your Age</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Your Age" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("age", {
                                    required: {
                                        value: true,
                                        message: 'Your Age is required'  
                                    },
                                })}
                            />
                            <label className="label">
                            {errors.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'  
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters longer'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                    </div>
                    
                    {
                        sector === 'student' && <div className="flex justify-between">
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Select Your Class</span>
                            </label>
                            <select
                                className="select select-bordered border border-cyan-800 rounded-md w-full max-w-xs" 
                                {...register("class", {
                                    required: {
                                        value: true,
                                        message: 'class is required'  
                                    },
                                })}
                            >
                                <option value="Six" select>Six</option>
                                <option value="Seven">Seven</option>
                                <option value="Eight">Eight</option>
                                <option value="Nine">Nine</option>
                                <option value="Tan">Tan</option>
                            </select>
                            <label className="label">
                            {errors.class?.type === 'required' && <span className="label-text-alt text-red-500">{errors.class.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Before Exam G.P.A</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Before Exam G.P.A" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("gpa", {
                                    required: {
                                        value: true,
                                        message: 'Before Exam G.P.A is required'  
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.gpa?.type === 'required' && <span className="label-text-alt text-red-500">{errors.gpa.message}</span>}
                            </label>
                        </div>
                    </div>
                    }
                    {
                        sector === 'teacher' && <div className="flex justify-between">
                        <div className="form-control w-[48%] max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Select Your Subject</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="input border border-cyan-800 rounded-md input-bordered w-full max-w-xs" 
                                {...register("subject", {
                                    required: {
                                        value: true,
                                        message: 'subject is required'  
                                    },
                                })}
                            />
                            <label className="label">
                            {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                            </label>
                        </div>
                    </div>
                    }

                    <div className="md:flex justify-between">
                        <div className="w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Select Your Sector</span>
                            </label>
                            <div className="flex mb-3">
                                <div className="form-control mr-2">
                                    <label className="cursor-pointer flex items-center">
                                        <span className="label-text font-bold mr-2">Teacher</span> 
                                        <input type="radio" value="teacher" onChange={e => setData(e.target.value)} name="sector" checked={sector === "teacher"? true: false} className="radio checked:bg-secondary"/>
                                    </label>
                                </div>
                                <div className="form-control mr-2">
                                    <label className="cursor-pointer flex items-center">
                                        <span className="label-text font-bold mr-2">Student</span> 
                                        <input type="radio" name="sector" value="student" onChange={e => setData(e.target.value)} checked={sector === "student"? true: false} className="radio checked:bg-cyan-800"/>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer flex items-center">
                                        <span className="label-text font-bold mr-2">Garden</span> 
                                        <input type="radio" name="sector" value="garden" onChange={e => setData(e.target.value)} checked={sector === "garden"? true: false} className="radio checked:bg-blue-500"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-cyan-900 font-bold">Select Your Gender</span>
                            </label>
                            <div className="flex mb-3">
                                <div className="form-control mr-2">
                                    <label className="cursor-pointer flex items-center">
                                        <span className="label-text font-bold mr-2">Male</span> 
                                        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} checked={gender === "male"? true: false} className="radio checked:bg-cyan-800"/>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer flex items-center">
                                        <span className="label-text font-bold mr-2">Female</span> 
                                        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} checked={gender === "female"? true: false} className="radio checked:bg-blue-500"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className='btn w-full uppercase font-bold' type="submit" value="submit"  />
                </form>
            </div>
            { registerModul && <RegisterModul registerModul={registerModul} />}
        </div>
    );
};

export default Registaion;
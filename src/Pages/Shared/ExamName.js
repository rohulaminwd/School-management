import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ExamName = ({Name, refetch}) => {
    const [name, setName] = useState(Name[0].name);
    const [dates, setDate] = useState(Name[0].date);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            date: dates,
        }
        console.log(data)

        fetch(`http://localhost:5000/ExamName/${Name[0]?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'                    
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    toast.success("Exam Name added successfully");
                    refetch();
                    
                }
        })
    }
    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold'>Select Exam Name and Date</h1>
            <form onSubmit={handleSubmit} className="">
                <div className="flex items-center gap-3 mb-3 w-full">
                    <div className="w-full">
                        <p className='text-green-800 mb-1'>Exam Name</p>
                        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Exam Name' className="input sm:input-md input-sm input-bordered px-1 input-success rounded-md w-full" ></input>
                    </div>
                    <div className="w-full">
                        <p className='text-green-800 mb-1'>Select Date</p>
                        <input type="date" value={dates} onChange={(e) => setDate(e.target.value)} class="input sm:input-md input-sm input-bordered px-1 input-success rounded-md w-full" name="date" id="" />
                    </div>
                </div>
                <input type="submit" className='btn btn-success w-full' value="Add Exam" />
            </form>
        </div>
    );
};

export default ExamName;
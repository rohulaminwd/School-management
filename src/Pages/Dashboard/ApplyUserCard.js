import React from 'react';
import { useState } from 'react';

const ApplyUserCard = ({user, setDeletingModal, setAddModal}) => {
    const [role, setRole] = useState('')
    const {name, phone, email, sector, password, subject, address, gender, age, gpa,} = user;
    const classe = user.class;

    const data = { name, email, phone, password, address, roleNo: role, role: sector, subject, class: classe, gender, age, gpa, }
    // const data2 = { name, email, phone, password, address, role: sector, subject, gender, age, }
    // const data3 = { name, email, phone, password, address, role: sector, gender, age, }
 
    return (
        <div className='rounded-xl border bg-white p-4'>
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className='text-xl capitalize font-bold text-cyan-900'>{name}</h1>
                    <h1 className='text-sm font-bold capitalize text-cyan-900'>{address}</h1>
                </div>
                <div className="text-right">
                    <h1 className='text-xl uppercase font-bold text-green-700'>{sector}</h1>
                    <span className='font-bold capitalize'>{gender}</span>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="">
                    {(sector == 'student') && <h1 className='text-xl font-bold text-cyan-900'>Class: {user.class}</h1> }
                    {(sector == 'teacher') && <h1 className='text-xl font-bold text-cyan-900'>Subject: {subject}</h1> }
                    <a className='' href={`mailto:{email}`}><span className='text-primary font-bold'>{email}</span></a>
                </div>
                <div className="text-right">
                    { (sector == 'student') && <h1 className='text-sm font-bold text-cyan-900'>G.P.A: {gpa}</h1>} 
                    <h1 className='text-sm font-bold text-cyan-900'>Age: {age}</h1> 
                </div>
            </div>
            <div className="flex items-center mt-3 justify-between">
                <div className="">
                    <a className='block' href={`tel:{phone}`} ><button className="btn btn-success text-base-100 btn-xs">{phone}</button></a>
                </div>
                { (sector == 'student') && <div className="">
                    <input type="text" value={role} onChange={e => setRole(e.target.value)} className='bg-blue-100 text-sm w-10 p-1 rounded-md outline-none' placeholder='Role' />
                </div>}
                <div className="card-actions flex justify-end">
                    <label onClick={() => setDeletingModal(user)} for="delete-confirm-modal" className="btn btn-error text-base-100 btn-xs">Delete</label>
                    <label onClick={() => setAddModal([user, data])} for="add-confirm-modal" className="btn btn-success text-base-100 btn-xs">Add</label>
                </div>
            </div>
        </div>
    );
};

export default ApplyUserCard;
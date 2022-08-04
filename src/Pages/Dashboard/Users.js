import React, { useContext } from 'react';
import { useState } from 'react';
import { titleContext, userContext } from '../../App';
import DeleteModalConfirm from '../Modul/DeleteModalConfirm';
import UsersRow from './UsersRow';

const Users = () => {

    const [users, students, teachers, gardens] = useContext(userContext);
    const [title, setTitle] = useContext(titleContext)
    const [deletingModal, setDeletingModal] = useState(null)
    const [data, setData] = useState(users)
    const [Class, setClass] = useState()

   const handleClass = (classData) => {

        const studentValue = students?.filter(i => i?.class?.includes(classData));
        const sorted = studentValue?.sort(function(a, b){
           return a.roleNo - b.roleNo
        })
        setData(sorted);
        setClass(sorted);
    }

    // const studentValue = students?.filter(i => i?.class?.includes("Six"));

    
    setTitle("Manage All Users")
    const method = 'user'
    return (
        <div>
            {/* <h1 className='text-xl font-bold text-purple-600 mb-3'>All users: {users.length} {students.length} {teachers.length} {gardens.length}</h1> */}
            <div className="flex sm:flex-row-reverse flex-col gap-3 h-auto justify-between">
                <div className="w-full sm:w-32 flex sm:block gap-1 sm:gap-2 sm:max-h-screen px-1 sm:px-2 py-2 rounded-lg bg-white">
                    <div onClick={() => setData(users)} className={`sm:border sm:border-blue-300 items-center text-center sm:mb-2 sm:bg-blue-100 sm:hover:bg-blue-300 sm:p-2 sm:pb-1 rounded-md w-full`}>
                        <div className="sm:px-2 w-auto bg-blue-200 rounded-lg">
                            <span className='text-xl sm:text-2xl font-bold p-0 m-0 text-blue-600'>{users.length}</span>
                        </div>
                        <h1 className='text-xs sm:text-sm mt-0 text-blue-800 pt-0'>Users</h1>
                    </div>
                    <div onClick={() => setData(students)} className={`sm:border sm:border-blue-300 items-center text-center sm:mb-2 sm:bg-blue-100 sm:hover:bg-blue-300 sm:p-2 sm:pb-1 rounded-md w-full`}>
                        <div className="sm:px-2 w-auto bg-blue-200 rounded-lg">
                            <span className='text-xl sm:text-2xl font-bold p-0 m-0 text-blue-600'>{students.length}</span>
                        </div>
                        <h1 className='text-xs sm:text-sm mt-0 text-blue-800 pt-0'>Student</h1>
                    </div>
                    <div onClick={() => setData(teachers)} className={`sm:border sm:border-blue-300 items-center text-center sm:mb-2 sm:bg-blue-100 sm:hover:bg-blue-300 sm:p-2 sm:pb-1 rounded-md w-full`}>
                        <div className="sm:px-2 w-auto bg-blue-200 rounded-lg">
                            <span className='text-xl sm:text-2xl font-bold p-0 m-0 text-blue-600'>{teachers.length}</span>
                        </div>
                        <h1 className='text-xs sm:text-sm mt-0 text-blue-800 pt-0'>Teacher</h1>
                    </div>
                    <div onClick={() => setData(gardens)} className={`sm:border sm:border-blue-300 items-center text-center sm:mb-2 sm:bg-blue-100 sm:hover:bg-blue-300 sm:p-2 sm:pb-1 rounded-md w-full`}>
                        <div className="sm:px-2 w-auto bg-blue-200 rounded-lg">
                            <span className='text-xl sm:text-2xl font-bold p-0 m-0 text-blue-600'>{gardens.length}</span>
                        </div>
                        <h1 className='text-xs sm:text-sm mt-0 text-blue-800 pt-0'>garden</h1>
                    </div>
                    <div className={`sm:border sm:border-blue-300 items-center text-center sm:mb-2 sm:bg-blue-100 sm:hover:bg-blue-300 sm:p-2 sm:pb-1 rounded-md w-full`}>
                        <div className="sm:px-2 w-auto bg-blue-200 rounded-lg">
                            <span className='text-xl sm:text-2xl font-bold p-0 m-0 text-blue-600'>{Class?.length}</span>
                        </div>
                        <select
                            onChange={(e) => handleClass(e.target.value)}
                            className="text-xs sm:text-sm bg-transparent p-0 m-0 rounded-md w-full" >
                            <option value="Six" select>Six</option>
                            <option value="Seven">Seven</option>
                            <option value="Eight">Eight</option>
                            <option value="Nine">Nine</option>
                            <option value="Tan">Tan</option>
                        </select>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-1 gap-3 w-full">
                    {
                        data?.map((user, index) => <UsersRow 
                            key={user._id} 
                            user={user}
                            index={index}
                            setDeletingModal={setDeletingModal} 
                            ></UsersRow>)
                    }
                    </div>
                </div>
            </div>
            {
                deletingModal && <DeleteModalConfirm 
                deletingModal={deletingModal}  
                setDeletingModal={setDeletingModal}
                method={method}
                />
            }
        </div>
    );
};

export default Users;
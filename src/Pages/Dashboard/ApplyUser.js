import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import AddModulConfirm from '../Modul/AddModulConfirm';
import Loading from '../Shared/Loading';
import ApplyUserCard from './ApplyUserCard';
import DeleteModalConfirm from '../Modul/DeleteModalConfirm';
import { useContext } from 'react';
import { titleContext } from '../../App';

const ApplyUser = ({setApplyUsers}) => {
    const [deletingModal, setDeletingModal] = useState(null)
    const [addModal, setAddModal] = useState(null)
    const [title, setTitle] = useContext(titleContext)
    setTitle("Apply Users")
    const {data: applyUsers, isLoading, refetch} = useQuery('user', () => fetch('http://localhost:5000/applyUser', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading />
    }
    console.log('role', addModal);
    setApplyUsers(applyUsers?.length)
    const method = 'applyUser'
    return (
        <div className='mt-5'>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {
                        applyUsers && applyUsers.map(user => <ApplyUserCard 
                            key={user._id} 
                            user={user}
                            setDeletingModal={setDeletingModal}
                            setAddModal={setAddModal}
                            refetch={refetch} 
                        />)
                    }
                </div>
            </div>
            {
                deletingModal && <DeleteModalConfirm 
                deletingModal={deletingModal} 
                refetch={refetch} 
                setDeletingModal={setDeletingModal}
                method={method}
                />
            }
            {
                addModal && <AddModulConfirm 
                addModal={addModal} 
                refetch={refetch} 
                setAddModal={setAddModal}
                method={method}
                />
            }
        </div>
    );
};

export default ApplyUser;
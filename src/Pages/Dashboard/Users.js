import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('user', () => fetch('https://arcane-journey-12889.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-xl font-bold text-purple-600 mb-3'>All users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Add Admin</th>
                            <th>remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        users?.map((user, index) => <UsersRow 
                            key={user._id} 
                            user={user}
                            index={index}
                            refetch={refetch} 
                            ></UsersRow>    
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
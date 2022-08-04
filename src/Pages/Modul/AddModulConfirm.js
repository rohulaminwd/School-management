import React from 'react';
import { toast} from 'react-toastify';

const AddModulConfirm = ({setAddModal, method, refetch, addModal}) => {

    const [user, data] = addModal;


    const handleAdd = async () => {
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'                    
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data insite usetoken', data)
                const accessToken = data.token;
                console.log(accessToken)
                if(accessToken){
                    fetch(`http://localhost:5000/${method}/${user._id}`, {
                        method: 'DELETE',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount){
                            toast.success(`${user.sector} ${user.name} added successfully`);
                            setAddModal(null)
                            refetch();
                        }
                    })
                }
        })
    }

    return (
        <div>
            <input type="checkbox" id="add-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className="text-green-700 text-xl">Are you sure you want to Add {user.sector} <span className='text-secondary font-bold'>{user.name}</span></p>
                    <div className="modal-action">
                        <button onClick={handleAdd} className="btn btn-success text-white btn-xs">add</button>
                        <label for="add-confirm-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModulConfirm;
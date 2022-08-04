import React from 'react';
import { toast} from 'react-toastify';

const DeleteModalConfirm = ({deletingModal, method, refetch, setDeletingModal}) => {
    const {name, role, sector, _id} = deletingModal;
    console.log(method)

    const handleDelete = () => {
        fetch(`http://localhost:5000/${method}/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.success(`${sector} ${role}: ${name} deleted`);
                setDeletingModal(null)
                refetch();
            }
        })
    }
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className="text-red-700 text-xl">Are you sure you want to delete <span className='capitalize text-blue-700'>{sector} {role}</span> <span className='text-blue-800 capitalize font-bold'>{name}  ..?</span></p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-error text-white btn-xs">delete</button>
                        <label for="delete-confirm-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModalConfirm;
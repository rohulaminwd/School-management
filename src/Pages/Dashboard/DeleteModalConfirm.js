import React from 'react';
import { toast} from 'react-toastify';

const DeleteModalConfirm = ({deletingModal, method, refetch, setDeletingModal}) => {
    const {name, _id} = deletingModal;
    console.log(method)
    const handleDelete = () => {
        fetch(`https://arcane-journey-12889.herokuapp.com/${method}/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.success(`Product: ${name} deleted`);
                setDeletingModal(null)
                refetch();
            }
        })
    }
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <p class="text-red-700 text-xl">Are you sure you want to delete Product <span className='text-secondary font-bold'>{name}</span></p>
                    <div class="modal-action">
                    <button onClick={handleDelete} class="btn btn-error text-white btn-xs">delete</button>
                    <label for="delete-confirm-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModalConfirm;
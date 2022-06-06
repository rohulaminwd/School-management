import React from 'react';

const DoctorRow = ({product, index, setDeletingModal}) => {
    const {name, price, img, description, max_quantity, min_quantity} = product;
    return (
        <tr>
            <td className='font-bold'>{index + 1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="">
                    <h1 className='text-accent text-xl font-bold'>{price}</h1>
                    <p>Available Quantity: <span className='font-bold text-primary'>{max_quantity}</span></p>
                    <p>Min Order Quantity: <span className='font-bold text-primary'>{min_quantity}</span></p>
                </div>
            </td>
            <th>
                <label onClick={() => setDeletingModal(product)} for="delete-confirm-modal" class="btn btn-ghost text-red-800 btn-xs">delete</label>
            </th>
        </tr>
    );
};

export default DoctorRow;
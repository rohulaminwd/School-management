import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({product, index, setDeletingModal}) => {
    const {_id, price, img, quantity, productName,} = product;


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
                        <div class="font-bold">{productName}</div>
                        <h1 className='font-bold'>Price: <span className='text-primary'>{price}</span></h1>
                        <h1 className='font-bold'>Quantity: <span className='text-primary'>{quantity}</span></h1>
                    </div>
                    
                </div>
            </td>
            <td>
                <div className="">
                    {!product?.paid && <Link to={`/dashboard/myOrder/payment/${_id}`} className='btn btn-xs btn-secondary text-white'>Pay</Link>}
                    {product?.paid && <button className='btn btn-xs btn-success text-white'>Paid</button>}
                    {product?.transactionId && <p className='mt-3 text-primary'>{product?.transactionId}</p>}
                </div>
            </td>
            <th>
                <label onClick={() => setDeletingModal(product)} for="delete-confirm-modal" class="btn btn-accent text-white btn-xs" disabled={product.paid}>delete</label>
            </th>
        </tr>
    );
};

export default MyOrderRow;
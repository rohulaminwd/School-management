import React, { useEffect, useState } from 'react';

const DoctorRow = ({product, index, setDeletingModal}) => {
    const {_id, name, price, email, img, quantity, productName,} = product;

    useEffect(() => {
        setStatus(product?.status)
    }, [product]);

    const [status, setStatus] = useState('');

    const handlePay = status => {
        setStatus(status)

        fetch(`https://arcane-journey-12889.herokuapp.com/order/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                setStatus(status)
            }
        })
    }
    return (
        <tr>
            <td className='font-bold'>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <h1 className='font-bold'>Price: <span className='text-primary'>{price}</span></h1>
                        <h1 className='font-bold'>Quantity: <span className='text-primary'>{quantity}</span></h1>
                    </div>
                    
                </div>
            </td>
            <td>
                <div className="">
                    <h1 className=''>{name}</h1>
                    <h1 className=''>{email}</h1>
                </div>
            </td>
            <th>
                {  (status === 'pending') && <label onClick={() => handlePay('shipt')}  className="btn btn-secondary text-white btn-xs">{status}...</label>}
                {  (status === 'shipt') && <label className="btn btn-success text-white btn-xs">{status}</label> }
                {  (product.paid === true) && <p className="text-blue-900 mt-3">{product?.transactionId}</p>}
                {  (!product.status) && <label className="btn btn-accent text-white btn-xs">Un Paid</label> }
            </th>
        </tr>
    );
};

export default DoctorRow;
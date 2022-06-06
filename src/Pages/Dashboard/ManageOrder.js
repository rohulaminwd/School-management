import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useOrders from '../../Hooks/useOrders';
import Loading from '../Shared/Loading';
import MangeOrderRow from './MangeOrderRow'

const ManageOrder = () => {
    const {data: orders, isLoading, refetch} = useQuery('order', () => fetch('https://arcane-journey-12889.herokuapp.com/order', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    const [pending, shift, unPaid ] = useOrders(orders)
    useEffect(() => {
        setOrderM(orders)
    }, [orders])
    const [orderM, setOrderM] = useState(orders)

    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            <div className="sm:flex justify-between my-5 items-center">
                <div className="sm:flex justify-start md:w-full">
                    <button onClick={() => setOrderM(orders) } className='btn btn-primary btn-sm m-1'>All orders</button>
                    <button onClick={() => setOrderM(unPaid) } className='text-white btn btn-accent btn-sm m-1'>Un paid</button>
                    <button onClick={() => setOrderM(pending) } className='text-white btn btn-secondary btn-sm m-1'>Pending</button>
                    <button onClick={() => setOrderM(shift) } className='text-white btn btn-success btn-sm m-1'>Shift</button>
                </div>
                <h1 className='text-2xl md:w-full mb-3 font-bold text-orange-500'>Orders: {orderM?.length}</h1>
            </div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orderM?.map((order, index) => <MangeOrderRow
                            key={order._id}
                            product={order}
                            index={index}
                            refetch={refetch}
                            ></MangeOrderRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </tfoot>
                    
                </table>    
            </div>
        </div>
    );
};

export default ManageOrder;
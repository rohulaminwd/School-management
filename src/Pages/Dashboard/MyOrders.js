import React, {useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteModalConfirm from './DeleteModalConfirm';
import MyOrderRow from './MyOrderRow'

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [deletingModal, setDeletingModal] = useState(null)
    const email = user.email
    const {data: orders, isLoading, refetch} = useQuery(['product', email], () => fetch(`https://arcane-journey-12889.herokuapp.com/myOrder?email=${email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading || loading){
        return <Loading />
    } 
    const method = 'myOrder'   
    return (
        <div>
            { (orders.length !== 0) && <h1 className='text-2xl my-8 text-center text-Primary font-bold'>My orders: {orders.length}</h1>}
            { (orders.length === 0) && <h1 className='text-2xl my-8 text-center text-accent font-bold'>Not Found Your order.! Pleace Order Now</h1>}
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Payment status</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrderRow
                            key={order._id}
                            product={order}
                            index={index}
                            setDeletingModal={setDeletingModal}
                            refetch={refetch}
                            ></MyOrderRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Payment status</th>
                        <th>Delete</th>
                        </tr>
                    </tfoot>
                    
                </table>    
            </div>
            {
                deletingModal && <DeleteModalConfirm 
                deletingModal={deletingModal} 
                refetch={refetch}
                method={method} 
                setDeletingModal={setDeletingModal}
                />
            }
        </div>
    );
};

export default MyOrders;
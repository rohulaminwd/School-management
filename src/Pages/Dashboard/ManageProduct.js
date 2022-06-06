import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModalConfirm from './DeleteModalConfirm';
import ManageProductRow from './ManageProductRow'

const ManageProduct = () => {
    const [deletingModal, setDeletingModal] = useState(null)
    const {data: products, isLoading, refetch} = useQuery('product', () => fetch('https://arcane-journey-12889.herokuapp.com/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    const metohd = 'product'
    return (
        <div>
            <h1 className='text-xl mb-3 font-bold text-orange-500'>Total Product: {products?.length}</h1>
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
                            products?.map((product, index) => <ManageProductRow
                            key={product._id}
                            product={product}
                            index={index}
                            setDeletingModal={setDeletingModal}
                            ></ManageProductRow>)
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
            {
                deletingModal && <DeleteModalConfirm 
                deletingModal={deletingModal} 
                refetch={refetch} 
                setDeletingModal={setDeletingModal}
                method={metohd}
                />
            }
        </div>
    );
};

export default ManageProduct;
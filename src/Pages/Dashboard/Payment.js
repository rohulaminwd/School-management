import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3DuIHQQHfOxtfiNeFDaZOonaXzuLzVOQKnBhysrqn5KcjdwbUEJbnQJn6q1pWFNh3r3v8EOTvAawZAUd3qMfXB00UNVJpmSm');

const Payment = () => {
    const {id} = useParams()
    const {data: payProduct, isLoading, refetch} = useQuery(['payProduct', id], () => fetch(`https://arcane-journey-12889.herokuapp.com/payProduct/${id}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <div className='mt-10'>
            <h1 className='text-primary my-8 font-bold text-center text-2xl'>Payment Now</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-blue-900 p-5 border-x-8 rounded-xl shadow-xl">
                    <h1 className='text-cyan-500 text-2xl md:text-2xl mb-3 font-bold'>Payment Now</h1>
                    <div className="">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payProduct={payProduct} />
                    </Elements>
                    </div>
                </div>
                <div className="border order-first border-blue-900 p-5 border-x-8 rounded-xl shadow-xl">
                    <h1 className='text-cyan-500 text-2xl mb-3 font-bold'>Order Information</h1>
                    <h1 className='text-xl font-bold text-blue-900'>Pay for: {payProduct.productName}</h1>
                    <h1 className='text-xl font-bold text-blue-900'>Quantity: <span className='text-secondary font-bold'>{payProduct.quantity}</span></h1>
                    <h1 className='text-xl font-bold text-blue-900'>Pay Now: <span className='text-secondary font-bold'>${payProduct.price}</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Payment;


// pement key: pk_test_51L3DuIHQQHfOxtfiNeFDaZOonaXzuLzVOQKnBhysrqn5KcjdwbUEJbnQJn6q1pWFNh3r3v8EOTvAawZAUd3qMfXB00UNVJpmSm
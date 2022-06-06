import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ParchesModal from './ParchesModal';

const Parches = () => {
    const {id} = useParams()
    const [user, loading] = useAuthState(auth);
    console.log(id)
    const {data: product, isLoading, refetch} = useQuery(['product', id], () => fetch(`https://arcane-journey-12889.herokuapp.com/product/${id}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    // const {img, name, description, max_quantity, min_quantity, price} = product;
    refetch()
    const minQuantity = parseInt(product?.min_quantity)
    const maxQuantity = parseInt(product?.max_quantity)

    useEffect(() => {
        setQuantity(minQuantity)
    }, [product, minQuantity])

    const [quantity, setQuantity] = useState(minQuantity);
    const [modalOrder, setOrder] = useState(true)

    if(isLoading || loading){
        return <Loading />
    }

    const handleQuantity = (condition) => {
        if(condition === true){
            if(quantity >= product.max_quantity){
                return setQuantity(maxQuantity), toast.warn(`Maximum Order Quantity: ${maxQuantity}`)
            }
            setQuantity(quantity + 1)
        }
        if(condition === false){
            if(quantity <= product.min_quantity){
                return setQuantity(minQuantity), toast.warn(`Minimum Order Quantity: ${minQuantity}`);
            }
            setQuantity(quantity - 1)
        }
    }

    const totalPrice = quantity * parseInt(product.price)

    
    const order = {
        productName: product.name,
        price: totalPrice,
        quantity: quantity,
        email: user?.email,
        name: user?.displayName,
        img: product.img,

    }
    


    return (
        <div className='mt-20 mx-2 md:mx-8 lg:mx-16'>
            <h1 className='text-2xl lg:text-4xl my-5 font-bold text-center text-primary'>{product.name}</h1>
            <div class="grid lg:w-[80%] mx-auto sm:shadow-xl sm:border rounded-xl border-blue-200 md:border-x-8 grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center py-4">
                <div class="px-2 md:p-4" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="800">
                    <h2 class="text-2xl text-primary font-bold">{product.name}</h2>
                    <p className='text-md'>{product.description}</p>
                    <h1 className='text-2xl text-primary'>Price: <span className='text-accent font-bold'>${product.price}</span></h1>
                    <div className="">
                        <p className='font-bold '>Available Quantity: <span className='text-xl text-primary'>{product.max_quantity}</span></p>
                    </div>
                    <div className="">
                        <p className='font-bold '>Minimun Order Quantity: <span className='text-xl text-primary'>{minQuantity}</span></p>
                    </div>
                    <div className="sm:flex mt-4 pt-3 border-blue-900 border-t-2 justify-between items-center">
                        <div className="">
                            <h1 className='text-xl font-bold'>Order Quantity : <span className='text-primary'>{quantity}</span> </h1>
                            <h1 className='text-xl my-3 font-bold'>Total Price : <span className='text-accent'>${totalPrice}</span> </h1>
                        </div>
                        <div className="flex md:ml-4 w-32 justify-center items-center shadow-sm border-blue-900 border-x-4 rounded-3xl border py-2">
                            <span onClick={() => handleQuantity(false)} className='pl-2 font-bold cursor-pointer text-xl'>-</span>
                            <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} class="text-center border-0 outline-0 font-bold text-primary w-full" />
                            <span onClick={() => handleQuantity(true)} className='pr-2 cursor-pointer font-bold text-xl'>+</span>
                        </div>
                    </div>
                    <label for="order-modal" class="btn modal-button mt-5 mx-auto" disabled={(quantity < minQuantity) || (quantity > maxQuantity)}>Order now</label>
                </div>
                <div className='h-full order-first w-full mx-auto' data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="800">
                    <img src={product.img} className='w-full' alt="Movie"  />
                </div>
            </div>
            {modalOrder && <ParchesModal setOrder={setOrder} order={order}></ParchesModal>}
        </div>
    );
};

export default Parches;
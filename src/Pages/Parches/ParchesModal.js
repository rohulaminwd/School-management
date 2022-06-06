import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ParchesModal = ({order, setOrder}) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const {name, email, price, quantity, img, productName} = order;
    const onSubmit = async data => {
        const product = {
            name: name,
            productName: productName,
            email: email,
            price: price,
            phone: data.phone,
            address: data.address,
            quantity: quantity,
            img: img
        }
        console.log(product)
        // send data backend
        fetch('https://arcane-journey-12889.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                reset()
                toast.success('Order successfully added');
                setOrder(false)
            }else{
                toast.error('fail to add Order')
            }
        })
    }
    return (
        <div>

            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>    
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="sm:flex justify-between">
                            <div class="form-control sm:w-[48%]">
                                <label class="label">
                                    <span class="label-text font-bold">Name</span>
                                </label>
                                <input type="text" value={name} disabled class="input input-bordered font-bold w-full" />
                            </div>
                            <div class="form-control sm:w-[48%] ">
                                <label class="label">
                                    <span class="label-text font-bold">Email</span>
                                </label>
                                <input type="text" value={email} disabled class="input input-bordered font-bold w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div class="form-control w-[48%] max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold">Price</span>
                                </label>
                                <input type="text" value={price} disabled class="input input-bordered font-bold w-full max-w-xs" />
                            </div>
                            <div class="form-control w-[48%] max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold">Quantity</span>
                                </label>
                                <input type="text" value={quantity} disabled class="input input-bordered font-bold w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control w-[48%] max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Phone Number" 
                                    className="input input-bordered w-full max-w-xs" 
                                    {...register("phone", {
                                        required: {
                                        value: true,
                                        message: 'Phone Number is required'  
                                        }
                                    })}
                                />
                                <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-[48%] max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Your Address" 
                                    className="input input-bordered w-full max-w-xs" 
                                    {...register("address", {
                                        required: {
                                        value: true,
                                        message: 'Your Address is required'  
                                        }
                                    })}
                                />
                                <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>
                        </div>
                        <input className='btn w-full uppercase font-bold' type="submit" value="submit"  />
                    </form>
            </div>
            </div>
        </div>
    );
};

export default ParchesModal;
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '290c7a0f169eabc5cf1f1fe286564c38'

    const onSubmit = async data => {
        console.log('data', data);
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                console.log('imgbb', result)
                const img = result.data.url;
                const product = {
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    max_quantity: data.max_quantity,
                    min_quantity: data.min_quantity,
                    img: img
                }
                console.log(product)
                // send data backend
                fetch('https://arcane-journey-12889.herokuapp.com/product', {
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
                        toast.success('Product successfully added');
                    }else{
                        toast.error('fail to add a Product')
                    }
                })
            }
        })
    }

    return (
        <div>
            <div className='flex justify-center items-center lg:mt-24'>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-md" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Product Name" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("name", {
                                    required: {
                                    value: true,
                                    message: 'Name is required'  
                                    },
                                    minLength: {
                                    value: 3,
                                    message: 'Must be 3 characters longer'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Price" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("price", {
                                    required: {
                                    value: true,
                                    message: 'Price is required'  
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea 
                                placeholder="Product Description" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("description", {
                                    required: {
                                    value: true,
                                    message: 'Description is required'  
                                    }
                                })}
                            ></textarea>
                            <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input 
                                type="file" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("image", {
                                    required: {
                                    value: true,
                                    message: 'Image is required'  
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control w-[48%] max-w-xs">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Available Quantity" 
                                    className="input input-bordered w-full max-w-xs" 
                                    {...register("max_quantity", {
                                        required: {
                                        value: true,
                                        message: 'max_quantity is required'  
                                        }
                                    })}
                                />
                                <label className="label">
                                {errors.max_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.max_quantity.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-[48%] max-w-xs">
                                <label className="label">
                                    <span className="label-text">Min Order Quantity</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Minimum Order Quantity" 
                                    className="input input-bordered w-full max-w-xs" 
                                    {...register("min_quantity", {
                                        required: {
                                        value: true,
                                        message: 'min_quantity is required'  
                                        }
                                    })}
                                />
                                <label className="label">
                                {errors.min_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min_quantity.message}</span>}
                                </label>
                            </div>
                        </div>
                        <input className='btn w-full uppercase font-bold max-w-xs' type="submit" value="Add"  />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;
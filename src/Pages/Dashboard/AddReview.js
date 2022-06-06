import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [star, setStar] = useState([1,1,1,1,1])
    const ratting = [...star]
    

    const onSubmit = async data => {

        const review = {
            name: user.displayName,
            email: user.email,
            description: data.description,
            starr: ratting,
        }
        console.log(review)
        // send data backend
        fetch('https://arcane-journey-12889.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                reset()
                toast.success('Review successfully added');
            }else{
                toast.error('fail to add Review')
            }
        })
    }
    return (
        <div>
            <div className='flex justify-center items-center lg:mt-24'>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-md" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">Add Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text" 
                                value={user.displayName} 
                                disabled
                                className="input input-bordered w-full max-w-xs" 
                            />
                        </div>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea 
                                placeholder="massage review" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("description", {
                                    required: {
                                    value: true,
                                    message: 'Description is required'  
                                    },
                                    minLength: {
                                    value: 30,
                                    message: 'Must be 30 characters longer'
                                    }
                                })}
                            ></textarea>
                            <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            {errors.description?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <div class="rating">
                                <input type="radio" value='1' onChange={e => setStar(e.target.value)} name="star" class="mask mask-star-2 bg-orange-400"/>
                                <input type="radio" value='s2' onChange={e => setStar(e.target.value)} name="star" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value='st3' onChange={e => setStar(e.target.value)} name="star" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value='sta4' onChange={e => setStar(e.target.value)} name="star" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value='star4' onChange={e => setStar(e.target.value)} name="star" class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="border border-blue-900 border-x-4 py-1  px-2 rounded-2xl  ml-3">
                                <h1 className='text-primary font-bold'>{ratting.length} stare</h1>
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

export default AddReview;
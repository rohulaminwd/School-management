import React from 'react';
import {BsStarFill} from 'react-icons/bs'
import {ImQuotesLeft} from 'react-icons/im'

const ReviewCard = ({review}) => {
    const {name, description, starr, } = review;
    return (
        <div className='p-3' data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="800">
            <div class="card p-3 bg-base-100 text-start h-full border hover:border-blue-900 hover:shadow-md hover:translate-y-[-5px] transition border-blue-200">
                <div className='text-3xl font-bold text-cyan-900'><ImQuotesLeft /></div>
                <p className='my-2'>{description.slice(0, 80)}...</p>
                <div class="flex items-center justify-between">
                    <div className="">
                        <h2 class="text-xl text-cyan-800 font-bold my-0">{name}</h2>
                        <div class="text-secondary">students</div>
                        <div class="flex ">
                            {starr.map( (index) => <div key={index} className='mx-1 flex font-bold text-xl text-secondary'> <BsStarFill /> </div>  )}  
                        </div>
                    </div>
                    <div className="">
                        <div class="avatar">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ToolsCard = ({tool, refetch}) => {
    const {img, _id, name, description, max_quantity, min_quantity, price} = tool;
    return (
        <div data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
            <div class="card p-3 bg-base-100 border h-full border-blue-300 hover:border-blue-900 hover:shadow-md hover:translate-y-[-5px] transition">
                <div className="flex border-blue-300 hover:border-blue-900 border-b">
                    <figure class="w-[40%]">
                        <img src={img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="w-[60%] pl-3 text-start flex items-center">
                        <div className="">
                        <h2 class="text-xl text-secondary mb-0 font-bold">{name.slice(0, 15)}</h2>
                        <small className='text-gary-300'>{description.slice(0, 80)}...</small>
                        </div>
                    </div>
                </div>
                <div className="text-left">
                    <div className="flex justify-between my-2 items-center">
                      <h1 className='text-xl font-bold text-accent'>Price ${price}</h1>
                      <p className='text-sm font-bold'>Available Quantity: {max_quantity}</p>
                    </div>
                    <div class="card-actions my-2 justify-between items-center">
                        <p className='text-sm font-bold'>Min order Quantity: {min_quantity}</p>
                        <Link to={`/parses/${_id}`} class="btn btn-sm btn-secondary text-white">Parses Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;
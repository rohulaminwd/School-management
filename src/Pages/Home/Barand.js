import React from 'react';
import brand1 from '../../assets/icons/brand-item-1.png'
import brand2 from '../../assets/icons/brand-item-2.png'
import brand3 from '../../assets/icons/brand-item-3.png'
import brand4 from '../../assets/icons/brand-item-4.png'
import brand5 from '../../assets/icons/brand-item-5.png'
import brand6 from '../../assets/icons/brand-item-6.png'

const Barand = () => {
    const brands = [
        {
            img: brand1,
        },
        {
            img: brand2,
        },
        {
            img: brand3,
        },
        {
            img: brand4,
        },
        {
            img: brand5,
        },
        {
            img: brand6,
        },
    ]
    return (
        <div className='my-10'>
            <h1 className='text-center text-2xl md:text-4xl font-bold my-8'>Our Future Brand</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {
                    brands.map(brand => <div className='border flex justify-center p-5' data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                        <img src={brand.img} className='transition saturate-50 hover:saturate-200' alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Barand;
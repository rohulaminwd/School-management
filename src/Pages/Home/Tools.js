import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const Tools = () => {
    const {data: products, isLoading, refetch} = useQuery('product', () => fetch('https://arcane-journey-12889.herokuapp.com/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    useEffect(() => {
        setProduc(products)
    }, [products])
    const [product, setProduc] = useState(products)
    if(isLoading){
        return <Loading />
    }
    console.log(product)
    return (
        <div className='my-10'>
        <h1 className='text-center font-bold text-primary uppercase text-2xl md:text-4xl my-8'>Our best product</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                product?.slice(0, 6).map(tool => <ToolsCard
                    key={tool._id}
                    tool={tool}
                    refetch={refetch}
                ></ToolsCard>)
            }
        </div>
        </div>
    );
};

export default Tools;
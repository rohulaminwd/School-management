import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick/lib/slider';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {data: reviews, isLoading} = useQuery('review', () => fetch('https://arcane-journey-12889.herokuapp.com/review', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='my-10'>
            <h1 className='lg:text-4xl text-2xl text-cyan-900 font-bold text-center my-8'>Our Students Reviews</h1>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    reviews?.slice(0, 6).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
            </div> */}
            <div>
                <Slider {...settings}>
                {
                    reviews?.slice(0, 6).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
                </Slider>
            </div>
        </div>
    );
};

export default Review;
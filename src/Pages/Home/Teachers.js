import React from 'react';
import Slider from 'react-slick/lib/slider';
import teacher1 from '../../assets/images/rohul.png'
import teacher2 from '../../assets/images/team-2.jpg'
import teacher3 from '../../assets/images/team-4.jpg'
import teacher4 from '../../assets/images/testimonial-1.jpg'
import teacher5 from '../../assets/images/testimonial-2.jpg'
import TeacherCard from './TeacherCard';

const Teachers = () => {
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
    const teachers = [
        {
            name: "Rohul amin",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher1
        },
        {
            name: "Mijan",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher4
        },
        {
            name: "Suvroto",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher2
        },
        {
            name: "Salehin",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher3
        },
        {
            name: "Rohul amin",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher4
        },
        {
            name: "Rohul amin",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher5
        },
        {
            name: "Suvroto",
            title: "Math teacher",
            describe: "This is Lorem ipsum code demo site project demo in This Teachers our best service teach",
            phone: '01831294559',
            email: "rohulaminwd@gmail.com",
            img: teacher2
        },
    ]
    return (
        <div className='my-5'>
            <h1 className='text-cyan-900 text-2xl my-5 font-bold text-center md:text-4xl'>Our Teachers</h1>
            <div>
                <Slider {...settings}>
                {
                    teachers.map((teacher, index) => <TeacherCard key={index} teacher={teacher} />)
                }
                </Slider>
            </div>  
        </div>
    );
};

export default Teachers;
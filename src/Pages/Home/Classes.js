import React from 'react';
import class1 from '../../assets/images/class.jpg'
import class2 from '../../assets/images/class (1).jpg'
import class3 from '../../assets/images/class (2).jpg'
import class4 from '../../assets/images/class (3).jpg'
import class5 from '../../assets/images/class (4).jpg'
import class6 from '../../assets/images/class (6).jpg'
import ClassCard from './ClassCard';
import Slider from "react-slick";

const Classes = () => {
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
    const classes = [
        {
            img: class1,
            class: "Six",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: class2,
            class: "Seven",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: class3,
            class: "Eight",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: class4,
            class: "Nine",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: class5,
            class: "Tan Science",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: class6,
            class: "Tan arts",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
    ]
    return (
        <div className='my-5'>
            <h1 className='text-2xl md:text-4xl my-5 font-bold text-cyan-900 text-center'>Classes section</h1>
            <div>
                <Slider {...settings}>
                {
                    classes.map((item, index) => <ClassCard key={index} classes={item} />)
                }
                </Slider>
            </div>
        </div>
    );
};

export default Classes;
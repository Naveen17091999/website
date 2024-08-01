import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./card2.scss";

const Card2 = ({ images, title }) => {
    return (
        <div id='card2'>
            <h3>{title}</h3>
            <Swiper className='swiper'
             slidesPerView={5}
             spaceBetween={50}
             >
                {
                    images.map((data,index)=>(
                        <SwiperSlide key={index}><img src={data} alt="" /></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Card2
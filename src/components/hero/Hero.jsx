import React from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card/Card';
import { cardA_images, cardB_images,slider_images, } from '../images/images';
import "./Hero.scss";
const Hero = () => {

    const datas=[
        {
            title:"Revamp your home in style",
            images:cardA_images,
            subTitles:["Cushion covers, bedsheets & more","Figurines, vases & more","Home storage","Lighting solutions"]
        },
        {
            title:"Appliances for your home | Up to 55% off",
            images:cardB_images,
            subTitles:["Air conditioners","Refrigerators","Microwaves","Washing machines"]
        },
        // {
        //     title:"",
        //     images:cardC_images,
        //     subTitles:["Air conditioners","Refrigerators","Microwaves","Washing machines"]
        // }
    ]

    return (
        <div id='hero'>
            <div className="slider">

                <Swiper
                    id='swiper'
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {slider_images.map((data, index) => (
                        <SwiperSlide key={index}><img src={data} alt="" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="cards">
                    {
                        datas.map((data,index)=>(
                            <Card title={data.title} images={data.images} sub={data.subTitles}/>
                        ))
                    }
                </div>
        </div>
    )
}

export default Hero;

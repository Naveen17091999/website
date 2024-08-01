import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";
import "./Hero.scss";
import {datas, slider_images} from "../../data/data"
const Hero = () => {
 

  return (
    <div id="hero">
      <div className="slider">
        <Swiper
          id="swiper"
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slider_images.map((data, index) => (
            <SwiperSlide key={index} className="image-container">
              <img src={data} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cards">
          {datas.map((data, index) => (
            <Card
              title={data.title}
              images={data.images}
              sub={data.subTitles}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

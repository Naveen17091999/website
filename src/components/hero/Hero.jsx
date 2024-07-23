import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";
import { cardA_images, cardB_images, slider_images, cardC_images, cardD_images } from "../images/images";
import "./Hero.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Hero = () => {
  const datas = [
    {
      title: "Revamp your home in style",
      images: cardA_images,
      subTitles: [
        "Cushion covers, bedsheets & more",
        "Figurines, vases & more",
        "Home storage",
        "Lighting solutions",
      ],
    },
    {
      title: "Appliances for your home | Up to 55% off",
      images: cardB_images,
      subTitles: [
        "Air conditioners",
        "Refrigerators",
        "Microwaves",
        "Washing machines",
      ],
    },
    {
        title:"Appliances for your home | Up to 55% off",
        images:cardC_images,
        subTitles:["Air conditioners","Refrigerators","Microwaves","Washing machines"]
    },
    {
        title:"Automotive essentials | Up to 60% off",
        images:cardD_images,
        subTitles:["Cleaning accessories","Tyre & rim care","Helmets","Vacuum cleaner"]
    }
  ];

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

"use client"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

const Banner = () => {
  
  return (
    <div>
  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {/* <Slider/> */}
        <SwiperSlide>
         <Slider  img={'https://organicnutrition.com.bd/cdn/shop/articles/ONL_-_Blog_2048x.progressive.png.jpg?v=1649476918'} justify={'start'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Slider img={"https://www.tastingtable.com/img/gallery/why-your-organic-food-may-not-actually-be-fully-organic/intro-1675194845.jpg"} justify={'end'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Slider img={"https://img.freepik.com/premium-photo/organic-food-background-copy-space-food-photography-different-fruits-vegetables-isolated-white-background-high-resolution-product_35691-28184.jpg"} justify={'start'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Slider img={"https://static.vecteezy.com/system/resources/previews/031/988/708/non_2x/organic-food-big-assortment-of-healthy-fruits-and-vegetables-photo.jpg"} justify={'end'}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner
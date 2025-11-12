import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
    return (
        <div  className=" relative z-0">
            <Swiper modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[350px] w-full rounded-xl"
            
            >
                <SwiperSlide>
                     <img
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
            alt=""
            className="w-full h-full mx-auto"
          /> </SwiperSlide>
                <SwiperSlide>
                     <img
            src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg"
            alt=""
            className="w-full h-full mx-auto"
          /> </SwiperSlide>
                <SwiperSlide>
            <img  
            src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
            alt=""
            className="w-full h-full mx-auto"
          /> </SwiperSlide>
   </Swiper>
            
        </div>
    );
};

export default HeroSection;
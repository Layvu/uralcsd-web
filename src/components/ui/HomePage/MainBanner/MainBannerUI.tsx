import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import { Navigation} from 'swiper/modules';

import './main-banner.scss'; 

export const MainBannerUI: React.FC = () => {
    return (
        <section className='main-banner wrap'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                loop={true}
                
                className="main-banner__slider"
            >
                <SwiperSlide tag='div' className='main-banner__slider-item main-banner__slider-item--placeholder'>Slide 1</SwiperSlide>
                <SwiperSlide tag='div' className='main-banner__slider-item main-banner__slider-item--placeholder'>Slide 2</SwiperSlide>
                <SwiperSlide tag='div' className='main-banner__slider-item main-banner__slider-item--placeholder'>Slide 3</SwiperSlide>
                <SwiperSlide tag='div' className='main-banner__slider-item main-banner__slider-item--placeholder'>Slide 4</SwiperSlide>
            </Swiper>
        </section>
    );
};



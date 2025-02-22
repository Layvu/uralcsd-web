import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Navigation } from 'swiper/modules';

import './main-banner.scss';
import { MainBannerProps } from './type';

export const MainBannerUI: React.FC<MainBannerProps> = ({ premierePerformances }) => {
    return (
        <section className="main-banner wrap">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                loop={true}
                className="main-banner__slider"
            >
                {premierePerformances.map((performance, index) => (
                    <SwiperSlide
                        key={index}
                        tag="div"
                        className="main-banner__slider-item main-banner__slider-item--placeholder"
                    >
                        {performance.name}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

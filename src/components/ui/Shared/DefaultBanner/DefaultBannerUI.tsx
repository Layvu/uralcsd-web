import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Navigation } from 'swiper/modules';
import './DefaultBanner.scss';
import { DefaultBannerProps } from './type';

export const DefaultBannerUI: React.FC<DefaultBannerProps> = ({ performance }) => {
    return (
        <section className="default-banner">
            <div className="default-banner__container container">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation
                    loop={false}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    speed={500}
                    initialSlide={0}
                    className="default-banner__slider"
                >
                    {performance.images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            tag="div"
                            className="default-banner__slider-item default-banner__slider-item--placeholder"
                        >
                            <img src={image} alt={performance.name} className="default-banner__slider-image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

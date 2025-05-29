import React, { useEffect, useRef } from 'react';
import { PartnersBannerProps } from './type';
import './partners-banner.scss';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


export const PartnersBannerUI: React.FC<PartnersBannerProps> = ({ partners }) => {
    const swiperRef = useRef<SwiperType>();
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.activeIndex = 0;
        }
    }, [partners]);

    partners = partners.length === 4 || partners.length === 3 ?
        [...partners, ...partners] : partners.length === 2 ?
            [...partners, ...partners, ...partners] : partners;

    // const handlePrev = () => {
    //     if (!swiperRef.current) return;
    //     swiperRef.current.slidePrev();
    // };

    // const handleNext = () => {
    //     if (!swiperRef.current) return;
    //     swiperRef.current.slideNext();
    // };
    if (partners.length == 1) {
        return (
            <section className='partners-banner'>
                <div className="partners-banner__single-container">
                    <a
                        className='partners-banner__slider-link'
                        href={partners[0].url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className='partners-banner__slider-image' src={partners[0].image.url} alt="Партнер" />
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section className='partners-banner'>
            <div className="partners-banner__swiper-container">
                <button
                    className="swiper-button-prev"
                    //  onClick={handlePrev}
                />
                <button
                    className="swiper-button-next"
                    //  onClick={handleNext}
                />
                <Swiper
                    onInit={(swiper) => {
                        swiperRef.current = swiper;
                        swiper.wrapperEl.style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)';
                    }}
                    spaceBetween={0}
                    slidesPerView={4}
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    autoplay={{
                        delay: 2000, 
                        disableOnInteraction: false, // Продолжать после ручного переключения
                        pauseOnMouseEnter: true // Пауза при наведении
                    }}
                    loop={true}
                    speed={300}
                    initialSlide={0}
                    loopAddBlankSlides={true}
                    className="partners-banner__slider"
                >
                    {partners?.map((partner, index) => (
                        <SwiperSlide className='partners-banner__slider-item' key={index}>
                            <a
                                className='partners-banner__slider-link'
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img className='partners-banner__slider-image' src={partner.image.url} alt="Партнер" />
                            </a>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>
            </div>
        </section>
    );
};

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import './DefaultBanner.scss';
import { DefaultBannerProps } from './type';
import { SwiperRef } from 'swiper/react';

export const DefaultBannerUI: React.FC<DefaultBannerProps> = ({ name, images }) => {
    const activeSlideRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperRef>(null);
    const [slideWidth, setSlideWidth] = useState<number>(0);

    // вычисляет ширину главной картинки, далее на этой инфе ставит расположение кнопок
    useEffect(() => {
        if (!activeSlideRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect) {
                    setSlideWidth(entry.contentRect.width);
                }
            }
        });

        observer.observe(activeSlideRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Клонируем массив если 2 или 3 изображения, нужно чтобы loop отрабатывал коррекстно
    // если 2 или 3 изображения
    let sliderImages = images.length === 2 || images.length === 3 ? [...images, ...images] : images;
    
    // Также переносим последний элемент в начало, тоже для корректной работы
    if (sliderImages.length > 1) {
        sliderImages = [sliderImages[sliderImages.length - 1], ...sliderImages.slice(0, sliderImages.length - 1)];
    }

    if (images.length === 1) {
        // Для 1 картинки вообще без слайдера
        return (
            <section className="default-banner">
                <div className="default-banner__container container">
                    <div className="default-banner__single-image">
                        <img src={images[0]} alt={name} className="default-banner__slider-image" />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="default-banner">
            <div className="default-banner__container container">
                {images.length !== 1 ? <>
                    <button
                        className="swiper-button-prev"
                        style={{ left: `calc(50% - ${slideWidth / 2 + 25}px)` }}
                    />
                    <button
                        className="swiper-button-next"
                        style={{ right: `calc(50% - ${slideWidth / 2 + 25}px)` }}
                    />

                    <Swiper
                        ref={swiperRef}
                        spaceBetween={50}
                        slidesPerView="auto"
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        loop={true}
                        centeredSlides={true}
                        speed={500}
                        initialSlide={1}
                        className="default-banner__slider"
                    >
                        {sliderImages.map((image, index) => (
                            <SwiperSlide
                                key={`${image}-${index}`}
                                onClick={() => {
                                    if (swiperRef.current?.swiper) {
                                        const swiper = swiperRef.current.swiper;
                                        swiper.slideToLoop(swiper.realIndex, 500); // 500 — это скорость анимации (миллисекунды)
                                    }
                                }}                                tag="div"
                                className="default-banner__slider-item"
                            >
                                <div
                                    ref={index === 1 ? activeSlideRef : null}
                                    className="default-banner__slide-wrapper"
                                >
                                    <img
                                        src={image}
                                        alt={name}
                                        draggable={false}
                                        className="default-banner__slider-image"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </> : <img
                    src={images[0]}
                    alt={name}
                    className="default-banner__slider-image"
                />}

            </div>
        </section>
    );
};

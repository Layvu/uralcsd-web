import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import './DefaultBanner.scss';
import { DefaultBannerProps } from './type';
import { Swiper as SwiperType } from 'swiper';
import { useBreakpoint } from 'hooks/useBreakpoint';
import placeholder from '@assets/backgrounds/placeholder.jpg';

export const DefaultBannerUI: React.FC<DefaultBannerProps> = ({ name, images }) => {
    const activeSlideRef = useRef<HTMLImageElement>(null);
    const swiperRef = useRef<SwiperType>();
    const [slideWidth, setSlideWidth] = useState<number>(0);
    const {isTablet, isMobile} = useBreakpoint();
    const [erroredImages, setErroredImages] = useState<Set<string>>(new Set());

    const handleImageError = (imageUrl: string) => {
        setErroredImages(prev => new Set(prev).add(imageUrl));
    };

    const getImageSource = (imageUrl: string) => {
        return erroredImages.has(imageUrl) ? placeholder : imageUrl;
    };

    useEffect(() => {
        if (!activeSlideRef.current) return;
    
        const handleResize = (entry: ResizeObserverEntry) => {
            if (entry.contentRect) {
                const baseWidth = entry.contentRect.width;
                const adjustedWidth = window.innerWidth < 1200 ? baseWidth - 100 : baseWidth;
                setSlideWidth(adjustedWidth);
            }
        };
    
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                handleResize(entry);
            }
        });

        observer.observe(activeSlideRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handlePrev = () => {
        if (!swiperRef.current) return;
        swiperRef.current.autoplay.stop();
        swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (!swiperRef.current) return;
        swiperRef.current.autoplay.stop();
        swiperRef.current.slideNext();
    };

    // Клонируем массив если 2 или 3 изображения, нужно чтобы loop отрабатывал коррекстно
    // если 2 или 3 изображения
    const isFewImages = images.length === 2 || images.length === 3;
    const isSmallDevise = isTablet || isMobile;
    const isLoopOn = (!isSmallDevise && isFewImages);

    let sliderImages = isLoopOn 
        ? [...images, ...images] 
        : images;

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
                        <img 
                            src={getImageSource(images[0])}
                            alt={name}
                            className="default-banner__slider-image"
                            onError={() => handleImageError(images[0])}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="default-banner">
            <div className="default-banner__container container">
                <button
                    className="swiper-button-prev"
                    onClick={handlePrev}
                    style={{ left: `calc(50% - ${slideWidth / 2 + 25}px)` }}
                />
                <button
                    className="swiper-button-next"
                    onClick={handleNext}
                    style={{ right: `calc(50% - ${slideWidth / 2 + 25}px)` }}
                />

                <Swiper
                    onInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={40}
                    slidesPerView="auto"
                    modules={[Navigation, Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000, // Интервал в миллисекундах
                        disableOnInteraction: true, // Остановить после ручного переключения
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    pagination
                    // false только если мало изображений и маленький экран
                    loop={!isFewImages || !isSmallDevise}
                    centeredSlides={true}
                    speed={500}
                    initialSlide={isTablet || isMobile ? 0 : 1}
                    className="default-banner__slider"
                >
                    {sliderImages.map((image, index) => (
                        <SwiperSlide
                            key={`${image}-${index}`}
                            className="default-banner__slider-item"
                        >
                            <img
                                src={getImageSource(image)}
                                alt={name}
                                ref={index === 1 ? activeSlideRef : null}
                                draggable={false}
                                className="default-banner__slider-image"
                                onError={() => handleImageError(image)}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
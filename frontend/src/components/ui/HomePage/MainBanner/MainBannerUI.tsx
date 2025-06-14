import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import './main-banner.scss';
import { MainBannerProps } from './type';
import { formatToDate, formatToTime } from 'utils/timeFormat';
import { openTicketsWidget } from '@services/yandexTickets';
import { Link } from 'react-router-dom';
import placeholder from '@assets/backgrounds/placeholder.jpg';

export const MainBannerUI: React.FC<MainBannerProps> = ({ premiereAfishaItemsWithPerformances }) => {
    const swiperRef = useRef<SwiperType>();
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.activeIndex = 0;
        }
    }, [premiereAfishaItemsWithPerformances]);

    const [erroredImages, setErroredImages] = useState<Set<string>>(new Set());

    const handleImageError = (imageUrl: string | undefined, performanceImageUrl: string | undefined) => {
        // Добавляем оба URL в случае ошибки
        const newErroredImages = new Set(erroredImages);
        if (imageUrl) newErroredImages.add(imageUrl);
        if (performanceImageUrl) newErroredImages.add(performanceImageUrl);
        setErroredImages(newErroredImages);
    };

    const getImageSource = (afishaItem: typeof premiereAfishaItemsWithPerformances[0]) => {
        // Проверяем оба URL на наличие ошибок
        const isPhotoError = afishaItem.photo?.url && erroredImages.has(afishaItem.photo.url);
        const isPerformanceImageError = afishaItem.performance?.mainImage?.url && 
        erroredImages.has(afishaItem.performance.mainImage.url);

        // Возвращаем плейсхолдер если оба URL дали ошибку или если нет изображений
        if ((isPhotoError && isPerformanceImageError) || 
            (!afishaItem.photo?.url && !afishaItem.performance?.mainImage?.url)) {
            return placeholder;
        }

        // Возвращаем приоритетное изображение (photo), если оно не дало ошибку
        if (afishaItem.photo?.url && !isPhotoError) {
            return afishaItem.photo.url;
        }

        // Возвращаем изображение спектакля, если оно не дало ошибку
        if (afishaItem.performance?.mainImage?.url && !isPerformanceImageError) {
            return afishaItem.performance.mainImage.url;
        }

        return placeholder;
    };

    const handleBuyTicket = (e: React.MouseEvent<HTMLButtonElement>, sessionId: string) => {
        e.stopPropagation();
        e.preventDefault();
        if (sessionId) {
            openTicketsWidget(sessionId);
        }
    };
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

    if (premiereAfishaItemsWithPerformances.length == 0) return;
    return (
        <section className="main-banner">
            <Swiper
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.wrapperEl.style.transitionTimingFunction = 'cubic-bezier(0.22, 0.6, 0.36, 1)';
                }}
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                autoplay={{
                    delay: 7000, // Интервал в миллисекундах
                    disableOnInteraction: true, // Остановить после ручного переключения
                    //pauseOnMouseEnter: true // Пауза при наведении
                }}

                speed={800}
                initialSlide={0}
                loop={true}
                loopAddBlankSlides={true}
                className="main-banner__slider"
            >
                {premiereAfishaItemsWithPerformances.map((afishaItem) => (
                    <SwiperSlide
                        key={afishaItem.id}
                        tag="div"
                        className="main-banner__slider-item main-banner__slider-item--placeholder"
                    >
                        <img 
                            src={getImageSource(afishaItem)}
                            alt={afishaItem.performance?.title}
                            rel="preload"
                            className='main-banner__main-image'
                            onError={() => handleImageError(
                                afishaItem.photo?.url, 
                                afishaItem.performance?.mainImage?.url
                            )}
                            loading="lazy"
                        />
                        <div className="main-banner__gradient">
                            <div className="main-banner__wrap wrap">
                                <Link to={`/performances/${afishaItem.performance?.slug}`} className="main-banner__title-container">
                                    <h2 className="main-banner__title">«{afishaItem?.performance?.title.trim()}»</h2>
                                </Link>
                                <div className="main-banner__container">
                                    <div className="main-banner__info-container">
                                        <div className="main-banner__description">
                                            {afishaItem?.performance?.teaser}
                                        </div>
                                        <div className="main-banner__additional-info-container">
                                            {afishaItem.date &&
                                                <div className="main-banner__start-time-container">
                                                    <p className='main-banner__start-date'>{formatToDate(afishaItem.date)}</p>
                                                    <p className='main-banner__start-datetime'>{formatToTime(afishaItem.date)}</p>
                                                </div>}
                                            {afishaItem.performance?.duration &&
                                                <div className="main-banner__duration-container">
                                                    <p className='main-banner__duration'>{afishaItem.performance?.duration}</p>
                                                    <p className='main-banner__addition'>{afishaItem.performance?.intermissionInfo}</p>
                                                </div>}

                                            {afishaItem.performance?.ageLimit != null &&
                                                <div className="main-banner__age-rate">
                                                    <p>{afishaItem.performance.ageLimit}+</p>
                                                </div>
                                            }
                                        </div>
                                        <button
                                            className="main-banner__ya-button ticket-button"
                                            disabled={!afishaItem.sessionId}
                                            style={{ cursor: !afishaItem.sessionId ? 'not-allowed' : 'pointer' }}
                                            onClick={(e) => { handleBuyTicket(e, afishaItem.sessionId); }}>
                                            Купить билет
                                        </button>

                                    </div>
                                    <div className="main-banner__buttons-container">
                                        <button
                                            className="swiper-button-prev"
                                            onClick={handlePrev}
                                        />
                                        <button
                                            className="swiper-button-next"
                                            onClick={handleNext}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

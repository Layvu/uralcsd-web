import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';

import './main-banner.scss';
import { MainBannerProps } from './type';
import { formatToDate, formatToTime } from 'utils/timeFormat';
import { openTicketsWidget } from '@services/yandexTickets';
import { Link } from 'react-router-dom';

export const MainBannerUI: React.FC<MainBannerProps> = ({ premiereAfishaItemsWithPerformances }) => {
    const swiperRef = useRef<SwiperType>();
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.activeIndex = 0;
        }
    }, [premiereAfishaItemsWithPerformances]);

    const handleBuyTicket = (e: React.MouseEvent<HTMLButtonElement>, sessionId: string) => {
        e.stopPropagation();
        e.preventDefault();
        if (sessionId) {
            openTicketsWidget(sessionId);
        }
    };
    const handlePrev = () => {
        if (!swiperRef.current) return;
        swiperRef.current.slidePrev();
    };
      
    const handleNext = () => {
        if (!swiperRef.current) return;
        swiperRef.current.slideNext();
    };

    if(premiereAfishaItemsWithPerformances.length == 0) return;
    return (
        <section className="main-banner">
            <Swiper
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.wrapperEl.style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)';

                }}
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}

                // По необъяснимой причине иногда кнопки на первой загрузке могут не работать.
                // Нужно перелистнуть один раз вручную и тогда activeIndex становится не NaN.
                // Иногда activeIndex изначально 0 иногда NaN, пробовал определить его до 
                // инициализации разными способами - все тчетно. Волшебным образом помогает
                // свойство cssMode={true}, но тогда ручной переход не работает. 
                // Почему cssMode помогает? не знаю.
                // Но вроде натыкал что-то, пока работает без него
                
                //cssMode={true}
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
                        <img src={afishaItem.photo?.url ? afishaItem.photo?.url : afishaItem.performance?.mainImage?.url}
                            alt={afishaItem.performance?.title}
                            className='main-banner__main-image'
                        />
                        <div className="main-banner__gradient">
                            <div className="main-banner__container wrap">
                                <div className="main-banner__info-container">
                                    <Link to={`/performances/${afishaItem.performance?.slug}`} className="main-banner__title-container">
                                        <h2 className="main-banner__title title-h1">«{afishaItem?.performance?.title.trim()}»</h2>
                                        <div className="main-banner__description">
                                            {afishaItem?.performance?.teaser}
                                        </div>
                                    </Link>
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

                                        {afishaItem.performance?.ageLimit &&
                                            <div className="main-banner__age-rate">
                                                <p>{afishaItem.performance.ageLimit}+</p>
                                            </div>}
                                    </div>
                                    <button className="main-banner__ya-button ticket-button" disabled={!afishaItem.sessionId} onClick={(e) => { handleBuyTicket(e, afishaItem.sessionId); }}>
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

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

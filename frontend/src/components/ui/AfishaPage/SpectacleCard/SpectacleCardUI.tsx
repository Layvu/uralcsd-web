import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SpectacleCardProps } from './type';
import { openTicketsWidget } from '@services/yandexTickets';

import './spectacle-card.scss';
import { formatToFullDateTime, formatToTime, formatToWeekday } from 'utils/timeFormat';
import { useBreakpoint } from 'hooks/useBreakpoint';
import placeholder from '@assets/backgrounds/placeholder.jpg';

export const SpectacleCardUI: React.FC<SpectacleCardProps> = ({
    performance,
    price,
    date,
    sessionId,
    photo,
    isLatestPerformance,
}) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [teaserLines, setTeaserLines] = useState<number>(3);
    const [measured, setMeasured] = useState(false);
    const { isMobile } = useBreakpoint();
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const getImageSource = () => {
        if (imageError) return placeholder;
        return photo?.url || performance?.mainImage?.url || placeholder;
    };
    
    useLayoutEffect(() => {
        const frame = requestAnimationFrame(() => {
            if (!titleRef.current) return;

            const titleHeight = titleRef.current.clientHeight;
            const titleLineHeight = parseInt(
                getComputedStyle(titleRef.current).lineHeight
            );
            const titleLines = Math.round(titleHeight / titleLineHeight);

            if (titleLines === 1) {
                setTeaserLines(isLatestPerformance || isMobile ? 3 : 4);
            } else {
                setTeaserLines(2);
            }

            setMeasured(true); 
        });

        return () => cancelAnimationFrame(frame);
    }, [isLatestPerformance]);


    const handleBuyTicket = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        if (sessionId) {
            openTicketsWidget(sessionId);
        }
    };

    if (!performance) {
        return <div className="container spectacle-card spectacle-card__loading">Загрузка...</div>;
    }

    return (
        <div className={`container spectacle-card ${isLatestPerformance && 'spectacle-card--latest'}`}>
            <Link to={`/performances/${performance.slug}`} className='spectacle-card__container'>
                <div className="spectacle-card__image-container">
                    <img 
                        src={getImageSource()} 
                        alt={performance.title} 
                        className="spectacle-card__image"
                        onError={handleImageError}
                    />
                    {performance.isPremiere && <div className="spectacle-card__tag tag--small">
                        Премьера
                    </div>}
                </div>

                <div className="spectacle-card__info-container">
                    <div className="spectacle-card__title-container">
                        <h3 className="spectacle-card__title" ref={titleRef}>«{performance.title.trim()}»</h3>
                        <p className={`spectacle-card__teaser line-clamp-${teaserLines} ${measured ? `line-clamp-${teaserLines}` : undefined}`}>
                            {performance.teaser ? performance.teaser : performance.description}
                        </p>
                    </div>
                    <div className="spectacle-card__additional-info-container">
                        {isLatestPerformance || isMobile ? <div className="spectacle-card__start-time-container">
                            <p className='spectacle-card__time'>{formatToFullDateTime(date)}</p>
                            <p>{formatToWeekday(date)}</p>
                        </div> :
                            <>{date &&
                                <div className="spectacle-card__start-time-container">
                                    <p className='spectacle-card__time'>{formatToTime(date)}</p>
                                    <p>начало</p>
                                </div>}
                            {performance.duration &&
                                    <div className="spectacle-card__duration-container">
                                        <p className='spectacle-card__duration'>{performance.duration}</p>
                                        <p className='spectacle-card__addition'>{performance.intermissionInfo}</p>
                                    </div>}

                            <div className="spectacle-card__price">{price} ₽</div>
                            </>}
                        {performance.ageLimit != null &&
                            <div className="spectacle-card__age-rate">
                                <p>{performance.ageLimit}+</p>
                            </div>
                        }
                    </div>
                    <button
                        className="spectacle-card__ya-button ticket-button"
                        disabled={!sessionId}
                        onClick={(e) => { handleBuyTicket(e); }}
                        style={{ cursor: !sessionId ? 'not-allowed' : 'pointer' }}
                    >
                        Купить билет
                    </button>
                </div>

            </Link>
        </div>
    );
};

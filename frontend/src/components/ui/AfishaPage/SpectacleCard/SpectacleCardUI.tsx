import React from 'react';
import { Link } from 'react-router-dom';
import { SpectacleCardProps } from './type';
import { openTicketsWidget } from '@services/yandexTickets';

import './spectacle-card.scss';
import { formatToFullDateTime, formatToWeekday } from 'utils/timeFormat';

export const SpectacleCardUI: React.FC<SpectacleCardProps> = ({
    performance,
    price,
    date,
    sessionId,
    photo,
    isLatestPerformance,
}) => {
    const ISOdate = new Date(date);

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
                    <img src={photo?.url ? photo.url : performance.mainImage?.url} alt={performance.title} className="spectacle-card__image" />
                    {performance.isPremiere && <div className="spectacle-card__tag tag--small">
                        Премьера
                    </div>}
                </div>

                <div className="spectacle-card__info-container">
                    <div className="spectacle-card__title-container">
                        <h3 className={`spectacle-card__title ${isLatestPerformance ? 'title-h5' : 'title-h4'}`}>«{performance.title.trim()}»</h3>
                        <p className="spectacle-card__teaser">{performance.teaser ? performance.teaser : performance.description}</p>
                    </div>
                    <div className="spectacle-card__additional-info-container">
                        {isLatestPerformance ? <div className="spectacle-card__start-time-container">
                            <p className='spectacle-card__time'>{formatToFullDateTime(date)}</p>
                            <p>{formatToWeekday(date)}</p>
                        </div> :
                            <>{date &&
                                <div className="spectacle-card__start-time-container">
                                    <p className='spectacle-card__time'>{ISOdate.getHours()}:{ISOdate.getMinutes()}</p>
                                    <p>начало</p>
                                </div>}
                            {performance.duration &&
                                    <div className="spectacle-card__duration-container">
                                        <p className='spectacle-card__duration'>{performance.duration}</p>
                                        <p className='spectacle-card__addition'>{performance.intermissionInfo}</p>
                                    </div>}

                            <div className="spectacle-card__price">{price} ₽</div>
                            </>}
                        {performance.ageLimit &&
                            <div className="spectacle-card__age-rate">
                                <p>{performance.ageLimit}+</p>
                            </div>}
                    </div>
                    <button
                        className="spectacle-card__ya-button ticket-button"
                        disabled={!sessionId}
                        onClick={(e) => { handleBuyTicket(e); }}
                        // не работает почему-то
                        style={{ cursor: !sessionId ? 'not-allowed' : 'pointer' }}
                    >
                        Купить билет
                    </button>
                </div>

            </Link>

        </div>
    );
};

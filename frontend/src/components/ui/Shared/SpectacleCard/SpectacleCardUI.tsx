import React from 'react';
import { Link } from 'react-router-dom';
import { SpectacleCardProps } from './type';
import { openTicketsWidget } from '@services/yandexTickets';

import './spectacle-card.scss';

export const SpectacleCardUI: React.FC<SpectacleCardProps> = ({
    performance,
    date,
    sessionId,
    photo,
}) => {
    const handleBuyTicket = () => {
        if (sessionId) {
            openTicketsWidget(sessionId);
        }
    };

    return (
        <>
            <div className="spectacle-card">
                <div className="container spectacle-card__container">
                    <Link to={`/performances/${performance?.slug}`}>
                        <img src={photo?.url} alt={performance?.title} className="spectacle-card__image" />
                        <h2 className="spectacle-card__name">{performance?.title}</h2>
                    </Link>
                    <p className="spectacle-card__age">{performance?.ageLimit}</p>
                    <p className="spectacle-card__description">{performance?.description}</p>
                    <p className="spectacle-card__date">{date}</p>
                    <p className="spectacle-card__duration">{performance?.duration}</p>

                    <button className="spectacle-card__ya-button select-button" onClick={handleBuyTicket}>
                        Купить билет
                    </button>
                </div>
            </div>
        </>
    );
};

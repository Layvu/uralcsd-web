import React from 'react';
import { Link } from 'react-router-dom';
import { SpectacleCardProps } from './type';
import { openTicketsWidget } from '@services/yandexTickets';

import './spectacle-card.scss';

export const SpectacleCardUI: React.FC<SpectacleCardProps> = ({
    name,
    slug,
    description,
    images,
    date,
    age,
    duration,
    sessionId,
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
                    <Link to={`/performances/${slug}`}>
                        <img src={images[0]} alt={name} className="spectacle-card__image" />
                        <h2 className="spectacle-card__name">{name}</h2>
                    </Link>
                    <p className="spectacle-card__age">{age}</p>
                    <p className="spectacle-card__description">{description}</p>
                    <p className="spectacle-card__date">{date}</p>
                    <p className="spectacle-card__duration">{duration}</p>

                    <button className="spectacle-card__ya-button select-button" onClick={handleBuyTicket}>
                        Купить билет
                    </button>
                </div>
            </div>
        </>
    );
};

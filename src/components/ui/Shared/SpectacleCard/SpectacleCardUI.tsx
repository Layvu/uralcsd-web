import React from 'react';
import { Link } from 'react-router-dom';
import { SpectacleCardProps } from './type';

import './spectacle-card.scss';

export const SpectacleCardUI: React.FC<SpectacleCardProps> = ({
    name,
    slug,
    description,
    image,
    date,
    age,
    duration,
}) => {
    return (
        <>
            {/* Прикручивать контекст */}
            <div className="spectacle-card">
                <div className="container spectacle-card__container">
                    <Link to={`/performances/${slug}`}>
                        <img src={image} alt={name} className="spectacle-card__image" />
                        <h2 className="spectacle-card__name">{name}</h2>
                    </Link>
                    <p className="spectacle-card__age">{age}</p>
                    <p className="spectacle-card__description">{description}</p>
                    <p className="spectacle-card__date">{date}</p>
                    <p className="spectacle-card__duration">{duration}</p>
                </div>
            </div>
        </>
    );
};

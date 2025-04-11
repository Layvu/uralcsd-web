import React from 'react';
import { Link } from 'react-router-dom';
import { PerformanceCardProps } from './type';

import './performance-card.scss';


// карточка спектакля на странице /performances, отличается от той что в афише
export const PerformanceCardUI: React.FC<PerformanceCardProps> = (performance) => {
    return (
        <>
            <div className="performance-card">
                <div className="container performance-card__container">
                    <Link to={`/performances/${performance?.slug}`}>
                        <img src={performance.mainImage?.url} alt={performance?.title} className="spectacle-card__image" />
                        <h2 className="performance-card__name">{performance?.title}</h2>
                    </Link>
                    <p className="performance-card__age">{performance?.ageLimit}</p>
                    <p className="performance-card__description">{performance?.description}</p>
                    <p className="performance-card__duration">{performance?.duration}</p>
                </div>
            </div>
        </>
    );
};

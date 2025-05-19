import React from 'react';
import { Link } from 'react-router-dom';
import { PerformanceCardProps } from './type';

import './performance-card.scss';


// карточка спектакля на странице /performances, отличается от той что в афише
export const PerformanceCardUI: React.FC<PerformanceCardProps> = (performance) => {
    return (
        <div className="performance-card">
            <Link to={`/performances/${performance?.slug}`} className="performance-card__link">
                {performance.isActual && <div className="performance-card__tag tag--small">
                    Есть в репертуаре
                </div>
                }
                <img
                    src={performance.mainImage?.url}
                    alt={performance?.title}
                    className="performance-card__image"
                />

                <div className="performance-card__gradient">
                    <h2 className="performance-card__title">«{performance?.title.trim()}»</h2>
                    <p className="performance-card__description">{performance?.description}</p>
                </div>
                <div className="performance-card__tag-container">
                </div>
            </Link>
        </div>
    );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { PerformanceCardProps } from './type';

import './performance-card.scss';
import placeholder from '@assets/backgrounds/placeholder.jpg';


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
                    src={performance.mainImage?.url ?
                        performance.mainImage?.url :
                        performance.images && performance.images?.length != 0 ?
                            performance?.images[0].url :
                            placeholder}
                    alt={performance?.title}
                    className={`performance-card__image ${
                        !performance.mainImage?.url && !performance.images?.[0]?.url 
                            ? 'performance-card__image--placeholder' 
                            : ''
                    }`}
                />

                <div className="performance-card__gradient">
                    <h2 className="performance-card__title title-h6">«{performance?.title.trim()}»</h2>
                    <p className="performance-card__description">{performance?.teaser}</p>
                </div>
            </Link>
        </div>
    );
};


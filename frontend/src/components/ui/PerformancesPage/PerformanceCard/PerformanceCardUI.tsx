import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PerformanceCardProps } from './type';

import './performance-card.scss';
import placeholder from '@assets/backgrounds/placeholder.jpg';


// карточка спектакля на странице /performances, отличается от той что в афише
export const PerformanceCardUI: React.FC<PerformanceCardProps> = ({ isInRepertoire, ...performance }) => {
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        setImageError(true);
    };

    const imageUrl = imageError ? placeholder : performance.mainImage?.url ?
        performance.mainImage?.url :
        performance.images && performance.images?.length != 0 ?
            performance?.images[0].url :
            placeholder;

    return (
        <div className="performance-card">
            <Link to={`/performances/${performance?.slug}`} className="performance-card__link">
                {isInRepertoire && <div className="performance-card__tag tag--small">
                    Есть в репертуаре
                </div>
                }
                <img
                    src={imageUrl}
                    alt={performance?.title}
                    onError={handleImageError}
                    loading="lazy" // Добавляем ленивую загрузку
                    className='performance-card__image'
                />

                <div className="performance-card__gradient">
                    <h2 className="performance-card__title">«{performance?.title.trim()}»</h2>
                    <p className="performance-card__description">{performance?.teaser}</p>
                </div>
            </Link>
        </div>
    );
};


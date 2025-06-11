import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from './type';
import placeholder from '@assets/backgrounds/placeholder.jpg';

import './project-card.scss';

export const ProjectCardUI: React.FC<ProjectCardProps> = ({
    title,
    slug,
    images,
}) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const imageUrl = images?.length > 0 && !imageError
        ? images[0].url
        : placeholder;

    return (
        <div className="project-card">
            <Link to={`/projects/${slug}`} className="container project-card__container">
                <img
                    src={imageUrl}
                    alt={title}
                    className='project-card__image'
                    onError={handleImageError}
                    loading="lazy"
                />
                <div className="project-card__gradient">
                    <h2 className="project-card__title">«{title}»</h2>
                </div>
            </Link>
        </div>
    );
};
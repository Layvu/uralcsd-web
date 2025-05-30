import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from './type';
import placeholder from '@assets/backgrounds/placeholder.jpg';

import './project-card.scss';

export const ProjectCardUI: React.FC<ProjectCardProps> = ({
    title,
    slug,
    images,
}) => {
    return (
        <div className="project-card">
            <Link to={`/projects/${slug}`} className="container project-card__container">
                <img
                    src={images && images.length != 0 ? images[0].url : placeholder}
                    alt={title}
                    className={`project-card__image ${images && images.length != 0 ? '' : 'project-card__image--placeholder'}`}
                />
                <div className="project-card__gradient">
                    <h2 className="project-card__title">«{title}»</h2>
                </div>
            </Link>
        </div>
    );
};

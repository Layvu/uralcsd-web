import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from './type';

import './project-card.scss';

export const ProjectCardUI: React.FC<ProjectCardProps> = ({
    name,
    slug,
    images,
}) => {
    return (
        <>
            <div className="project-card">
                <Link to={`/projects/${slug}`} className="container project-card__container">
                    <img src={images[0]} alt={name} className="project-card__image" />
                    <div className="project-card__gradient">
                        <h2 className="project-card__title">{name}</h2>
                    </div>
                </Link>
            </div>
        </>
    );
};

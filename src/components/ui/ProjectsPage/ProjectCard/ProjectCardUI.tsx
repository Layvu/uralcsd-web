import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from './type';

import './project-card.scss';

export const ProjectCardUI: React.FC<ProjectCardProps> = ({
    name,
    slug,
    images,
    description,
    buttonText,
    buttonLink,
}) => {
    return (
        <>
            <div className="project-card">
                <div className="container project-card__container">
                    <Link to={`/projects/${slug}`}>
                        <img src={images[0]} alt={name} className="project-card__image" />
                        <h2 className="project-card__name">{name}</h2>
                    </Link>
                    <p className="project-card__description">{description}</p>
                    <a href={buttonLink} className="project-card__button select-button">
                        {buttonText}
                    </a>
                </div>
            </div>
        </>
    );
};

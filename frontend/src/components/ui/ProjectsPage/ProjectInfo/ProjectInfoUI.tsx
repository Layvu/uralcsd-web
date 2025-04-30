import React from 'react';
import './ProjectInfo.scss';

import { ProjectInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';

export const ProjectInfoUI: React.FC<ProjectInfoUIProps> = ({ project }) => {
    return (
        <>
            <div className="project-info">
                <DefaultBanner name={project.name} images={project.images} />

                <div className="project-info__wrap wrap">
                    <h2 className="project-info__name">{project.name}</h2>
                    <p className="project-info__additional">Прочее</p>
                    <p className="project-info__description-title">Описание</p>
                    <p className="project-info__description">{project.description}</p>
                    <a href={project.buttonLink} className="project-info__button select-button">
                        {project.buttonText}
                    </a>
                </div>
            </div>
        </>
    );
};

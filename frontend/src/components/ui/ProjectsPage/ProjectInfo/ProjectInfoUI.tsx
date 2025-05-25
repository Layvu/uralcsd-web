import React from 'react';
import './ProjectInfo.scss';

import { ProjectInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import { MainTitle } from '@components/Shared/MainTitle';
import { proseedBackendText } from 'utils/proceedBackendText';

export const ProjectInfoUI: React.FC<ProjectInfoUIProps> = ({ project }) => {
    const paragraphs = project?.description?.split('\n').filter((p) => p.trim().length > 0);

    return (
        <div className="project-info">
            <DefaultBanner name={project.title} images={project.images ? project.images.map(image => image.url) : []} />

            <div className="project-info__wrap wrap">
                <div className="project-info__title-container">
                    <MainTitle className="project-info__name title-h2--underline">{project.title}</MainTitle>
                    {project.additionalInfo && <p className="project-info__additional">{project.additionalInfo}</p>}
                </div>
                {project.description &&
                    <div className="project-info__description-container">
                        <h2 className="project-info__description-title title-h4">Описание проекта</h2>
                        <div className="project-info__description">
                            {paragraphs?.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="team-card-full__biography-paragraph"
                                    dangerouslySetInnerHTML={{ __html: proseedBackendText(paragraph) }}
                                />
                            ))}
                        </div>
                    </div>
                }
                {project.buttonLink && project.buttonText && 
                <a 
                    href={project.buttonLink} 
                    className="project-info__button ticket-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {project.buttonText}
                </a>
                }
            </div>
        </div>
    );
};

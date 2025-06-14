import React from 'react';
import './ProjectInfo.scss';

import { ProjectInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import { proseedBackendText } from 'utils/proceedBackendText';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';

export const ProjectInfoUI: React.FC<ProjectInfoUIProps> = ({ project }) => {
    const paragraphs = project?.description?.split('\n').filter((p) => p.trim().length > 0);
    const { description, title, additionalInfo } = project;

    // Описание страницы для SEO
    const seoDescription = React.useMemo(() => {
        return description?.slice(0, 160) || `«${title}» — новый проект театра ЦСД`;
    }, [description, title]);

    // Ключевые слова для SEO
    const seoKeywords = React.useMemo(() => {
        const baseKeywords = ['проект', 'театр', 'ЦСД', title];
        const combined = [...baseKeywords];

        if (additionalInfo) {
            const infoWords = additionalInfo
                .split(' ')
                .filter((word) => word.length > 3 && word.match(/^[a-zA-Zа-яА-Я0-9-]+$/))
                .slice(0, 5);
            combined.push(...infoWords);
        }

        return Array.from(new Set(combined)).join(', ');
    }, [title, additionalInfo]);

    return (
        <>
            <SEO
                title={`${project.title} - Проект театра ЦСД`}
                description={seoDescription}
                keywords={seoKeywords}
                path={`${ROUTES.PROJECTS}/${project.slug}`}
            />

            <div className="project-info">
                <DefaultBanner
                    name={project.title}
                    images={project.images ? project.images.map((image) => image.url) : []}
                />

                <div className="project-info__wrap wrap">
                    <div className="project-info__title-container">
                        <h1 className="project-info__title">{project.title}</h1>
                        {project.additionalInfo && <p className="project-info__additional">{project.additionalInfo}</p>}
                    </div>
                    {project.description && (
                        <div className="project-info__description-container">
                            <h2 className="project-info__description-title">Описание проекта</h2>
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
                    )}
                    {project.buttonLink && project.buttonText && (
                        <a
                            href={project.buttonLink}
                            className="project-info__button ticket-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.buttonText}
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

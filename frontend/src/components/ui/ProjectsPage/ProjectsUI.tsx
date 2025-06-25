import { ProjectsList } from '@components/ProjectsPage/ProjectsList';
import React from 'react';
import { ProjectsListProps } from './type';
import './projects.scss';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import { Background } from '@components/Shared/Background';

export const ProjectsUI: React.FC<ProjectsListProps> = () => {
    return (
        <div className="app-wrapper">
            <SEO
                title="Проекты театра - Центр современной драматургии"
                description="Помимо спектаклей и постановок театр ЦСД создаёт различные тематические проекты"
                keywords="проекты театра, тематические проекты, театр, ЦСД, Центр современной драматургии, драма"
                path={ROUTES.PROJECTS}
            />
            <Background />
            <section className="projects wrap">
                <h1 className="projects__title">Проекты</h1>
                <ProjectsList />
            </section>
        </div>
    );
};

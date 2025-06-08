import { ProjectsList } from '@components/ProjectsPage/ProjectsList';
import React from 'react';
import { ProjectsListProps } from './type';

import './projects.scss';

export const ProjectsUI: React.FC<ProjectsListProps> = () => {
    return (
        <section className="projects wrap">
            <h1 className="projects__title">Проекты</h1>
            <ProjectsList />
        </section>
    );
};

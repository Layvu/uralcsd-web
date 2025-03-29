import { ProjectsList } from '@components/ProjectsPage/ProjectsList';
import { MainTitle } from '@components/Shared/MainTitle';
import React from 'react';
import { ProjectsListProps } from './type';

import './projects.scss';

export const ProjectsUI: React.FC<ProjectsListProps> = () => {
    return (
        <section className="projects wrap">
            <MainTitle className="projects__title">Проекты</MainTitle>
            <ProjectsList />
        </section>
    );
};

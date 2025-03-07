import React from 'react';
import './projects-list.scss';

import { ProjectCard } from '@components/ProjectsPage/ProjectCard';
import { ProjectListUI } from './type';

export const ProjectsListUI: React.FC<ProjectListUI> = ({ projects }) => {
    return (
        <ul className="projects-list">
            {projects.map((project) => (
                <li key={project.slug} className="projects-list__project-card">
                    <ProjectCard {...project} />
                </li>
            ))}
        </ul>
    );
};

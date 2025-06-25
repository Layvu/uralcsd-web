import React from 'react';
import './projects-list.scss';
import { ProjectCard } from '@components/ProjectsPage/ProjectCard';
import { ProjectListUI } from './type';

export const ProjectsListUI: React.FC<ProjectListUI> = ({ projects, lastElementRef, hasMore }) => {
    return (
        <>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li
                        key={project.slug}
                        className="projects-list__project-card"
                        ref={index === projects.length - 1 ? lastElementRef : null}
                    >
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
            {hasMore && <div className="loading">Загрузка...</div>}
        </>
    );
};

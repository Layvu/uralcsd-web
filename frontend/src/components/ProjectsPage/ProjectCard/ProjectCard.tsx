import { ProjectCardUI } from '@components/ui/ProjectsPage/ProjectCard';
import { ProjectCardProps } from '@components/ui/ProjectsPage/ProjectCard/type';
import React from 'react';

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return (
        <ProjectCardUI {...props} />
    );
};

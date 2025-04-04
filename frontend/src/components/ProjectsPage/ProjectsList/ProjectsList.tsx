import React from 'react';
import { useSelector } from 'react-redux';

import { selectProjects } from '@services/selectors/projectsSelectors';

import { ProjectsListUI } from '@components/ui/ProjectsPage/ProjectsList';

export const ProjectsList: React.FC = () => {
    const projects = useSelector(selectProjects);

    return <ProjectsListUI projects={projects} />;
};

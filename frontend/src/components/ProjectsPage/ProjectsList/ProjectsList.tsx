import React from 'react';
import { useSelector } from 'react-redux';

import { selectProjects, selectProjectsError, selectProjectsLoading } from '@services/selectors/projectsSelectors';

import { ProjectsListUI } from '@components/ui/ProjectsPage/ProjectsList';

export const ProjectsList: React.FC = () => {
    const projects = useSelector(selectProjects);
    const loading = useSelector(selectProjectsLoading);
    const error = useSelector(selectProjectsError);

    if (loading) {
        return <div className="about-page__loading">Загрузка информации о проектах...</div>;
    }
    if (error) {
        return <div className="about-page__error">Ошибка: {error}</div>;
    }

    return <ProjectsListUI projects={projects} />;
};

import React from 'react';
import { useParams } from 'react-router-dom';

import { ProjectInfoUI } from '@components/ui/ProjectsPage/ProjectInfo';

import { useSelector } from 'react-redux';
import { selectProjectBySlug, selectProjectsError, selectProjectsLoading } from 'services/selectors/projectsSelectors';

export const ProjectPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = useSelector((state) => selectProjectBySlug(state, slug || ''));
    
    const loading = useSelector(selectProjectsLoading);
    const error = useSelector(selectProjectsError);
    if (loading) {
        return <div className="loading">Загрузка информации о проекте...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    if (!project) {
        return <div className='not-found'>Проект не найден</div>;
    }

    return <ProjectInfoUI project={project} />;
};

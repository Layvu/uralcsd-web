import React from 'react';
import { useParams } from 'react-router-dom';

import { ProjectInfoUI } from '@components/ui/ProjectsPage/ProjectInfo';

import { useSelector } from 'react-redux';
import { selectProjectBySlug } from 'services/selectors/projectsSelectors';

export const ProjectPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = useSelector((state) => selectProjectBySlug(state, slug || ''));

    if (!project) {
        return <div>Проект не найден</div>;
    }

    return <ProjectInfoUI project={project} />;
};

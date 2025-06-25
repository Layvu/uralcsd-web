import React from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { selectProjectsError, selectProjectsLoading } from '@services/selectors/projectsSelectors';
import { ProjectsListUI } from '@components/ui/ProjectsPage/ProjectsList';
import { IProject } from 'types/project';
import { CONTENT_LISTS } from 'consts';

export const ProjectsList: React.FC = () => {
    const loading = useSelector(selectProjectsLoading);
    const error = useSelector(selectProjectsError);
    const { lastElementRef, visibleItems, hasMore } = useInfiniteScroll(CONTENT_LISTS.PROJECTS);

    if (loading && visibleItems.length === 0) {
        return <div className="loading">Загрузка информации о проектах...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    return <ProjectsListUI projects={visibleItems as IProject[]} lastElementRef={lastElementRef} hasMore={hasMore} />;
};

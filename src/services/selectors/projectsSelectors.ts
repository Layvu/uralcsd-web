import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectProjectsState = (state: RootState) => state.projects;
export const selectProjects = createSelector([selectProjectsState], (state) => state.data);
export const selectProjectsLoading = createSelector([selectProjectsState], (state) => state.loading);
export const selectProjectsInitialized = createSelector([selectProjectsState], (state) => state.isInitialized);

const projectsBySlug = createSelector([selectProjects], (projects) =>
    Object.fromEntries(projects.map((p) => [p.slug, p])),
);
export const selectProjectBySlug = createSelector(
    [projectsBySlug, (_, slug: string) => slug],
    (bySlug, slug) => bySlug[slug],
);

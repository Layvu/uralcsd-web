import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectProjectsState = (state: RootState) => state.projects;
export const selectProjects = createSelector([selectProjectsState], (state) => state.data);

const projectsBySlug = createSelector([selectProjects], (projects) =>
    Object.fromEntries(projects.map((p) => [p.slug, p])),
);
export const selectProjectBySlug = createSelector(
    [projectsBySlug, (_, slug: string) => slug],
    (bySlug, slug) => bySlug[slug],
);

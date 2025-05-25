import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectPerformancesState = (state: RootState) => state.performances;
export const selectPerformances = createSelector([selectPerformancesState], (state) => state.data);
export const selectPerformancesLoading = createSelector([selectPerformancesState], (state) => state.loading);
export const selectPerformancesError = createSelector([selectPerformancesState], (state) => state.error);
export const selectPerformancesInitialized = createSelector([selectPerformancesState], (state) => state.isInitialized);

const performancesBySlug = createSelector([selectPerformances], (performances) =>
    Object.fromEntries(performances.map((p) => [p.slug, p])),
);
export const selectPerformanceBySlug = createSelector(
    [performancesBySlug, (_, slug: string) => slug],
    (bySlug, slug) => bySlug[slug],
);

export const performancesById = createSelector([selectPerformances], (performances) =>
    Object.fromEntries(performances.map((p) => [p.id, p])),
);

export const selectPerformanceById = createSelector([performancesById, (_, id: string) => id], (byId, id) => byId[id]);

export const selectPerformancesByIds = createSelector(
    [selectPerformances, (_, ids: string[]) => ids],
    (performances, ids) => {
        if (!ids?.length) return [];

        const idsSet = new Set(ids);

        return performances.filter((p) => idsSet.has(p.id));
    },
);

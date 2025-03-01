import { createSelector } from 'reselect';
import { RootState } from 'services/store';
import { groupPerformancesByDate } from 'utils/groupPerformancesByDate';

export const selectPerformancesState = (state: RootState) => state.performances;
export const selectPerformances = createSelector([selectPerformancesState], (state) => state.data);

export const selectPerformanceBySlug = createSelector(
    [selectPerformances, (_, slug: string) => slug],
    (performances, slug) => performances.find((p) => p.slug === slug),
);

export const selectLatestPerformances = createSelector([selectPerformances], (performances) =>
    performances.slice(0, 3),
);

export const selectPremierePerformances = createSelector([selectPerformances], (performances) =>
    performances.filter((performance) => performance.isPremiere),
);

export const makeSelectFilteredPerformances = () =>
    createSelector(
        [
            selectPerformances,
            (_state: RootState, activeMonth: number) => activeMonth,
            (_state: RootState, _activeMonth: number, currentDate: Date) => currentDate,
        ],
        (performances, activeMonth, currentDate) => {
            const filtered = performances.filter((p) => {
                const performanceDate = new Date(p.date);
                return performanceDate.getMonth() === activeMonth && performanceDate >= currentDate;
            });
            return groupPerformancesByDate(filtered);
        },
    );

export const selectPerformancesByIds = createSelector(
    [selectPerformances, (_state: RootState, performanceIds: number[]) => new Set(performanceIds)],
    (performances, performanceIdsSet) => performances.filter((p) => performanceIdsSet.has(p.id)),
);

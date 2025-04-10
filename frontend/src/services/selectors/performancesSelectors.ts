import { createSelector } from 'reselect';
import { RootState } from 'services/store';
import { groupPerformancesByDate } from 'utils/groupPerformancesByDate';

export const selectPerformancesState = (state: RootState) => state.performances;
export const selectPerformances = createSelector([selectPerformancesState], (state) => state.data);
export const selectPerformancesLoading = createSelector([selectPerformancesState], (state) => state.loading);
export const selectPerformancesInitialized = createSelector([selectPerformancesState], (state) => state.isInitialized);

const performancesBySlug = createSelector([selectPerformances], (performances) =>
    Object.fromEntries(performances.map((p) => [p.slug, p])),
);
export const selectPerformanceBySlug = createSelector(
    [performancesBySlug, (_, slug: string) => slug],
    (bySlug, slug) => bySlug[slug],
);

export const performancesById = createSelector([selectPerformances],(performances) => 
    Object.fromEntries(performances.map(p => [p.id, p]))
);

export const selectPerformanceById = createSelector(
    [performancesById, (_, id: string) => id],
    (byId, id) => byId[id]
);

export const selectLatestPerformances = createSelector([selectPerformances], (performances) =>
    performances.slice(0, 3),
);



// export const makeSelectFilteredPerformances = () =>
//     createSelector(
//         [
//             selectPerformances,
//             (_state: RootState, activeMonth: number) => activeMonth,
//             (_state: RootState, _activeMonth: number, currentDate: Date) => currentDate,
//         ],
//         (performances, activeMonth, currentDate) => {
//             const filtered = performances.filter((p) => {
//                 const performanceDate = new Date(p.date);
//                 return performanceDate.getMonth() === activeMonth && performanceDate >= currentDate;
//             });
//             return groupPerformancesByDate(filtered);
//         },
//     );
// перенес в afishaItemsSelectors




//Непонятно нужно оно или нет
export const selectPerformancesByIds = createSelector(
    [selectPerformances, (_state: RootState, performanceIds: string[]) => performanceIds.join(',')],
    (performances, performanceIdsKey) => {
        if (!performanceIdsKey) return [];

        const idsArray = performanceIdsKey.split(',');
        const idsSet = new Set(idsArray.filter((id) => id)); // Отфильтруем пустые значения

        return performances.filter((p) => idsSet.has(p.id));
    },
);

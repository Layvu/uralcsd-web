import { createSelector } from 'reselect';
import { RootState } from 'services/store';

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


export const selectPerformancesByIds = createSelector(
    [selectPerformances, (_state: RootState, performanceIds: string[] | string) => performanceIds],
    (performances, performanceIds) => {
        if (!performanceIds || !performanceIds.length) return [];
        
        // Нормализуем входные данные (может быть string или string[])
        const idsArray = Array.isArray(performanceIds) 
            ? performanceIds 
            : typeof performanceIds === 'string' 
                ? performanceIds.split(',') 
                : [];
        
        // Создаем Set для быстрого поиска
        const idsSet = new Set(idsArray.filter(Boolean)); // Фильтруем пустые значения
        
        return performances.filter((p) => idsSet.has(p.id.toString()));
    }
);
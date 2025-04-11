import { createSelector } from 'reselect';
import { RootState } from '@services/store';

export const selectPerformanceCastState = (state: RootState) => state.performanceCasts;

export const selectPerformanceCasts = createSelector(
    [selectPerformanceCastState],
    (state) => state.data,
);
export const selectPerformanceCastLoading = createSelector(
    [selectPerformanceCastState],
    (state) => state.loading,
);
export const selectPerformanceCastError = createSelector(
    [selectPerformanceCastState],
    (state) => state.error,
);
export const selectPerformanceCastsInitialized = createSelector(
    [selectPerformanceCastState],
    (state) => state.isInitialized,
);

export const selectPerformanceCastByIds = createSelector(
    [selectPerformanceCasts, (_state: RootState, castIds: string[] | string) => castIds],
    (casts, castIds) => {
        if (!castIds || !castIds.length) return [];
        
        // Нормализуем входные данные (может быть string или string[])
        const idsArray = Array.isArray(castIds) 
            ? castIds 
            : typeof castIds === 'string' 
                ? castIds.split(',') 
                : [];
        
        // Создаем Set для быстрого поиска
        const idsSet = new Set(idsArray.filter(Boolean));
        
        return casts.filter((cast) => cast.id && idsSet.has(cast.id));
    }
);
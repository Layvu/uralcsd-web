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

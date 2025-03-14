import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectTheaterState = (state: RootState) => state.theater;
export const selectTheaterInfo = createSelector([selectTheaterState], (state) => state.data);

export const selectTheaterLoading = createSelector([selectTheaterState], (state) => state.loading);
export const selectTheaterError = createSelector([selectTheaterState], (state) => state.error);

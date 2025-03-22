import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectContactsState = (state: RootState) => state.contacts;
export const selectContactsInfo = createSelector([selectContactsState], (state) => state.data);

export const selectContactsLoading = createSelector([selectContactsState], (state) => state.loading);
export const selectContactsError = createSelector([selectContactsState], (state) => state.error);
export const selectContactsInitialized = createSelector([selectContactsState], (state) => state.isInitialized);

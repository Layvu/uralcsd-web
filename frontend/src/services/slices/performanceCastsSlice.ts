import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPerformanceCastsApi } from 'services/api/theater-api';
import { PerformanceCastState } from './types';

const initialState: PerformanceCastState = {
    data: [],
    loading: true,
    error: null,
    isInitialized: false,
};

const performanceCastSlice = createSlice({
    name: 'performanceCast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPerformanceCasts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPerformanceCasts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.isInitialized = true;
            })
            .addCase(fetchPerformanceCasts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch performanceCast';
            });
    },
});

export const fetchPerformanceCasts = createAsyncThunk(
    'performanceCast/fetchPerformanceCasts',
    async () => {
        return await fetchPerformanceCastsApi(); 
    }
);

export default performanceCastSlice.reducer;

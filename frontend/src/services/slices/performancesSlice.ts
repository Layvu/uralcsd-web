import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPerformancesApi } from 'services/api/theater-api';
import { PerformanceState } from './types';

const initialState: PerformanceState = {
    data: [],
    loading: true,
    error: null,
    isInitialized: false,
};

const performancesSlice = createSlice({
    name: 'performances',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPerformances.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPerformances.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                console.log('performancesSlice: fulfilled');
                state.isInitialized = true;
            })
            .addCase(fetchPerformances.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch performances';
                state.loading = false;
            });
    },
});

export const fetchPerformances = createAsyncThunk('performances/fetchPerformances', async () => {
    const response = await fetchPerformancesApi();
    return response;
});

export default performancesSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPerformancesApi } from 'services/api/theater-api';
import { PerformanceState } from './types';

const initialState: PerformanceState = {
    data: [],
    loading: false,
    error: null,
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
            })
            .addCase(fetchPerformances.rejected, (state, action) => {
                state.error = action.error.message || 'Ошибка загрузки событий';
                state.loading = false;
            });
    },
});

export const fetchPerformances = createAsyncThunk('performances/fetchPerformances', async () => {
    const response = await fetchPerformancesApi();
    return response;
});

export default performancesSlice.reducer;

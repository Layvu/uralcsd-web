import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTheaterInfoApi } from 'services/api/theater-api';
import { TheaterState } from './types';
import { ITheaterInfo } from 'types/theater';

const initialState: TheaterState = {
    data: { image: '', description: '' } as ITheaterInfo,
    loading: true,
    error: null,
    isInitialized: false,
};

const theaterSlice = createSlice({
    name: 'theater',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTheaterInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTheaterInfo.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.isInitialized = true;
            })
            .addCase(fetchTheaterInfo.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch theater info';
                state.loading = false;
            });
    },
});

export const fetchTheaterInfo = createAsyncThunk('theater/fetchTheaterInfo', async () => {
    return await fetchTheaterInfoApi();
});

export default theaterSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAfishaItemsApi } from 'services/api/theater-api';
import { AfishaItemsState } from './types';

const initialState: AfishaItemsState = {
    data: [],
    loading: true,
    error: null,
    isInitialized: false,
};

const afishaItemsSlice = createSlice({
    name: 'afishaItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAfishaItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAfishaItems.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.isInitialized = true;
            })
            .addCase(fetchAfishaItems.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch afisha items';
                state.loading = false;
            });
    },
});

export const fetchAfishaItems = createAsyncThunk('afishaItems/fetchAfishaItems', async () => {
    return await fetchAfishaItemsApi();
});

export default afishaItemsSlice.reducer;

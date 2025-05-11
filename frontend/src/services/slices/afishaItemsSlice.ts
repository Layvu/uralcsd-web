import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAfishaItemsApi } from 'services/api/theater-api';
import { AfishaItemsState } from './types';

const initialState: AfishaItemsState = {
    data: [],
    loading: true,
    error: null,
    isInitialized: false,
    activeMonth: new Date().getMonth(),
};

const afishaItemsSlice = createSlice({
    name: 'afishaItems',
    initialState,
    reducers: {
        setActiveMonth(state, action: PayloadAction<number>) {
            state.activeMonth = action.payload;
        },
    },
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

export const { setActiveMonth } = afishaItemsSlice.actions;

export const fetchAfishaItems = createAsyncThunk('afishaItems/fetchAfishaItems', async () => {
    return await fetchAfishaItemsApi();
});

export default afishaItemsSlice.reducer;

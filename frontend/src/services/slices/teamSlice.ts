import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeamApi } from 'services/api/theater-api';
import { TeamState } from './types';
import { TeamFilterCategory } from 'types/TeamFilterCategory';
import { TeamFilterCategories } from 'consts';

const initialState: TeamState = {
    data: [],
    loading: true,
    error: null,
    isInitialized: false,
    activeCategory: TeamFilterCategories.Actors, // начальная категория
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<TeamFilterCategory>) => {
            state.activeCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeam.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTeam.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.isInitialized = true;
            })
            .addCase(fetchTeam.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch team';
                state.loading = false;
            });
    },
});

export const { setActiveCategory } = teamSlice.actions;

export const fetchTeam = createAsyncThunk('team/fetchTeam', async () => {
    return await fetchTeamApi();
});

export default teamSlice.reducer;

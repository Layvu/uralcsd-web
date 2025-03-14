import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeamApi } from 'services/api/theater-api';
import { TeamState } from './types';
import { TeamFilterCategory } from 'types/TeamFilterCategory';
import { TeamFilterCategories } from 'consts';

const initialState: TeamState = {
    data: [],
    loading: true,
    error: null,
    selectedCategory: TeamFilterCategories.Actors, // начальная категория
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<TeamFilterCategory>) => {
            state.selectedCategory = action.payload;
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
            })
            .addCase(fetchTeam.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch team';
                state.loading = false;
            });
    },
});

export const { setCategory } = teamSlice.actions;
export const fetchTeam = createAsyncThunk('team/fetchTeam', async () => {
    const response = await fetchTeamApi();
    return response;
});

export default teamSlice.reducer;

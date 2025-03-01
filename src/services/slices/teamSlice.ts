import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeamApi } from 'services/api/theater-api';
import { TeamState } from './types';
import { TeamFilterCategory } from 'types/TeamFilterCategory';

const initialState: TeamState = {
    data: [],
    loading: false,
    error: null,
    selectedCategory: 'actors', // начальная категория
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
            })
            .addCase(fetchTeam.rejected, (state, action) => {
                state.error = action.error.message || 'Ошибка загрузки команды';
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

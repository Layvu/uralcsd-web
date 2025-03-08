import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProjectsApi } from 'services/api/theater-api';
import { ProjectsState } from './types';

const initialState: ProjectsState = {
    data: [],
    loading: false,
    error: null,
};

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch projects';
            });
    },
});

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await fetchProjectsApi();
    return response;
});

export default projectsSlice.reducer;

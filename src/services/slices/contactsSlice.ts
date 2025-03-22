import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContactsApi } from 'services/api/theater-api';
import { ContactsState } from './types';
import { IContactInfo } from 'types/contacts';

const initialState: ContactsState = {
    data: {
        address: '',
        workingDaysText: '',
        workingHours: {
            start: '',
            end: '',
        },
        daysOff: [],
        phones: {
            main: '',
            boxOffice: '',
        },
        email: '',
        faq: [],
        social: {
            vk: '',
            telegram: '',
        },
    } as IContactInfo,
    loading: true,
    error: null,
    isInitialized: false,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.isInitialized = true;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch contacts info';
                state.loading = false;
            });
    },
});

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    return await fetchContactsApi();
});

export default contactsSlice.reducer;

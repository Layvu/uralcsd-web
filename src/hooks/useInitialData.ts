import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from '@services/store';

import { fetchPerformances } from '@services/slices/performancesSlice';
import { fetchTeam } from '@services/slices/teamSlice';

export const useInitialData = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const loadData = async () => {
            try {
                await Promise.all([dispatch(fetchPerformances()), dispatch(fetchTeam())]);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };

        loadData();
    }, [dispatch]);
};

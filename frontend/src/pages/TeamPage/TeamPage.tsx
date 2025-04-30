import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from 'services/slices/teamSlice';

import { TeamPageUI } from '@components/ui/TeamPage';
import { AppDispatch } from '@services/store';
import { TeamFilterCategories } from 'consts';

export const TeamPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();

    useEffect(() => {
        dispatch(setCategory(TeamFilterCategories.Actors));
    }, [location, dispatch]);

    return <TeamPageUI />;
};

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from 'services/slices/teamSlice';

import { TeamPageUI } from '@components/ui/TeamPage';
import { AppDispatch } from '@services/store';

export const Team: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();

    useEffect(() => {
        dispatch(setCategory('actors'));
    }, [location, dispatch]);

    return <TeamPageUI />;
};

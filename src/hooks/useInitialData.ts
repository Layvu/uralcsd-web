import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { AppDispatch } from '@services/store';
import { fetchPerformances } from '@services/slices/performancesSlice';
import { fetchTeam } from '@services/slices/teamSlice';
import { selectPerformances } from '@services/selectors/performancesSelectors';
import { selectTeam } from '@services/selectors/teamSelectors';

import { ROUTES } from 'consts';

const isPerformancesRoute = (pathname: string) =>
    [ROUTES.HOME, ROUTES.PERFORMANCES, ROUTES.AFISHA].some((route) => pathname.includes(route));

const isTeamRoute = (pathname: string) => pathname.includes(ROUTES.TEAM);

export const useInitialData = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();

    const performancesData = useSelector(selectPerformances);
    const teamData = useSelector(selectTeam);

    useEffect(() => {
        const loadData = async () => {
            const promises = [];

            if (!performancesData.length && isPerformancesRoute(location.pathname)) {
                console.log('Загрузка данных спектаклей');
                promises.push(dispatch(fetchPerformances()));
            }

            if (!teamData.length && isTeamRoute(location.pathname)) {
                console.log('Загрузка данных команды');
                promises.push(dispatch(fetchTeam()));
            }

            try {
                await Promise.all(promises);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };

        loadData();
    }, [dispatch, location.pathname, performancesData.length, teamData.length]);
};

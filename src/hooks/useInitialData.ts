import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { AppDispatch } from '@services/store';
import { fetchPerformances } from '@services/slices/performancesSlice';
import { fetchTeam } from '@services/slices/teamSlice';
import { fetchProjects } from '@services/slices/projectsSlice';
import { fetchTheaterInfo } from '@services/slices/theaterSlice';
import { fetchContacts } from '@services/slices/contactsSlice';

import { selectPerformancesInitialized } from '@services/selectors/performancesSelectors';
import { selectTeamInitialized } from '@services/selectors/teamSelectors';
import { selectProjectsInitialized } from '@services/selectors/projectsSelectors';
import { selectTheaterInitialized } from '@services/selectors/theaterSelectors';
import { selectContactsInitialized } from '@services/selectors/contactsSelectors';

import { initYandexTicketsWidget } from '@services/yandexTickets';

import { ROUTES } from 'consts';

const isPerformancesRoute = (pathname: string) => {
    if (pathname === '/') return true;
    if (pathname.includes(ROUTES.TEAM) && pathname.split('/').length > 2) return true;
    return [ROUTES.PERFORMANCES, ROUTES.AFISHA].some((route) => pathname.includes(route));
};
const isTeamRoute = (pathname: string) => pathname.includes(ROUTES.TEAM);
const isProjectsRoute = (pathname: string) => pathname.includes(ROUTES.PROJECTS);
const isAboutRoute = (pathname: string) => pathname.includes(ROUTES.ABOUT);

export const useInitialData = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const yandexWidgetInitialized = useRef(false);

    // Use isInitialized flags instead of checking data content
    const isContactsInitialized = useSelector(selectContactsInitialized);
    const isPerformancesInitialized = useSelector(selectPerformancesInitialized);
    const isTeamInitialized = useSelector(selectTeamInitialized);
    const isProjectsInitialized = useSelector(selectProjectsInitialized);
    const isTheaterInitialized = useSelector(selectTheaterInitialized);

    useEffect(() => {
        const loadData = async () => {
            const promises = [];

            // Загружаем контакты сразу, так как они нужны для футера на всех страницах
            if (!isContactsInitialized) {
                console.log('Загрузка данных о контактах');
                await dispatch(fetchContacts());
            }

            if (!isPerformancesInitialized && isPerformancesRoute(location.pathname)) {
                console.log('Загрузка данных спектаклей');
                promises.push(dispatch(fetchPerformances()));

                // Инициализируем виджет Яндекс.Билетов только при первой загрузке данных о событиях
                if (!yandexWidgetInitialized.current) {
                    try {
                        await initYandexTicketsWidget();
                        yandexWidgetInitialized.current = true;
                    } catch (error) {
                        console.error('Failed to initialize Yandex Tickets widget:', error);
                    }
                }
            }

            if (!isTeamInitialized && isTeamRoute(location.pathname)) {
                console.log('Загрузка данных команды');
                promises.push(dispatch(fetchTeam()));
            }

            if (!isProjectsInitialized && isProjectsRoute(location.pathname)) {
                console.log('Загрузка данных проектов');
                promises.push(dispatch(fetchProjects()));
            }

            if (!isTheaterInitialized && isAboutRoute(location.pathname)) {
                console.log('Загрузка данных о театре');
                promises.push(dispatch(fetchTheaterInfo()));
            }

            try {
                await Promise.all(promises);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };

        loadData();
    }, [
        dispatch,
        location.pathname,
        isPerformancesInitialized,
        isTeamInitialized,
        isProjectsInitialized,
        isTheaterInitialized,
        isContactsInitialized,
    ]);
};

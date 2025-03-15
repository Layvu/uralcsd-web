import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { AppDispatch } from '@services/store';
import { fetchPerformances } from '@services/slices/performancesSlice';
import { fetchTeam } from '@services/slices/teamSlice';
import { fetchProjects } from '@services/slices/projectsSlice';
import { fetchTheaterInfo } from '@services/slices/theaterSlice';
import { fetchContacts } from '@services/slices/contactsSlice';

import { selectPerformances } from '@services/selectors/performancesSelectors';
import { selectTeam } from '@services/selectors/teamSelectors';
import { selectProjects } from '@services/selectors/projectsSelectors';
import { selectTheaterInfo } from '@services/selectors/theaterSelectors';
import { selectContactsInfo } from '@services/selectors/contactsSelectors';

import { initYandexTicketsWidget } from '@services/yandexTickets';

import { ROUTES } from 'consts';

const isPerformancesRoute = (pathname: string) =>
    [ROUTES.HOME, ROUTES.PERFORMANCES, ROUTES.AFISHA].some((route) => pathname === route);
const isTeamRoute = (pathname: string) => pathname === ROUTES.TEAM;
const isProjectsRoute = (pathname: string) => pathname === ROUTES.PROJECTS;
const isAboutRoute = (pathname: string) => pathname === ROUTES.ABOUT;

export const useInitialData = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const yandexWidgetInitialized = useRef(false);

    const performancesData = useSelector(selectPerformances);
    const teamData = useSelector(selectTeam);
    const projectsData = useSelector(selectProjects);
    const theaterInfoData = useSelector(selectTheaterInfo);
    const contactsInfoData = useSelector(selectContactsInfo);

    useEffect(() => {
        const loadData = async () => {
            const promises = [];

            // Загружаем контакты сразу, так как они нужны для футера на всех страницах
            if (!contactsInfoData.address) {
                console.log('Загрузка данных о контактах');
                await dispatch(fetchContacts());
            }

            if (!performancesData.length && isPerformancesRoute(location.pathname)) {
                console.log('Загрузка данных спектаклей');
                isPerformancesRoute(location.pathname);
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

            if (!teamData.length && isTeamRoute(location.pathname)) {
                console.log('Загрузка данных команды');
                promises.push(dispatch(fetchTeam()));
            }

            if (!projectsData.length && isProjectsRoute(location.pathname)) {
                console.log('Загрузка данных проектов');
                promises.push(dispatch(fetchProjects()));
            }

            if (!theaterInfoData.description.length && isAboutRoute(location.pathname)) {
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
        performancesData.length,
        teamData.length,
        projectsData.length,
        theaterInfoData,
        contactsInfoData,
    ]);
};

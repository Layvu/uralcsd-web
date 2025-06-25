import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppDispatch } from '@services/store';
import { initYandexTicketsWidget } from '@services/yandexTickets';

// Actions
import { fetchPerformances } from '@services/slices/performancesSlice';
import { fetchTeam } from '@services/slices/teamSlice';
import { fetchProjects } from '@services/slices/projectsSlice';
import { fetchTheaterInfo } from '@services/slices/theaterSlice';
import { fetchContacts } from '@services/slices/contactsSlice';
import { fetchPerformanceCasts } from '@services/slices/performanceCastsSlice';
import { fetchAfishaItems } from '@services/slices/afishaItemsSlice';

// Selectors
import { selectPerformancesInitialized } from '@services/selectors/performancesSelectors';
import { selectTeamInitialized } from '@services/selectors/teamSelectors';
import { selectProjectsInitialized } from '@services/selectors/projectsSelectors';
import { selectTheaterInitialized } from '@services/selectors/theaterSelectors';
import { selectContactsInitialized } from '@services/selectors/contactsSelectors';
import { selectPerformanceCastsInitialized } from '@services/selectors/performanceCastSelectors';
import { selectAfishaInitialized } from '@services/selectors/afishaItemsSelectors';
import { isAboutRoute, isAfishaRoute, isHomeRoute, isPerformanceDetailRoute, isPerformancesListRoute, isProjectDetailRoute, isProjectsListRoute, isTeamDetailRoute, isTeamListRoute } from 'consts';

export const useInitialData = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const yandexWidgetInitialized = useRef(false);

    // Флаги инициализации данных
    const isContactsInitialized = useSelector(selectContactsInitialized);
    const isPerformancesInitialized = useSelector(selectPerformancesInitialized);
    const isTeamInitialized = useSelector(selectTeamInitialized);
    const isProjectsInitialized = useSelector(selectProjectsInitialized);
    const isTheaterInitialized = useSelector(selectTheaterInitialized);
    const isPerformanceCastInitialized = useSelector(selectPerformanceCastsInitialized);
    const isAfishaItemsInitialized = useSelector(selectAfishaInitialized);

    useEffect(() => {
        const loadData = async () => {
            const promises: Promise<unknown>[] = [];

            // Загружаем контакты сразу - нужны для футера на всех страницах
            if (!isContactsInitialized) {
                await dispatch(fetchContacts());
            }

            // Главная и Афиша
            if (isHomeRoute(location.pathname) || isAfishaRoute(location.pathname)) {
                if (!isPerformancesInitialized) {
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isAfishaItemsInitialized) {
                    promises.push(dispatch(fetchAfishaItems()));
                }
            }

            // Список спектаклей
            if (isPerformancesListRoute(location.pathname)) {
                if (!isPerformancesInitialized) {
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isAfishaItemsInitialized) {
                    promises.push(dispatch(fetchAfishaItems()));
                }
            }

            // Детали спектакля
            // Подтягиваем данные о команде и связь с командой для ссылок в "Актёрский состав"
            if (isPerformanceDetailRoute(location.pathname)) {
                if (!isPerformancesInitialized) {
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isTeamInitialized) {
                    promises.push(dispatch(fetchTeam()));
                }
                if (!isPerformanceCastInitialized) {
                    promises.push(dispatch(fetchPerformanceCasts()));
                }
                if (!isAfishaItemsInitialized) {
                    promises.push(dispatch(fetchAfishaItems()));
                }
            }

            // Список участников
            if (isTeamListRoute(location.pathname)) {
                if (!isTeamInitialized) {
                    promises.push(dispatch(fetchTeam()));
                }
            }

            // Детали участника
            // Подтягиваем данные о спектаклях и связь со спектаклями для ссылок в "Спектакли"
            if (isTeamDetailRoute(location.pathname)) {
                if (!isTeamInitialized) {
                    promises.push(dispatch(fetchTeam()));
                }
                if (!isPerformancesInitialized) {
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isPerformanceCastInitialized) {
                    promises.push(dispatch(fetchPerformanceCasts()));
                }
            }

            // Проекты
            if (isProjectsListRoute(location.pathname) || isProjectDetailRoute(location.pathname)) {
                if (!isProjectsInitialized) {
                    promises.push(dispatch(fetchProjects()));
                }
            }

            // О театре
            if (isAboutRoute(location.pathname)) {
                if (!isTheaterInitialized) {
                    promises.push(dispatch(fetchTheaterInfo()));
                }
            }

            try {
                await Promise.all(promises);
            } catch (error) {
                console.error('Failed to load data:', error);
            }

            // Инициализируем виджет Яндекс.Билетов после первой загрузки событий
            // Только там, где есть кнопка "Купить билет", т.е. где отображаются события:
            if (
                isHomeRoute(location.pathname) ||
                isAfishaRoute(location.pathname) ||
                isPerformanceDetailRoute(location.pathname)
            ) {
                if (!yandexWidgetInitialized.current) {
                    try {
                        await initYandexTicketsWidget();
                        yandexWidgetInitialized.current = true;
                    } catch (error) {
                        console.error('Failed to initialize Yandex Tickets widget:', error);
                    }
                }
            }
        };

        loadData();
    }, [dispatch, location.pathname]);
};

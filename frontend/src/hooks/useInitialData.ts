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

// Routes
import { ROUTES } from 'consts';

const isHomeRoute = (pathname: string) => pathname === ROUTES.HOME;
const isAfishaRoute = (pathname: string) => pathname === ROUTES.AFISHA;
const isPerformancesListRoute = (pathname: string) => pathname === ROUTES.PERFORMANCES;
const isPerformanceDetailRoute = (pathname: string) => pathname.startsWith(`${ROUTES.PERFORMANCES}/`);
const isTeamListRoute = (pathname: string) => pathname === ROUTES.TEAM;
const isTeamDetailRoute = (pathname: string) => pathname.startsWith(`${ROUTES.TEAM}/`);
const isProjectsListRoute = (pathname: string) => pathname === ROUTES.PROJECTS;
const isProjectDetailRoute = (pathname: string) => pathname.startsWith(`${ROUTES.PROJECTS}/`);
const isAboutRoute = (pathname: string) => pathname === ROUTES.ABOUT;

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
                console.log('Загрузка данных о контактах');
                await dispatch(fetchContacts());
            }

            // Главная и Афиша
            if (isHomeRoute(location.pathname) || isAfishaRoute(location.pathname)) {
                if (!isPerformancesInitialized) {
                    console.log('Загрузка данных спектаклей');
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isAfishaItemsInitialized) {
                    console.log('Загрузка данных афиши');
                    promises.push(dispatch(fetchAfishaItems()));
                }
            }

            // Список спектаклей
            if (isPerformancesListRoute(location.pathname)) {
                if (!isPerformancesInitialized) {
                    console.log('Загрузка данных спектаклей');
                    promises.push(dispatch(fetchPerformances()));
                }
            }

            // Детали спектакля
            // Подтягиваем данные о команде и связь с командой для ссылок в "Актёрский состав"
            if (isPerformanceDetailRoute(location.pathname)) {
                if (!isPerformancesInitialized) {
                    console.log('Загрузка данных спектаклей');
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isTeamInitialized) {
                    console.log('Загрузка данных команды');
                    promises.push(dispatch(fetchTeam()));
                }
                if (!isPerformanceCastInitialized) {
                    console.log('Загрузка связи данных списка акторов и ролей в спектаклях');
                    promises.push(dispatch(fetchPerformanceCasts()));
                }
            }

            // Список участников
            if (isTeamListRoute(location.pathname)) {
                if (!isTeamInitialized) {
                    console.log('Загрузка данных команды');
                    promises.push(dispatch(fetchTeam()));
                }
            }

            // Детали участника
            // Подтягиваем данные о спектаклях и связь со спектаклями для ссылок в "Спектакли"
            if (isTeamDetailRoute(location.pathname)) {
                if (!isTeamInitialized) {
                    console.log('Загрузка данных команды');
                    promises.push(dispatch(fetchTeam()));
                }
                if (!isPerformancesInitialized) {
                    console.log('Загрузка данных спектаклей');
                    promises.push(dispatch(fetchPerformances()));
                }
                if (!isPerformanceCastInitialized) {
                    console.log('Загрузка связи данных списка акторов и ролей в спектаклях');
                    promises.push(dispatch(fetchPerformanceCasts()));
                }
            }

            // Проекты
            if (isProjectsListRoute(location.pathname) || isProjectDetailRoute(location.pathname)) {
                if (!isProjectsInitialized) {
                    console.log('Загрузка данных проектов');
                    promises.push(dispatch(fetchProjects()));
                }
            }

            // О театре
            if (isAboutRoute(location.pathname)) {
                if (!isTheaterInitialized) {
                    console.log('Загрузка данных о театре');
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

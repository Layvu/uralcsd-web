export enum ROUTES {
    HOME = '/',
    PERFORMANCES = '/performances',
    TEAM = '/team',
    AFISHA = '/afisha',
    ABOUT = '/about',
    PROJECTS = '/projects',
    CONTACTS = '/contacts',
}

export const menuLinks = [
    { path: ROUTES.AFISHA, label: 'Афиша' },
    { path: ROUTES.PERFORMANCES, label: 'Спектакли' },
    { path: ROUTES.ABOUT, label: 'О театре' },
    { path: ROUTES.TEAM, label: 'Команда' },
    { path: ROUTES.PROJECTS, label: 'Проекты' },
    { path: ROUTES.CONTACTS, label: 'Визит в театр' },
];

export enum TeamFilterCategories {
    Actors = 'actors',
    Directors = 'directors',
    Management = 'management',
}

export const isHomeRoute = (pathname: string) => pathname === ROUTES.HOME;
export const isAfishaRoute = (pathname: string) => pathname === ROUTES.AFISHA;
export const isPerformancesListRoute = (pathname: string) => pathname === ROUTES.PERFORMANCES;
export const isPerformanceDetailRoute = (pathname: string) => pathname.startsWith(`${ROUTES.PERFORMANCES}/`);
export const isTeamListRoute = (pathname: string) => pathname === ROUTES.TEAM;
export const isTeamDetailRoute = (pathname: string) => pathname.startsWith(`${ROUTES.TEAM}/`);
export const isProjectsListRoute = (pathname: string) => pathname === ROUTES.PROJECTS;
export const isProjectDetailRoute = (pathname: string) => pathname.startsWith(`${ROUTES.PROJECTS}/`);
export const isAboutRoute = (pathname: string) => pathname === ROUTES.ABOUT;

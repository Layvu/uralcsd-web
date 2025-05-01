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

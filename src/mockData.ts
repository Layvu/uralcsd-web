import { IMember } from 'interfases/IMember';
import { Performance } from 'types/performance';

export const mockPerformances: Performance[] = [
    {
        id: 1,
        name: 'Спектакль 1',
        slug: 'spectacle-1',
        description: 'Описание спектакля 1...',
        cast: [{ name: 'Актер 1', role: 'Роль 1' }],
        crew: [{ name: 'Режиссер 1', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg'],
        date: '2025-02-28T19:00:00',
        age: 16,
        duration: '2 часа',
        isWithIntermission: true,
        isPremiere: true,
    },
    {
        id: 2,
        name: 'Спектакль 2',
        slug: 'spectacle-2',
        description: 'Описание спектакля 2...',
        cast: [{ name: 'Актер 2', role: 'Роль 2' }],
        crew: [{ name: 'Режиссер 2', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg'],
        date: '2025-02-28T18:30:00',
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
        isPremiere: true,
    },
    {
        id: 3,
        name: 'Спектакль 3',
        slug: 'spectacle-3',
        description: 'Описание спектакля 3...',
        cast: [{ name: 'Актер 3', role: 'Роль 3' }],
        crew: [{ name: 'Режиссер 3', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg'],
        date: '2025-03-05T20:00:00',
        age: 16,
        duration: '3 часа',
        isWithIntermission: true,
        isPremiere: false,
    },
    {
        id: 4,
        name: 'Спектакль 4',
        slug: 'spectacle-4',
        description: 'Описание спектакля 4...',
        cast: [
            { name: 'Актер 4', role: 'Роль 4' },
            { name: 'Актер 4', role: 'Роль 4' },
        ],
        crew: [
            { name: 'Режиссер 4', role: 'Режиссер' },
            { name: 'Режиссер 4', role: 'Режиссер' },
        ],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg'],
        date: '2025-04-06T19:30:00',
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
        isPremiere: false,
    },
];

export const mockMembers: IMember[] = [
    {
        id: 1,
        slug: 'ivan-ivanov',
        surname: 'Иванов',
        name: 'Иван',
        gender: 'male',
        category: 'actors',
        additionalRoles: ['режиссер-постановщик'],
        biography: ['Иван Иванов — талантливый актер, выпускник ГИТИСа.', 'Участвовал в более чем 50 спектаклях.'],
        performances: [
            {
                performanceID: 1,
                role: ['Гамлет', 'Король Лир'],
            },
            {
                performanceID: 2,
                role: ['Чацкий'],
            },
        ],
        mainPhoto: '/photos/ivan-ivanov.jpg',
        images: ['/photos/ivan-ivanov-1.jpg', '/photos/ivan-ivanov-2.jpg'],
    },
    {
        id: 2,
        slug: 'anna-petrova',
        surname: 'Петрова',
        name: 'Анна',
        gender: 'female',
        category: 'actors',
        biography: ['Анна Петрова — актриса с многолетним опытом.', 'Лауреат премии "Золотая маска".'],
        performances: [
            {
                performanceID: 3,
                role: ['Офелия'],
            },
            {
                performanceID: 4,
                role: ['Софья'],
            },
        ],
        mainPhoto: '/photos/anna-petrova.jpg',
    },
    {
        id: 3,
        slug: 'sergey-sidorov',
        surname: 'Сидоров',
        name: 'Сергей',
        gender: 'male',
        category: 'directors',
        biography: ['Сергей Сидоров — известный режиссер, постановщик более 30 спектаклей.'],
        performances: [
            {
                performanceID: 1,
            },
        ],
        mainPhoto: '/photos/sergey-sidorov.jpg',
        images: ['/photos/sergey-sidorov-1.jpg'],
    },
    {
        id: 4,
        slug: 'maria-ivanova',
        surname: 'Иванова',
        name: 'Мария',
        gender: 'female',
        category: 'actors',
        biography: ['Мария Иванова — молодая и перспективная актриса.'],
        performances: [], // Нет данных о спектаклях
        mainPhoto: '/photos/maria-ivanova.jpg',
    },
    {
        id: 5,
        slug: 'alexey-smirnov',
        surname: 'Смирнов',
        name: 'Алексей',
        gender: 'male',
        category: 'management',
        additionalRoles: ['администратор'],
        biography: [], // Нет биографии
        performances: [], // Нет данных о спектаклях
        mainPhoto: '/photos/alexey-smirnov.jpg',
    },
];

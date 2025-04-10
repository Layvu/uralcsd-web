import { IPerformance } from 'types/performance';
import { IMember } from 'types/member';
import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';
import { IContactInfo } from 'types/contacts';
import { IAfishaItem } from 'types/afishaItem';

export const mockPerformances: IPerformance[] = [
    {
        id: '1',
        title: 'Спектакль 1',
        slug: 'spectacle-1',
        description: 'Описание спектакля 1...',
        cast: [
            { memberId: '5', role: 'Гамлет' },
            { memberId: '5', role: 'Король Лир' },
        ],
        crew: [{ memberId: '7', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg'],
        age: 16,
        duration: '2 часа',
        isWithIntermission: true,
    },
    {
        id: '2',
        title: 'Спектакль 2',
        slug: 'spectacle-2',
        description: 'Описание спектакля 2...',
        cast: [{ memberId: '5', role: 'Чацкий' }],
        crew: [{ memberId: '7', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg'],
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
    },
    {
        id: '3',
        title: 'Спектакль 3',
        slug: 'spectacle-3',
        description: 'Описание спектакля 3...',
        cast: [{ memberId: '6', role: 'Офелия' }],
        crew: [{ memberId: '7', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg'],
        age: 16,
        duration: '3 часа',
        isWithIntermission: true,
    },
    {
        id: '4',
        title: 'Спектакль 4',
        slug: 'spectacle-4',
        description: 'Описание спектакля 4...',
        cast: [{ memberId: '6', role: 'Софья' }],
        crew: [{ memberId: '7', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg'],
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
    },
    {
        id: '5',
        title: 'Спектакль 5',
        slug: 'spectacle-5',
        description: 'Описание спектакля 5...',
        cast: [{ memberId: '9', role: 'Главная роль' }],
        crew: [{ memberId: '7', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg'],
        age: 16,
        duration: '2 часа',
        isWithIntermission: true,
    },
    {
        id: '6',
        title: 'Спектакль 6',
        slug: 'spectacle-6',
        description: 'Описание спектакля 6...',
        cast: [
            { memberId: '5', role: 'Главный герой' },
            { memberId: '6', role: 'Главная героиня' },
        ],
        crew: [{ memberId: '7', role: 'Режиссер' }],
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg'],
        age: 12,
        duration: '1.5 часа',
        isWithIntermission: false,
    },
];

// Добавляем отдельный массив для афиши
export const mockAfishaItems: IAfishaItem[] = [
    {
        id: '101',
        performanceId: '1',
        date: '2025-04-15T19:00:00',
        sessionId: '247907',
        isPremiere: true,
        price: 1000,
        photo: '/img/mockImage.jpg',
        title: 'Спектакль 1 - Премьера',
        slug: 'spectacle-1-premiere',
    },
    {
        id: '102',
        performanceId: '2',
        date: '2025-04-28T14:30:00',
        sessionId: '247907',
        isPremiere: true,
        price: 800,
        photo: '/img/mockImage.jpg',
        title: 'Спектакль 2 - Премьера',
        slug: 'spectacle-2-premiere',
    },
    {
        id: '103',
        performanceId: '3',
        date: '2025-04-28T18:00:00',
        sessionId: '247907',
        isPremiere: false,
        price: 900,
        photo: '/img/mockImage.jpg',
        title: 'Спектакль 3',
        slug: 'spectacle-3',
    },
    {
        id: '104',
        performanceId: '4',
        date: '2025-03-28T21:30:00',
        sessionId: '247907',
        isPremiere: false,
        price: 700,
        photo: '/img/mockImage.jpg',
        title: 'Спектакль 4',
        slug: 'spectacle-4',
    },
    {
        id: '105',
        performanceId: '5',
        date: '2025-04-10T19:00:00',
        sessionId: '247907',
        isPremiere: false,
        price: 900,
        photo: '/img/mockImage.jpg',
        title: 'Спектакль 5',
        slug: 'spectacle-5',
    },
    {
        id: '106',
        performanceId: '6',
        date: '2025-04-25T18:30:00',
        sessionId: '247907',
        isPremiere: true,
        price: 1200,
        photo: '/img/mockImage.jpg',
        title: 'Спектакль 6 - Премьера',
        slug: 'spectacle-6-premiere',
    },
];

export const mockTeam: IMember[] = [
    {
        id: '5',
        slug: 'ivan-ivanov',
        surname: 'Иванов',
        name: 'Иван',
        gender: 'male',
        category: 'actors',
        additionalRoles: ['режиссер-постановщик'],
        biography: ['Иван Иванов — талантливый актер, выпускник ГИТИСа.', 'Участвовал в более чем 50 спектаклях.'],
        performances: [
            {
                performanceId: '1',
                role: ['Гамлет', 'Король Лир'],
            },
            {
                performanceId: '2',
                role: ['Чацкий'],
            },
        ],
        mainPhoto: '/photos/mockImage.jpg',
        images: ['/photos/mockImage.jpg', '/photos/mockImage.jpg'],
    },
    {
        id: '6',
        slug: 'anna-petrova',
        surname: 'Петрова',
        name: 'Анна',
        gender: 'female',
        category: 'actors',
        additionalRoles: [],
        biography: ['Анна Петрова — актриса с многолетним опытом.', 'Лауреат премии "Золотая маска".'],
        performances: [
            {
                performanceId: '3',
                role: ['Офелия'],
            },
            {
                performanceId: '4',
                role: ['Софья'],
            },
        ],
        mainPhoto: '/photos/mockImage.jpg',
        images: [],
    },
    {
        id: '7',
        slug: 'sergey-sidorov',
        surname: 'Сидоров',
        name: 'Сергей',
        gender: 'male',
        category: 'directors',
        additionalRoles: [],
        biography: ['Сергей Сидоров — известный режиссер, постановщик более 30 спектаклей.'],
        performances: [
            {
                performanceId: '1',
                role: [],
            },
        ],
        mainPhoto: '/photos/mockImage.jpg',
        images: ['/photos/mockImage.jpg'],
    },
    {
        id: '8',
        slug: 'maria-ivanova',
        surname: 'Иванова',
        name: 'Мария',
        gender: 'female',
        category: 'actors',
        additionalRoles: [],
        biography: ['Мария Иванова — молодая и перспективная актриса.'],
        performances: [], // Нет данных о спектаклях
        mainPhoto: '/photos/mockImage.jpg',
        images: [],
    },
    {
        id: '9',
        slug: 'alexey-smirnov',
        surname: 'Смирнов',
        name: 'Алексей',
        gender: 'male',
        category: 'management',
        additionalRoles: ['администратор'],
        biography: [], // Нет биографии
        performances: [], // Нет данных о спектаклях
        mainPhoto: '/photos/mockImage.jpg',
        images: [],
    },
];

export const mockProjects: IProject[] = [
    {
        id: '10',
        name: 'Театральная лаборатория',
        slug: 'theatre-lab',
        description: 'Экспериментальная театральная лаборатория для молодых режиссеров и драматургов...',
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg', '/img/mockImage.jpg'],
        buttonText: 'Подробнее',
        buttonLink: 'https://afisha.yandex.ru/yekaterinburg',
    },
    {
        id: '11',
        name: 'Детская театральная школа',
        slug: 'kids-theatre-school',
        description: 'Образовательный проект для детей, включающий занятия по актерскому мастерству...',
        images: ['/img/mockImage.jpg', '/img/mockImage.jpg'],
        buttonText: 'Регистрация',
        buttonLink: 'https://afisha.yandex.ru/yekaterinburg',
    },
    {
        id: '12',
        name: 'Театральный фестиваль',
        slug: 'theatre-festival',
        description: 'Ежегодный фестиваль современного театрального искусства...',
        images: ['/img/mockImage.jpg'],
        buttonText: 'Купить билет',
        buttonLink: 'https://afisha.yandex.ru/yekaterinburg',
    },
];

export const mockTheaterInfo: ITheaterInfo = {
    image: '/img/theater-photo.jpg',
    description: `Центр Современной Драматургии — это новый формат театра. Здесь нет привычной классики, огромного зала, бархатного занавеса и биноклей.

В ЦСД зал рассчитан всего на 63 человека, а действие спектакля разворачивается на расстоянии вытянутой руки. Вы максимально погрузитесь во все происходящее на сцене, не упустите ни одну деталь.Четвертая стена рушится сама собой, когда актеры буквально смотрят тебе в глаза!

ЦСД — это площадка для экспериментов, в которой нет правил и цензуры. Это театр, который создают молодые уральские режиссеры, драматурги, актеры, музыканты и художники. Наше новаторство проявляется даже в расположении: мы находимся в уютном лофт-пространстве «Рыбзавода».

ЦСД — это место, которое хотя бы раз в жизни должен посетить каждый житель или гость Екатеринбурга. Это место, в котором вы испытаете живые эмоции. Это место, которое не оставит равнодушным никого.`,
    partnersImages: ['/img/partners/mockImage.png', '/img/partners/mockImage.png', '/img/partners/mockImage.png'],
};

export const mockContactInfo: IContactInfo = {
    address:
        '620000 Россия, Свердловская область, г. Екатеринбург, ул. Малышева, д. 145А, лит.Ф пространство бывшего «Рыбзавода»',
    workingDaysText: 'Со вторника по воскресенье',
    workingHours: {
        start: '11:00',
        end: '20:00',
    },
    daysOff: ['Понедельник'],
    phones: {
        main: '+7 (996) 170-24-20',
        boxOffice: '+7 (343) 206-69-12',
    },
    email: 'dramcentr@gmail.com',
    faq: [
        {
            question: 'Как купить билет?',
            answer: `- На нашем сайте
Мы работаем с билетной системой Яндекс.Билеты
Нажать кнопку «Купить билеты» в разделе «Афиша» или на странице конкретного спектакля;
Выбрать понравившиеся места;
Нажать кнопку «Купить». Выбрать способ оплаты, ввести данные банковской карты и актуальный адрес электронной почты;
Готово! Билеты уже на Вашей почте. Их можно показать на входе с экрана мобильного телефона или распечатать.
- В кассе ЦСД на Малышева, 145А, лит.Ф
В нашей кассе можно купить любое свободное место в зале.`,
        },
        {
            question: 'Как до вас добраться?',
            answer: `- На общественном транспорте
Доехать до остановки «Комсомольская», далее пешком 400 м по нечетной стороне улицы Малышева в сторону ЖБИ, перейти улицу Студенческую и двигаться вдоль моста до здания с вывеской «ТЕАТР ЦСД», вход находится с правого торца, первая дверь с табличкой «ЦСД», 2 этаж
- На автомобиле
Со стороны центра города двигаться по улице Малышева, развернуться под мостом (не заезжая на него). Парковка находится у цветного забора перед зданием с вывеской «ТЕАТР ЦСД».`,
        },
        {
            question: 'Как вы работаете?',
            answer: 'Касса работает с 11 до 20 часов со вторника по воскресенье, понедельник - выходной день. Мы играем спектакли каждый день.',
        },
    ],
};

import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';

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



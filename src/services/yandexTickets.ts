/**
 * Сервис для работы с виджетом Яндекс.Билетов
 * Документация: https://yandex.ru/dev/afisha/tickets/doc/concepts/widget-settings.html
 */

import { YandexTicketsOpenOptions, YandexTicketsDealer } from 'types/yandex-tickets';

const CLIENT_KEY = import.meta.env.VITE_YANDEX_TICKETS_CLIENT_KEY || '';
const REGION_ID = import.meta.env.VITE_YANDEX_TICKETS_REGION_ID || ''; // ID региона

if (!CLIENT_KEY || !REGION_ID) {
    console.error('Yandex Tickets: Missing required environment variables');
}

/**
 * Инициализирует виджет Яндекс.Билетов
 */
export const initYandexTicketsWidget = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Проверяем, инициализирован ли уже дилер
        if (window.YandexTicketsDealer) {
            resolve();
            return;
        }

        const dealerName = 'YandexTicketsDealer';

        window[dealerName] = window[dealerName] || [];

        const dealer = window[dealerName];

        // Настраиваем дилера
        dealer.push(['setDefaultClientKey', CLIENT_KEY]);
        dealer.push(['setDefaultRegionId', REGION_ID]);

        // Добавляем обработчик завершения покупки
        dealer.push([
            'addEventListener',
            'salecomplete',
            function () {
                setTimeout(() => {
                    console.log('Покупка завершена успешно');
                }, 1000);
            },
        ]);

        // Загрузка скрипта по документации
        const rnd = '?' + new Date().getTime() * Math.random();
        const script = document.createElement('script');
        const target = document.getElementsByTagName('script')[0];
        script.async = true;
        script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js' + rnd;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Yandex Tickets dealer script'));

        if (target.parentNode) {
            target.parentNode.insertBefore(script, target);
        } else {
            reject(new Error('Cannot find parent node for script tag'));
        }
    });
};

/**
 * Открывает виджет покупки билетов
 * @param sessionId ID сеанса в Яндекс.Билетах
 */
export const openTicketsWidget = (sessionId: string): void => {
    if (!sessionId) {
        console.error('Session ID is required to open tickets widget');
        return;
    }

    if (!window.YandexTicketsDealer) {
        console.error('Yandex Tickets dealer is not initialized');
        return;
    }

    const options: YandexTicketsOpenOptions = {
        id: sessionId,
        regionId: REGION_ID,
        type: 'event',
    };

    window.YandexTicketsDealer.push([
        'getDealer',
        function (dealer: YandexTicketsDealer) {
            dealer.open(options);
        },
    ]);
};

/**
 * Типы для работы с Яндекс.Билетами
 */

// Опции для открытия виджета
export interface YandexTicketsOpenOptions {
    id: string;
    type: 'session' | 'event';
    regionId: string;
}

// Интерфейс для дилера Яндекс.Билетов
export interface YandexTicketsDealer {
    open: (options: YandexTicketsOpenOptions) => void;
}

// Расширяем глобальный интерфейс Window
declare global {
    interface Window {
        YandexTicketsDealer: {
            push: (command) => number;
        };
    }
}

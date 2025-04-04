export interface IAfishaItem {
    id: string; // Уникальный идентификатор показа (например, sessionId)
    performanceId: string; // Ссылка на IPerformance
    date: string; // Дата и время показа (формат ISO, как в моках)
    sessionId: string; // ID сеанса для Яндекс.Билетов. Выдаётся администратору при создании события на Яндекс Афише
    isPremiere: boolean; // Является ли премьерой
    price: number; // Цена билета
    photo: string; // Фото для афиши

    // Возможно лишнее:
    title: string; // Название показа (может отличаться от спектакля)
    slug: string; // Уникальный slug для показа
}

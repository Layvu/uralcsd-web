export interface IAfishaItem {
    id: string; 
    performanceId: string; // связь с IPerformance
    
    date: string; // Дата и время показа (формат ISO, как в моках)
    sessionId: string; // ID сеанса для Яндекс.Билетов. Выдаётся администратору при создании события на Яндекс Афише
    isPremiere: boolean; // Является ли премьерой
    price: number; 
    photo: string; // Фото для афиши

    // Возможно лишнее:
    title: string; // Название показа (может отличаться от спектакля). Виден в панели администратора.
    slug: string; // Уникальный slug для показа
}

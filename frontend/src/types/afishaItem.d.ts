export interface IAfishaItem {
    id: string; 
    performance: {id: string}; // связь с IPerformance
    
    date: string; // Дата и время показа (формат ISO, как в моках)
    sessionId: string; // ID сеанса для Яндекс.Билетов. Выдаётся администратору при создании события на Яндекс Афише
    isInMainBanner: boolean; // Находится ли на главном экране
    price: number; 
    photo: {url : string}; // Фото для афиши
}

export interface IPerformance {
    id: string;
    title: string; // Название спектакля (вместо "name" для соответствия Afisha_item)
    slug: string;
    description: string;
    //cast: { name: string; role: string }[];
    //crew: { name: string; role: string }[];
    cast: { memberId: string; role: string }[];  // Актеры (через Performance-cast)
    crew: { memberId: string; role: string }[];  // Другие участники (режиссер и т.д.)
    images: string[];
    //date: string;
    age: number;
    duration: string;
    //sessionId?: string; // ID сеанса для Яндекс.Билетов. Выдаётся администратору при создании события на Яндекс Афише
    isWithIntermission: boolean;
    //isPremiere: boolean;
}

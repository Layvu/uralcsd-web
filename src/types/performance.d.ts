export interface IPerformance {
    id: string;
    name: string;
    slug: string;
    description: string;
    cast: { name: string; role: string }[];
    crew: { name: string; role: string }[];
    images: string[];
    date: string;
    age: number;
    duration: string;
    sessionId?: string; // ID сеанса для Яндекс.Билетов. Выдаётся администратору при создании события на Яндекс Афише
    isWithIntermission: boolean;
    isPremiere: boolean;
}

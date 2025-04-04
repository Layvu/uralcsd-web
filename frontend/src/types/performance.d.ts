import { IMember } from "./member";

export interface IPerformance {
    id: string;
    title: string; // Название спектакля (вместо "name" для соответствия Afisha_item)
    slug: string;
    description: string;
    teaser: string;
    additionalInfo: string; // Дополнительное описание 
    cast: { performanceCastId: string; role: string }[];  // Актеры (через Performance-cast)
    director: IMember;  // режиссер
    dramatist: string; // драматург
    imagesUrls: string[];
    mainImageUrl: string; 
    ageLimit: number;
    duration: string;
    isWithIntermission: boolean;
    isActual: boolean;
}

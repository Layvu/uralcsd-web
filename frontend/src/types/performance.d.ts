import { IMember } from "./member";

export interface IPerformance {
    id: string;
    title: string; // Название спектакля (вместо "name" для соответствия Afisha_item)
    slug: string;
    description: string;
    teaser: string;
    additionalInfo: string; // Дополнительное описание 
    ageLimit: number;
    duration: string;
    dramatist: string; // драматург

    performanceCasts: { 
        id: string; 
    }[];  // Актеры (через PerformanceСast)
    directors: {
        id: string // режиссеры, связь через IMember
    }[];  

    images?: { url: string }[];
    mainImage?: { url: string };

    isWithIntermission: boolean;
    isActual: boolean;
}

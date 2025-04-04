import { TeamFilterCategory } from 'types/TeamFilterCategory';

export interface IMember {
    id: string;
    slug: string;
    name: string;
    surname: string;
    gender: 'male' | 'female';
    category: TeamFilterCategory; // Должность - в какой вкладке будет отображаться // или string, если для api
    additionalRoles: string[];
    biography: string[];
    performances: {
        performanceId: string; // Связь через Performance-cast
        role: string[];
    }[];
    mainPhoto: string;
    images: string[];
}

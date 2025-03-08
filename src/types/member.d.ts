import { TeamFilterCategory } from 'types/TeamFilterCategory';

export interface IMember {
    id: string;
    slug: string;
    name?: string;
    surname?: string;
    gender?: 'male' | 'female';
    category: TeamFilterCategory; // Должность - в какой вкладке будет отображаться
    additionalRoles?: string[];
    biography?: string[];
    performances?: {
        performanceID: string;
        role?: string[];
    }[];
    mainPhoto?: string;
    images?: string[];
}

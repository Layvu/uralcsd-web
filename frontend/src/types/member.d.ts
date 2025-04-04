import { TeamFilterCategory } from 'types/TeamFilterCategory';
import { IPerformance } from './performance';

export interface IMember {
    id: string;
    slug: string;
    name: string;
    surname: string;
    gender: 'male' | 'female';
    category: TeamFilterCategory; // Должность - в какой вкладке будет отображаться // или string, если для api
    additionalRoles: string[];
    biography: string[] | null;
    position: string | null; // Занимаемая должность, отображается снизу фотографии на странице /team
    aPerformances: IPerformance[] // Если режиссер - список спектаклей, которых он поставил
    performances: {
        performanceCastId: string; // Связь через PerformanceCast
        role: string;
    }[];
    mainPhoto: string;
    imagesUrls: string[];
}

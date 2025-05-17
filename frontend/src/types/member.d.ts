import { TeamFilterCategory } from 'types/TeamFilterCategory';

export interface IMember {
    id: string;
    slug: string;
    name: string;
    surname: string;
    category: TeamFilterCategory; // Должность - в какой вкладке будет отображаться // или string, если для api
    // additionalRoles: string[];
    biography?: string | null;
    position: string | null; // Занимаемая должность, отображается снизу фотографии на странице /team
    aPerformances?: {
        id: string;
    }[] // Если режиссер - список спектаклей, которых он поставил
    choreographedPerformances?:{
        id: string;
    }[]// Если хореограф - список спектаклей, которых он поставил
    performanceCasts?: {
        id: string; // Связь через PerformanceCast
    }[];
    mainPhoto?: { url: string };
    images?: {url : string}[];
}

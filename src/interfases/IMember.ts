import { TeamFilterCategory } from 'types/TeamFilterCategory';

export interface IMember {
    id: number, 
    slug: string; // Уникальный идентификатор для URL
    surname?: string;
    name?: string; 
    gender?: 'male'|'female'; 
    category: TeamFilterCategory; // Должность - в какой вкладке будет отображаться
    additionalRoles?: string[]; 
    biography?: string[]; // Биография
    performances?: {  // Список спектаклей с ролями    
        performanceID: number; // Спектакль
        role?: string[]; // Роль в спектакле, либо несколько ролей
    }[];
    mainPhoto?: string; // Главное фото актера
    images?: string[]; // Набор фоток с выступлений
}

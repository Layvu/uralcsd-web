import { Performance } from 'types/performance';
import { IMember } from 'interfases/IMember';
import { mockPerformances, mockTeam } from 'mockData';

// Симуляция задержки сети
const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Проверка ответа
const checkResponse = <T>(res: T): T => res;

// Моковые данные
const mockApiResponse = async <T>(data: T): Promise<T> => {
    await simulateDelay(1000);
    console.log('simulateDelay...');
    return checkResponse(data);
};

export const fetchPerformancesApi = async (): Promise<Performance[]> => {
    console.log('fetchPerformancesApi...');
    return mockApiResponse(mockPerformances);
};

export const fetchTeamApi = async (): Promise<IMember[]> => {
    console.log('fetchTeamApi...');
    return mockApiResponse(mockTeam);
};

import { IPerformance } from 'types/performance';
import { IMember } from 'types/member';
import { mockPerformances, mockProjects, mockTeam } from 'mockData';
import { IProject } from 'types/project';

// Проверка ответа
const checkResponse = <T>(res: T): T => res;

// Моковые данные
const mockApiResponse = async <T>(data: T): Promise<T> => {
    return checkResponse(data);
};

export const fetchPerformancesApi = async (): Promise<IPerformance[]> => {
    console.log('fetchPerformancesApi...');
    return mockApiResponse(mockPerformances);
};

export const fetchTeamApi = async (): Promise<IMember[]> => {
    console.log('fetchTeamApi...');
    return mockApiResponse(mockTeam);
};

export const fetchProjectsApi = async (): Promise<IProject[]> => {
    console.log('fetchProjectsApi...');
    return mockApiResponse(mockProjects);
};

import { IPerformance } from 'types/performance';
import { IMember } from 'types/member';
import { mockPerformances, mockProjects, mockTeam, mockTheaterInfo, mockContactInfo } from 'mockData';
import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';
import { IContactInfo } from 'types/contacts';

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

export const fetchTheaterInfoApi = async (): Promise<ITheaterInfo> => {
    console.log('fetchTheaterInfoApi...');
    return mockApiResponse(mockTheaterInfo);
};

export const fetchContactsApi = async (): Promise<IContactInfo> => {
    console.log('fetchContactsApi...');
    return mockApiResponse(mockContactInfo);
};

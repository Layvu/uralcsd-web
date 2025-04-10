import { mockPerformances, mockProjects, mockTeam, mockTheaterInfo, mockContactInfo } from 'mockData';
import { IPerformance } from 'types/performance';
import { IMember } from 'types/member';
import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';
import { IContactInfo } from 'types/contacts';
import { IPerformanceCast } from 'types/performanceCast';
import { IAfishaItem } from 'types/afishaItem';

import axios from 'axios';
import { getAbsoluteImagePath } from 'utils/getAbsoluteImagePath';


interface IBackendMember extends Omit<IMember, 'mainPhoto'> {
    mainPhoto: { url: string }[];
}
interface IBackendPerformance extends Omit<IPerformance, 'mainImage'> {
    mainImage: { url: string }[];
}


const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_PUBLIC_API_URL}/api`,

    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`,
    },
});

// Проверка ответа
const checkResponse = <T>(res: T): T => res;

// Моковые данные
const mockApiResponse = async <T>(data: T): Promise<T> => {
    return checkResponse(data);
};

export const fetchPerformancesApi = async (): Promise<IPerformance[]> => {
    console.log('fetchPerformancesApi...');
    try {
        const response = await apiClient.get('/performances', {
            params: {
                populate: {
                    performanceCasts: { fields: ['id'] },
                    images: { fields: ['url'] },
                    mainImage: { fields: ['url'] },
                },
            },
        });

        const performances = response.data.data.map((item: IBackendPerformance) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            description: item.description,
            teaser: item.teaser,
            additionalInfo: item.additionalInfo,
            ageLimit: item.ageLimit,
            duration: item.duration,
            dramatist: item.dramatist,
            performanceCasts: item.performanceCasts?.map((cast) => ({ id: cast.id })) || [],
            director: item.director?.id ? { id: item.director.id } : null,
            images: item.images?.map((image) => ({ url: getAbsoluteImagePath(image.url) })) || [],
            mainImage: item.mainImage?.[0]?.url ? { url: getAbsoluteImagePath(item.mainImage[0].url) } : null,
            isWithIntermission: item.isWithIntermission,
            isActual: item.isActual,
        }));

        return performances;
    } catch (error) {
        console.error('Error fetching performances:', error);
        throw error;
    }
};

export const fetchTeamApi = async (): Promise<IMember[]> => {
    console.log('fetchTeamApi...');
    try {
        const response = await apiClient.get('/members', {
            params: {
                populate: {
                    performanceCasts: { fields: ['id'] },
                    aPerformances: { fields: ['id'] },
                    images: { fields: ['url'] },
                    mainPhoto: { fields: ['url'] },
                },
            },
        });

        const members = response.data.data.map((item: IBackendMember) => ({
            id: item.id,
            slug: item.slug,
            name: item.name,
            surname: item.surname,
            gender: item.gender,
            category: item.category,
            biography: item.biography,
            position: item.position,
            mainPhoto: item.mainPhoto?.[0]?.url ? { url: getAbsoluteImagePath(item.mainPhoto[0].url) } : null,
            images: item.images?.map((image) => ({ url: getAbsoluteImagePath(image.url) })) || [],
            aPerformances: item.aPerformances?.map((performance) => ({ id: performance.id })) || [],
            performanceCasts: item.performanceCasts?.map((cast) => ({ id: cast.id })) || [],
        }));

        return members;
    } catch (error) {
        console.error('Error fetching team members:', error);
        throw error;
    }
};

export const fetchPerformanceCastsApi = async (): Promise<IPerformanceCast[]> => {
    console.log('fetchPerformanceCastsApi...');
    try {
        const response = await apiClient.get('/performance-casts', {
            params: {
                populate: {
                    performance: { fields: ['id'] },
                    actor: { fields: ['id'] },
                },
            },
        });

        const performanceCasts = response.data.data.map((item: IPerformanceCast) => ({
            id: item.id,
            role: item.role,
            actor: item.actor ? { id: item.actor.id } : null,
            performance: item.performance ? { id: item.performance.id } : null,
        }));

        return performanceCasts;
    } catch (error) {
        console.error('Error fetching performance casts:', error);
        throw error;
    }
};

export const fetchAfishaItemsApi = async (): Promise<IAfishaItem[]> => {
    console.log('fetchAfishaItemsApi...');
    try {
        const currentDate = new Date().toISOString();
        const response = await apiClient.get('/afisha-items', {
            params: {
                'filters[date][$gt]': currentDate,
                sort: 'date:asc',
                populate: {
                    performance: { fields: ['id'] },
                    photo: { fields: ['url'] },
                },
            },
        });

        const afishaItems = response.data.data.map((item: IAfishaItem) => ({
            id: item.id.toString(),
            performance: { id: item.performance?.id.toString() || '' },
            date: item.date,
            sessionId: item.sessionId,
            isPremiere: item.isPremiere,
            price: item.price,
            photo: item.photo?.url ? { url: getAbsoluteImagePath(item.photo.url) } : null,
        }));

        return afishaItems;
    } catch (error) {
        console.error('Error fetching afisha items:', error);
        throw error;
    }
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

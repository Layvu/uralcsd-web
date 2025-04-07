import { IPerformance } from 'types/performance';
import { IMember } from 'types/member';
import { mockPerformances, mockProjects, mockTeam, mockTheaterInfo, mockContactInfo } from 'mockData';
import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';
import { IContactInfo } from 'types/contacts';

import axios from 'axios';
import { getAbsoluteImagePath } from 'utils/getAbsoluteImagePath';

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_PUBLIC_API_URL}/api`,
  
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`
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

    const response = await apiClient.get('/performances', {
        params: {
            populate: {
                performanceCasts: { fields: ['id'] },
                images: { fields: ['url'] },
                mainImage: { fields: ['url'] },
            },
        },
    });

    const performances = response.data.data.map((item: IPerformance) => ({
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
        director: item.director?.id? { id: item.director.id } : null,
        images: item.images?.map((image) => ({ url: getAbsoluteImagePath(image.url) })) || [],
        mainImage: item.mainImage?.[0]?.url? { url: getAbsoluteImagePath(item.mainImage[0].url) } : null,
        isWithIntermission: item.isWithIntermission,
        isActual: item.isActual,
    }));

    return performances;
};

export const fetchTeamApi = async (): Promise<IMember[]> => {
    console.log('fetchTeamApi...');

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

    const members = response.data.data.map((item: IMember) => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        surname: item.surname,
        gender: item.gender,
        category: item.category,
        biography: item.biography,
        position: item.position,
        mainPhoto: item.mainPhoto?.[0]?.url? { url: getAbsoluteImagePath(item.mainPhoto[0].url) } : null,
        imagesUrls: item.images?.map((image) => getAbsoluteImagePath(image.url)) || [], 
        aPerformances: item.aPerformances?.map((performance) => ({ id: performance.id })) || [],
        performanceCasts: item.performanceCasts?.map((cast) => ({ id: cast.id })) || [],
    }));

    return members;
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

import { IPerformance } from 'types/performance';
import { IMember } from 'types/member';
import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';
import { IContactInfo } from 'types/contacts';
import { IPerformanceCast } from 'types/performanceCast';
import { IAfishaItem } from 'types/afishaItem';

import axios from 'axios';
import { getAbsoluteImagePath } from 'utils/getAbsoluteImagePath';

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_PUBLIC_API_URL}/api`,

    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`,
    },
});

export const fetchPerformancesApi = async (): Promise<IPerformance[]> => {
    console.log('fetchPerformancesApi...');
    try {
        const response = await apiClient.get('/performances', {
            params: {
                populate: {
                    performanceCasts: { fields: ['id'] },
                    directors: {
                        populate: true,
                    },
                    choreographers: {
                        populate: true,
                    },
                    images: { fields: ['url'] },
                    mainImage: { fields: ['url'] },
                },
            },
        });

        let performances = response.data.data.map((item: IPerformance) => ({
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
            directors:
                item.directors?.map((director) => ({
                    id: director.id,
                    slug: director.slug,
                    name: director.name,
                    surname: director.surname,
                })) || [],
            choreographers:
                item.choreographers?.map((choreographer) => ({
                    id: choreographer.id,
                    slug: choreographer.slug,
                    name: choreographer.name,
                    surname: choreographer.surname,
                })) || [],
            images: item.images?.map((image) => ({ url: getAbsoluteImagePath(image.url) })) || [],
            mainImage: item.mainImage?.url ? { url: getAbsoluteImagePath(item.mainImage.url) } : null,
            intermissionInfo: item.intermissionInfo,
            isPremiere: item.isPremiere,
        }));

        // сначала премьеры, затем остальные
        performances = performances.sort((a: IPerformance, b: IPerformance) => {
            if (a.isPremiere && !b.isPremiere) return -1;
            if (!a.isPremiere && b.isPremiere) return 1;
            return 0;
        });

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
                    choreographedPerformances: { fields: ['id'] },
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
            category: item.category,
            biography: item.biography,
            position: item.position,
            mainPhoto: item.mainPhoto?.url ? { url: getAbsoluteImagePath(item.mainPhoto.url) } : null,
            images: item.images?.map((image) => ({ url: getAbsoluteImagePath(image.url) })) || [],
            aPerformances: item.aPerformances?.map((performance) => ({ id: performance.id })) || [],
            choreographedPerformances:
                item.choreographedPerformances?.map((performance) => ({ id: performance.id })) || [],
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
            isInMainBanner: item.isInMainBanner,
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
    try {
        const response = await apiClient.get('/projects', {
            params: {
                populate: {
                    images: {
                        fields: ['url'],
                    },
                },
            },
        });

        const projects = response.data.data.map((project: IProject) => ({
            ...project,
            images: project.images?.map((image: { url: string }) => ({ url: getAbsoluteImagePath(image.url) })),
        }));

        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const fetchTheaterInfoApi = async (): Promise<ITheaterInfo> => {
    console.log('fetchTheaterInfoApi...');

    try {
        const response = await apiClient.get('/theater-info', {
            params: {
                populate: {
                    images: {
                        fields: ['url'],
                    },
                    partners: {
                        fields: ['url'],
                        populate: {
                            image: {
                                fields: ['url'],
                            },
                        },
                    },
                },
            },
        });

        const traterInfoItem = response.data.data;
        traterInfoItem.images = traterInfoItem.images.map((image: { url: string }) => ({
            url: getAbsoluteImagePath(image.url),
        }));
        traterInfoItem.partners = traterInfoItem.partners.map((partner: { url: string; image: { url: string } }) => ({
            url: partner.url,
            image: partner.image.url ? { url: getAbsoluteImagePath(partner.image.url) } : null,
        }));

        return traterInfoItem;
    } catch (error) {
        console.error('Error fetching theater info:', error);
        throw error;
    }
};

export const fetchContactsApi = async (): Promise<IContactInfo> => {
    console.log('fetchContactsApi...');
    try {
        const response = await apiClient.get('/contact', {
            params: {
                populate: {
                    faq: {
                        populate: ['info'],
                    },
                    phones: true,
                    workingHours: true,
                    daysOff: true,
                    social: true,
                },
            },
        });

        const contactItem = response.data.data;
        const transformedContactItem = {
            ...contactItem,
            daysOff: contactItem.daysOff.map((dayOff: { dayOff: string }) => dayOff.dayOff),
        };

        return transformedContactItem;
    } catch (error) {
        console.error('Error fetching contact items:', error);
        throw error;
    }
};

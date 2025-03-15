import { IMember } from 'types/member';
import { IPerformance } from 'types/performance';
import { IProject } from 'types/project';
import { ITheaterInfo } from 'types/theater';
import { TeamFilterCategory } from 'types/TeamFilterCategory';
import { IContactInfo } from 'types/contacts';

type GenericState<T> = {
    data: T;
    loading: boolean;
    error: string | null;
};

export interface TeamState extends GenericState<IMember[]> {
    selectedCategory: TeamFilterCategory;
}

export type PerformanceState = GenericState<IPerformance[]>;

export type ProjectsState = GenericState<IProject[]>;

export type TheaterState = GenericState<ITheaterInfo>;

export type ContactsState = GenericState<IContactInfo>;

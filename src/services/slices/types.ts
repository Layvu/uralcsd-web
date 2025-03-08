import { IMember } from 'types/member';
import { IPerformance } from 'types/performance';
import { IProject } from 'types/project';
import { TeamFilterCategory } from 'types/TeamFilterCategory';

type GenericState<T> = {
    data: T[];
    loading: boolean;
    error: string | null;
};

export interface TeamState extends GenericState<IMember> {
    selectedCategory: TeamFilterCategory;
}

export type PerformanceState = GenericState<IPerformance>;

export type ProjectsState = GenericState<IProject>;

import { IMember } from 'interfases/IMember';
import { Performance } from 'types/performance';
import { TeamFilterCategory } from 'types/TeamFilterCategory';

type GenericState<T> = {
    data: T[];
    loading: boolean;
    error: string | null;
};

export interface TeamState extends GenericState<IMember> {
    selectedCategory: TeamFilterCategory;
}

export type PerformanceState = GenericState<Performance>;

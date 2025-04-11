import { IMember } from 'types/member';
import { IPerformance } from 'types/performance';

export interface TeamCardFullProps {
    member: IMember;
    performancesWithRoles: { performance?: IPerformance; role: string }[];
}

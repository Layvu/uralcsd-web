import { IMember } from 'interfases/IMember';
import { Performance } from 'types/performance';

export interface TeamCardFullProps {
    member: IMember;
    performancesWithRoles: { performance?: Performance; role: string }[];
}

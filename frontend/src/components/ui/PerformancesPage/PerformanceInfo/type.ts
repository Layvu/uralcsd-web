import { IMember } from 'types/member';
import { IPerformance } from 'types/performance';


export interface PerformanceInfoUIProps{
    performance: IPerformance,
    actorsWithRoles: { actor?: IMember; role: string }[];
}
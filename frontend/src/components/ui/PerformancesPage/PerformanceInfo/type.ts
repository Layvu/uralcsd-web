import { IAfishaItem } from 'types/afishaItem';
import { IMember } from 'types/member';
import { IPerformance } from 'types/performance';


export interface PerformanceInfoUIProps{
    performance: IPerformance,
    currentAfishaItems: IAfishaItem[],
    actorsWithRoles: { actor?: IMember; role: string }[];
}
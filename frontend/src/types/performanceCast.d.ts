import { IPerformance } from './performance';
import { IMember } from "./member";

export interface IPerformanceCast{
    id: string;
    role: string;
    actor: IMember;
    performance: IPerformance;
}
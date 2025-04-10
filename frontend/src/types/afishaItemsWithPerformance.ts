import { IAfishaItem } from "./afishaItem";
import { IPerformance } from "./performance";

export interface IAfishaItemsWithPerformance extends Omit<IAfishaItem, 'performance'> {
    performance: IPerformance | null
}
import { IPerformance } from 'types/performance';

export interface PerformanceListUI {
    performances: IPerformance[];
    lastElementRef?: (node: HTMLElement | null) => void;
    hasMore: boolean;
}

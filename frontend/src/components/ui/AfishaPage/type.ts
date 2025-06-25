import { BaseAfishaProps } from 'types/BaseAfishaProps';

import { IAfishaItemsWithPerformance } from 'types/afishaItemsWithPerformance';

export interface AfishaProps extends BaseAfishaProps {
    groupedAfishaItemsWithPerformanceByDate: [string, IAfishaItemsWithPerformance[]][];
    lastElementRef?: (node: HTMLElement | null) => void;
    hasMore: boolean;
}

import { Performance } from 'types/performance';
import { BaseAfishaProps } from 'types/BaseAfishaProps';


export interface AfishaProps extends BaseAfishaProps {
    groupedPerformancesByDate: {
        [key: string]: Performance[];
    },
}
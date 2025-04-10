import { IAfishaItemsWithPerformance } from 'types/afishaItemsWithPerformance';
import { BaseAfishaProps } from 'types/BaseAfishaProps';


export interface AfishaProps extends BaseAfishaProps {
    groupedAfishaItemsWithPerformanceByDate: {
        [key: string]: IAfishaItemsWithPerformance[];
    },
}
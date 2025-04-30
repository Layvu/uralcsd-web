import { IMonth } from './month';

export interface BaseAfishaProps {
    months: IMonth[];
    activeMonthIndex: number;
    onMonthChange: (index: number) => void;
}

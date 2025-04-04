import { IMonth } from 'interfases/IMonth';

export interface BaseAfishaProps {
    months: IMonth[];
    activeMonthIndex: number;
    onMonthChange: (index: number) => void;
}

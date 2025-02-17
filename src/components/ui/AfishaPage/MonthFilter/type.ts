export interface MonthFilterProps {
  months: string[];
  activeMonthIndex: number;
  setActiveMonthIndex: (index: number) => void;
}
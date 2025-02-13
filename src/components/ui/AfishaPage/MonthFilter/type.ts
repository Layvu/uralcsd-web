export interface MonthFilterProps {
  months: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
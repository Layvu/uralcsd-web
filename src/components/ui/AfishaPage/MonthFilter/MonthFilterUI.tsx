import React from "react";
import { MonthFilterProps } from "./type";
import './Month-filter.scss';

export const MonthFilterUI: React.FC<MonthFilterProps> = React.memo(({ months, activeMonthIndex, onMonthChange }) => {
    return (
        <div className="afisha__month-filter month-filter"> 
            {months.map((month) => (
                <button
                    key={month.monthIndex}
                    className={`month-filter__button select-button ${
                        activeMonthIndex === month.monthIndex ? "month-filter__button--active select-button--active" : ""
                    }`}
                    onClick={() => onMonthChange(month.monthIndex)}
                >
                    {month.name}
                </button>
            ))}
        </div>
    );
});

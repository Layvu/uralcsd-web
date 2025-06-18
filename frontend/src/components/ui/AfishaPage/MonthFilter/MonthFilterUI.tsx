import React, { useRef } from "react";
import { MonthFilterProps } from "./type";
import './Month-filter.scss';

export const MonthFilterUI: React.FC<MonthFilterProps> = React.memo(({ months, activeMonthIndex, onMonthChange }) => {
    const buttonsRef = useRef<Record<number, HTMLButtonElement | null>>({} as Record<number, HTMLButtonElement | null>);
        
    const handleClick = (monthIndex: number) => {
        onMonthChange(monthIndex);

        const button = buttonsRef.current[monthIndex];
        button?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    };

    return (
        <div className="afisha__month-filter month-filter"> 
            {months.map((month) => (
                <button
                    key={month.monthIndex}
                    ref={(el) => buttonsRef.current[month.monthIndex] = el}
                    className={`month-filter__button select-button ${
                        activeMonthIndex === month.monthIndex ? "month-filter__button--active select-button--active" : ""
                    }`}
                    onClick={() => handleClick(month.monthIndex)}
                >
                    {month.name}
                </button>
            ))}
        </div>
    );
});

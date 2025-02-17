import React from "react";
import { MonthFilterProps } from "./type";
import './Month-filter.scss';


export const MonthFilterUI: React.FC<MonthFilterProps> = ({ months, activeMonthIndex, setActiveMonthIndex }) => {
    return (
        <div className="afisha__month-filter month-filter"> 
            {months.map((month, index) => (
                <button
                    key={index}
                    className={`month-filter__button select-button ${
                        activeMonthIndex === index ? "month-filter__button--active" : ""
                    }`}
                    onClick={() => setActiveMonthIndex(index)}
                >
                    {month}
                </button>
            ))}
        </div>
    );
};

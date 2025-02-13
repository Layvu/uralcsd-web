import React from "react";
import { MonthFilterProps } from "./type";
import './Month-filter.scss';


export const MonthFilterUI: React.FC<MonthFilterProps> = ({ months, activeIndex, setActiveIndex }) => {
    return (
        <div className="afisha__month-filter month-filter"> 
            {months.map((month, index) => (
                <button
                    key={index}
                    className={`month-filter__button select-button ${
                        activeIndex === index ? "month-filter__button--active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                >
                    {month}
                </button>
            ))}
        </div>
    );
};

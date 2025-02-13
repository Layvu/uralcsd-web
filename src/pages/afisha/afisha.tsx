import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { MainTitle } from '@components/Shared/MainTitle';
import React, { useState } from 'react';

import './afisha.scss';

export const Afisha: React.FC = () => {
    const [activeMonthIndex, setActiveMonthIndex] = useState(0);
    const months = ["Февраль", "Март", "Апрель"]; 

    return (
        <section className="wrap afisha">
            <MainTitle className='afisha__main-title'>Афиша</MainTitle>
            <MonthFilter
                months={months} 
                activeIndex={activeMonthIndex} 
                setActiveIndex={setActiveMonthIndex} 
            />

            <ul className="afisha__schedule">
                <li className="afisha__schedule-item">
                    <DaySchedule date="5 февраля" />
                </li>
                <li className="afisha__schedule-item">
                    <DaySchedule date="6 февраля" />
                </li>
            </ul>
        </section>
    );
};

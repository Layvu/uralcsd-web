import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { MainTitle } from '@components/Shared/MainTitle';
import { AfishaProps } from './type';
import React from 'react';

import './afisha.scss';

export const AfishaUI: React.FC<AfishaProps> = ({months, activeMonthIndex, onMonthChange}) => {
    return (
        <section className="wrap afisha">
            <MainTitle className='afisha__main-title'>Афиша</MainTitle>
            <MonthFilter
                months={months} 
                activeMonthIndex={activeMonthIndex} 
                onMonthChange={onMonthChange} 
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

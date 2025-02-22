import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { MainTitle } from '@components/Shared/MainTitle';
import { AfishaProps } from './type';
import React from 'react';

import './afisha.scss';
import { mockPerformances } from 'mockData';
import { groupPerformancesByDate } from 'utils/groupPerformancesByDate';

const groupedPerformances = groupPerformancesByDate(mockPerformances);

export const AfishaUI: React.FC<AfishaProps> = ({ months, activeMonthIndex, setActiveMonthIndex }) => {
    return (
        <section className="wrap afisha">
            <MainTitle className="afisha__main-title">Афиша</MainTitle>
            <MonthFilter
                months={months}
                activeMonthIndex={activeMonthIndex}
                setActiveMonthIndex={setActiveMonthIndex}
            />

            <ul className="afisha__schedule">
                {Object.entries(groupedPerformances).map(([date, performances]) => (
                    <li key={date} className="afisha__schedule-item">
                        <DaySchedule performances={performances} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

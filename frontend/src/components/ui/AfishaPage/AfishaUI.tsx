import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { MainTitle } from '@components/Shared/MainTitle';
import { AfishaProps } from './type';
import React from 'react';

import './afisha.scss';

export const AfishaUI: React.FC<AfishaProps> = React.memo(
    ({ months, activeMonthIndex, onMonthChange, groupedPerformancesByDate }) => {
        return (
            <section className="wrap afisha">
                <MainTitle className="afisha__main-title">Афиша</MainTitle>
                <MonthFilter months={months} activeMonthIndex={activeMonthIndex} onMonthChange={onMonthChange} />

                <ul className="afisha__schedule">
                    {Object.entries(groupedPerformancesByDate).map(([date, performances]) => (
                        <li key={date} className="afisha__schedule-item">
                            <DaySchedule performances={performances} />
                        </li>
                    ))}

                    {/* TODO
                Спектаклей нет */}
                </ul>
            </section>
        );
    },
);

import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { MainTitle } from '@components/Shared/MainTitle';
import { AfishaProps } from './type';
import React from 'react';

import './afisha.scss';

export const AfishaUI: React.FC<AfishaProps> = React.memo(
    ({ months, activeMonthIndex, onMonthChange, groupedAfishaItemsWithPerformanceByDate }) => {
        return (
            <section className="wrap afisha">
                <div className="afisha__header">
                    <MainTitle className="afisha__main-title title-h3--underline">Афиша</MainTitle>
                    <MonthFilter months={months} activeMonthIndex={activeMonthIndex} onMonthChange={onMonthChange} />
                </div>
                
                <ul className="afisha__schedule">
                    {Object.entries(groupedAfishaItemsWithPerformanceByDate).map(([date, afishaItems]) => (
                        <li key={date} className="afisha__schedule-item">
                            <DaySchedule afishaItemsWithPerformance={afishaItems} />
                        </li>
                    ))}

                    {/* TODO
                Спектаклей нет */}
                </ul>
            </section>
        );
    },
);

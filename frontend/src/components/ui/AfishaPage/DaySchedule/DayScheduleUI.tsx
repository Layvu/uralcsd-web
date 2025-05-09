import React from 'react';
import { DayScheduleProps } from './type';
import { SpectacleCard } from '@components/AfishaPage/SpectacleCard';

import './day-schedule.scss';
import { formatToMonth, formatToWeekday } from 'utils/timeFormat';


export const DayScheduleUI: React.FC<DayScheduleProps> = ({ afishaItemsWithPerformance }) => {
    const stringDate = afishaItemsWithPerformance[0].date;
    const date = new Date(stringDate);
    const day = date.getDate();
    const month = formatToMonth(date);

    return (
        <article className="day-schedule">
            <h2 className="day-schedule__day-title">
                {day} {month} | {formatToWeekday(stringDate)}
            </h2>
            <ul className="day-schedule__events">
                {afishaItemsWithPerformance.map((afishaItem) => {
                    return (
                        <li key={afishaItem.id} className="day-schedule__events-item">
                            <SpectacleCard {...afishaItem} isLatestPerformance={false}/>
                        </li>
                    );})}
            </ul>
        </article>
    );
};

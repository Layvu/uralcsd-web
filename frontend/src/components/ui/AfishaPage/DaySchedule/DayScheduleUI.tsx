import React from 'react';
import { DayScheduleProps } from './type';
import { SpectacleCard } from '@components/Shared/SpectacleCard';

import './day-schedule.scss';


export const DayScheduleUI: React.FC<DayScheduleProps> = ({ afishaItemsWithPerformance }) => {
    const date = new Date(afishaItemsWithPerformance[0].date);
    const day = date.getDate();
    const month = date.toLocaleString('ru', { month: 'long', day: 'numeric' }).split(' ')[1];

    return (
        <article className="day-schedule">
            <h2 className="day-schedule__day-title">
                {day} {month}
            </h2>
            <ul className="day-schedule__events">
                {afishaItemsWithPerformance.map((afishaItem) => {
                    return (
                        <li key={afishaItem.id} className="day-schedule__events-item">
                            <SpectacleCard {...afishaItem} />
                        </li>
                    );})}
            </ul>
        </article>
    );
};

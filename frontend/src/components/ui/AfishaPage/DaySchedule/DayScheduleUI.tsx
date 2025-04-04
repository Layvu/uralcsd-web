import React from 'react';
import { DayScheduleProps } from './type';
import { SpectacleCard } from '@components/Shared/SpectacleCard';

import './day-schedule.scss';

export const DayScheduleUI: React.FC<DayScheduleProps> = ({ performances }) => {
    const date = new Date(performances[0].date);
    const day = date.getDate();
    const month = date.toLocaleString('ru', { month: 'long', day: 'numeric' }).split(' ')[1];

    return (
        <article className="day-schedule">
            <h2 className="day-schedule__day-title">
                {day} {month}
            </h2>
            <ul className="day-schedule__events">
                {performances.map((performance) => (
                    <li key={performance.slug} className="day-schedule__events-item">
                        <SpectacleCard {...performance} />
                    </li>
                ))}
            </ul>
        </article>
    );
};

import React from 'react';
import { DayScheduleProps } from './type';
import { SpectacleCard } from '@components/Shared/SpectacleCard';

import './day-schedule.scss';

export const DayScheduleUI: React.FC<DayScheduleProps> = ({ performances }) => {
    return (
        <article className="day-schedule">
            <h2 className="day-schedule__day-title">{performances[0].date}</h2>
            <ul className="day-schedule__events">
                {performances.map((performance) => (
                    <li key={performance.name} className="day-schedule__events-item">
                        <SpectacleCard {...performance} />
                    </li>
                ))}
            </ul>
        </article>
    );
};

import React from 'react';
import { DayScheduleProps } from './type';
import { SpectacleCard } from '@components/Shared/SpectacleCard';

import './day-schedule.scss';


export const DayScheduleUI: React.FC<DayScheduleProps> = ({date}) => {
    return (
        <article className="day-schedule">
            <h2 className="day-schedule__day-title">{date}</h2>
            <ul className="day-schedule__events">
                <li className="day-schedule__events-item">
                    <SpectacleCard />
                </li>
                <li className="day-schedule__events-item">
                    <SpectacleCard />
                </li>
            </ul>
        </article>
    );
};

import React from 'react';
import { TeamListProps } from './type';
import { TeamCardBrief } from '@components/TeamPage/TeamCardBrief';

import './team-list.scss';


export const TeamListUI: React.FC<TeamListProps> = React.memo(() => {
    return (
        <ul className='team-list'>
            <li className="team-list__list-item">
                <TeamCardBrief></TeamCardBrief>  
            </li>
            <li className="team-list__list-item">
                <TeamCardBrief></TeamCardBrief>
            </li>
            <li className="team-list__list-item">
                <TeamCardBrief></TeamCardBrief>
            </li>
            <li className="team-list__list-item">
                <TeamCardBrief></TeamCardBrief>
            </li>
            <li className="team-list__list-item">
                <TeamCardBrief></TeamCardBrief>
            </li>
        </ul>       
    );
});

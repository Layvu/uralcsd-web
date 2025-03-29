import React from 'react';
import { TeamCardBriefProps } from './type';
import './team-card-brief.scss';
import { Link } from 'react-router-dom';

export const TeamCardBriefUI: React.FC<TeamCardBriefProps> = React.memo(({ member }) => {
    const { name, slug } = member;
    return (
        <Link to={`/team/${slug}`}>
            <div className='team-card-brief'>{name}</div>
        </Link>
    );
});

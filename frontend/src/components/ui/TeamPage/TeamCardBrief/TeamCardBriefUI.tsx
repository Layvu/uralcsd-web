import React from 'react';
import { TeamCardBriefProps } from './type';
import './team-card-brief.scss';
import { Link } from 'react-router-dom';

export const TeamCardBriefUI: React.FC<TeamCardBriefProps> = React.memo(({ member }) => {
    const { name, surname, slug, position, mainPhoto } = member;
    return (
        <Link to={`/team/${slug}`}>
            <div className='team-card-brief'>
                <img className='team-card-brief__photo' src={mainPhoto?.url} alt={name} />
                <div>
                    <div className='team-card-brief__name'>{name} {surname}</div>
                    <div className='team-card-brief__position'>{position}</div>
                </div>
            </div>
        </Link>
    );
});

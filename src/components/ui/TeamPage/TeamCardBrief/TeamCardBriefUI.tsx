import React from 'react';
import { TeamCardBriefProps } from './type';
import './team-card-brief.scss';

export const TeamCardBriefUI: React.FC<TeamCardBriefProps> = React.memo(() => {
    return (
        <>
            <div className='team-card-brief'>TeamCardBriefUI</div>
        </>
    );
});

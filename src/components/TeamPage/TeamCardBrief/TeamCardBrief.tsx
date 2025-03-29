import { TeamCardBriefUI } from '@components/ui/TeamPage/TeamCardBrief';
import { TeamCardBriefProps } from '@components/ui/TeamPage/TeamCardBrief/type';
import React from 'react';


export const TeamCardBrief: React.FC<TeamCardBriefProps> = ({member}) => {
    return (
        <TeamCardBriefUI member={member}/>
    );
};

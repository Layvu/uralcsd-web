import { TeamListUI } from '@components/ui/TeamPage/TeamList';
import { TeamListProps } from '@components/ui/TeamPage/TeamList/type';
import React from 'react';


export const TeamList: React.FC<TeamListProps> = ({ category }) => {
    return (
        <TeamListUI category={category}></TeamListUI>
    );
};

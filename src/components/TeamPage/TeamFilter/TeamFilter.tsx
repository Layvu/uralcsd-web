import { TeamFilterUI } from '@components/ui/TeamPage/TeamFilter';
import { TeamFilterProps } from '@components/ui/TeamPage/TeamFilter/type';
import React from 'react';


export const TeamFilter: React.FC<TeamFilterProps> = React.memo((props) => {
    return (
        <TeamFilterUI {...props}/>
    );
});

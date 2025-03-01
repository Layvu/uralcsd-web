import React from 'react';
import { useSelector } from 'react-redux';

import { TeamListUI } from '@components/ui/TeamPage/TeamList';

import { selectFilteredTeam } from '@services/selectors/teamSelectors';

export const TeamList: React.FC = () => {
    const filteredMembers = useSelector(selectFilteredTeam);

    return <TeamListUI filteredMembers={filteredMembers}></TeamListUI>;
};

import React from 'react';
import { useSelector } from 'react-redux';

import { TeamListUI } from '@components/ui/TeamPage/TeamList';

import { selectFilteredTeam, selectTeamError, selectTeamLoading } from '@services/selectors/teamSelectors';

export const TeamList: React.FC = () => {
    const filteredMembers = useSelector(selectFilteredTeam);
    const loading = useSelector(selectTeamLoading);
    const error = useSelector(selectTeamError);

    if (loading) {
        return <div className="loading">Загрузка информации команде...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }
      
    return <TeamListUI filteredMembers={filteredMembers}></TeamListUI>;
};

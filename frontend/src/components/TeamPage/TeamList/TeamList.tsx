import React from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { selectTeamError, selectTeamLoading } from '@services/selectors/teamSelectors';
import { TeamListUI } from '@components/ui/TeamPage/TeamList';
import { IMember } from 'types/member';
import { CONTENT_LISTS } from 'consts';

export const TeamList: React.FC = () => {
    const loading = useSelector(selectTeamLoading);
    const error = useSelector(selectTeamError);
    const { lastElementRef, visibleItems, hasMore } = useInfiniteScroll(CONTENT_LISTS.TEAM);

    if (loading && visibleItems.length === 0) {
        return <div className="loading">Загрузка информации о команде...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    return <TeamListUI filteredMembers={visibleItems as IMember[]} lastElementRef={lastElementRef} hasMore={hasMore} />;
};

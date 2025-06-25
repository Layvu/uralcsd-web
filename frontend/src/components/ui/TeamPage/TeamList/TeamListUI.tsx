import React from 'react';
import { TeamListProps } from './type';
import { TeamCardBrief } from '@components/TeamPage/TeamCardBrief';
import './team-list.scss';

export const TeamListUI: React.FC<TeamListProps> = React.memo(({ filteredMembers, lastElementRef, hasMore }) => {
    if (filteredMembers.length === 0) {
        return <div className="not-found">Нет участников в этой категории.</div>;
    }

    return (
        <>
            <ul className="team-list">
                {filteredMembers.map((member, index) => (
                    <li
                        key={member.id}
                        className="team-list__list-item"
                        ref={index === filteredMembers.length - 1 ? lastElementRef : null}
                    >
                        <TeamCardBrief member={member} />
                    </li>
                ))}
            </ul>
            {hasMore && <div className="loading">Загрузка...</div>}
        </>
    );
});

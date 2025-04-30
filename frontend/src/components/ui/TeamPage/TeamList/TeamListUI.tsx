import React from 'react';
import { TeamListProps } from './type';
import { TeamCardBrief } from '@components/TeamPage/TeamCardBrief';

import './team-list.scss';

export const TeamListUI: React.FC<TeamListProps> = React.memo(({ filteredMembers }) => {
    if (filteredMembers.length === 0) {
        return <div className="team-list__empty">Нет участников в этой категории.</div>;
    }

    return (
        <ul className="team-list">
            {filteredMembers.map((member) => (
                <li key={member.id} className="team-list__list-item">
                    <TeamCardBrief member={member} />
                </li>
            ))}
        </ul>
    );
});

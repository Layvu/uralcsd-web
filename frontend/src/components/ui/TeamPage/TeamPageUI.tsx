import React from 'react';
import './team-page.scss';

import { TeamFilter } from '@components/TeamPage/TeamFilter';
import { TeamList } from '@components/TeamPage/TeamList';

export const TeamPageUI: React.FC = React.memo(() => {
    return (
        <section className="team-page wrap">
            <div className="team-page__header">
                <h1 className="team-page__title">Команда</h1>
                <TeamFilter />
            </div>

            <TeamList />
        </section>
    );
});

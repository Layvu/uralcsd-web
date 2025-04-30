import React from 'react';
import './team-page.scss';

import { MainTitle } from '../Shared/MainTitle';
import { TeamFilter } from '@components/TeamPage/TeamFilter';
import { TeamList } from '@components/TeamPage/TeamList';

export const TeamPageUI: React.FC = React.memo(() => {
    return (
        <section className="team-page wrap">
            <div className="team-page__header">
                <MainTitle className="team-page__title title-h3--underline">Команда</MainTitle>
                <TeamFilter />
            </div>

            <TeamList />
        </section>
    );
});

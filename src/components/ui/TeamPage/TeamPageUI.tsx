import React from 'react';
import './team-page.scss';

import { MainTitle } from '../Shared/MainTitle';
import { TeamFilter } from '@components/TeamPage/TeamFilter';
import { TeamList } from '@components/TeamPage/TeamList';

export const TeamPageUI: React.FC = React.memo(() => {
    return (
        <section className="team-page wrap">
            <MainTitle className="team-page__title">Команда</MainTitle>
            <TeamFilter />
            <TeamList />
        </section>
    );
});

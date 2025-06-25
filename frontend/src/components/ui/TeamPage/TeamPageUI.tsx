import React from 'react';
import './team-page.scss';
import { TeamFilter } from '@components/TeamPage/TeamFilter';
import { TeamList } from '@components/TeamPage/TeamList';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import { Background } from '@components/Shared/Background';

export const TeamPageUI: React.FC = React.memo(() => {
    return (
        <div className="app-wrapper">
            <SEO
                title="Команда театра - Центр современной драматургии"
                description="Познакомьтесь с актёрами труппы, постановщиками и руководством театра ЦСД"
                keywords="актёры, постановщики, руководство, команда, театр, ЦСД, драма"
                path={ROUTES.TEAM}
            />
            <Background />
            <section className="team-page wrap">
                <div className="team-page__header">
                    <h1 className="team-page__title">Команда</h1>
                    <TeamFilter />
                </div>

                <TeamList />
            </section>
        </div>
    );
});

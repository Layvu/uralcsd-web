import React from 'react';
import './team-page.scss';
import { TeamFilter } from '@components/TeamPage/TeamFilter';
import { TeamList } from '@components/TeamPage/TeamList';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';

export const TeamPageUI: React.FC = React.memo(() => {
    return (
        <>
            <SEO
                title="Команда театра - Центр современной драматургии"
                description="Познакомьтесь с актёрами труппы, постановщиками и руководством театра ЦСД"
                keywords="актёры, постановщики, руководство, команда, театр, ЦСД, драма"
                path={ROUTES.TEAM}
            />

            <section className="team-page wrap">
                <div className="team-page__header">
                    <h1 className="team-page__title title-h3--underline">Команда</h1>
                    <TeamFilter />
                </div>

                <TeamList />
            </section>
        </>
    );
});

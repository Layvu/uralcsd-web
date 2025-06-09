import { PerformancesList } from '@components/PerformancesPage/PerformancesList';
import React from 'react';
import { PerformancesListProps } from './type';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import './performances.scss';

export const PerformancesUI: React.FC<PerformancesListProps> = () => {
    return (
        <section className="performances wrap">
            <SEO
                title="Спектакли театра - Центр современной драматургии"
                description="Ознакомьтесь с репертуаром театра ЦСД: наши спектакли и постановки"
                keywords="спектакли, театр, Центр современной драматургии, ЦСД, репертуар, постановки"
                path={ROUTES.PERFORMANCES}
            />

            <h1 className="performances__title title-h3--underline">Спектакли</h1>
            <PerformancesList />
        </section>
    );
};

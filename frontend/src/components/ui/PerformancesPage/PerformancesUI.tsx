import { PerformancesList } from '@components/PerformancesPage/PerformancesList';
import React from 'react';
import { PerformancesListProps } from './type';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import './performances.scss';
import { Background } from '@components/Shared/Background';

export const PerformancesUI: React.FC<PerformancesListProps> = () => {
    return (
        <div className="app-wrapper">
            <SEO
                title="Спектакли театра - Центр современной драматургии"
                description="Ознакомьтесь с репертуаром театра ЦСД: наши спектакли и постановки"
                keywords="спектакли, театр, Центр современной драматургии, ЦСД, репертуар, постановки"
                path={ROUTES.PERFORMANCES}
            />
            <Background />
            <section className="performances wrap">
                <h1 className="performances__title">Спектакли</h1>
                <PerformancesList />
            </section>
        </div>
    );
};

import { LatestPerformances } from '@components/HomePage/LatestPerformances';
import { MainBanner } from '@components/HomePage/MainBanner';
import React from 'react';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import { Background } from '@components/Shared/Background';

export const HomePage: React.FC = () => {
    return (
        <div className="app-wrapper">
            <SEO
                title="Главная страница - Центр современной драматургии"
                description="ЦСД — это площадка для экспериментов, в которой нет правил и цензуры. Это театр, который создают молодые уральские режиссеры, драматурги, актеры, музыканты"
                keywords="театр, ЦСД, Центр современной драматургии, спектакли, драма, постановки, репертуар"
                path={ROUTES.HOME}
            />

            <Background />
            
            <MainBanner />
            <LatestPerformances />
        </div>
    );
};

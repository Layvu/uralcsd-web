import { LatestPerformances } from '@components/HomePage/LatestPerformances';
import { MainBanner } from '@components/HomePage/MainBanner';
import React from 'react';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';

export const HomePage: React.FC = () => {
    return (
        <>
            <SEO
                title="Главная страница - Центр современной драматургии"
                description="Сайт ЦСД представляет репертуар спектаклей, проекты, труппу, историю театра, контакты для связи и часто задаваемые вопросы"
                keywords="театр, ЦСД, Центр современной драматургии, спектакли, драма, постановки, репертуар"
                path={ROUTES.HOME}
            />

            <MainBanner />
            <LatestPerformances />
        </>
    );
};

import { LatestPerformances } from '@components/HomePage/LatestPerformances';
import { MainBanner } from '@components/HomePage/MainBanner';
import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <>           
            <MainBanner />
            <LatestPerformances />
        </>
    );
};

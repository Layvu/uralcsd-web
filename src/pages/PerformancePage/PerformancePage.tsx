import React from 'react';
import { useParams } from 'react-router-dom';

import { Performance } from 'types/performance';
//import { PerformanceBanner } from '@components/ui/Shared/PerformanceBanner';
//import { PerformanceInfo } from '@components/ui/Shared/PerformanceInfo';

import { mockPerformances } from 'mockData';

export const PerformancePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const performance = mockPerformances.find((performance) => performance.slug === slug);

    if (!performance) {
        return <div>Событие не найдено</div>;
    }

    return (
        <>
            {/* <PerformanceBanner />
            <PerformanceInfo {...performance} /> */}
        </>
    );
};

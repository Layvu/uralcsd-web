import React from 'react';
import { useParams } from 'react-router-dom';

import { mockPerformances } from 'mockData';
import { PerformanceInfoUI } from '@components/ui/PerformancesPage/PerformanceInfo';

export const PerformancePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const performance = mockPerformances.find((performance) => performance.slug === slug);

    if (!performance) {
        return <div>Событие не найдено</div>;
    }

    return <PerformanceInfoUI performance={performance} />;
};

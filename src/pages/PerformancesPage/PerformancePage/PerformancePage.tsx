import React from 'react';
import { useParams } from 'react-router-dom';

import { PerformanceInfoUI } from '@components/ui/PerformancesPage/PerformanceInfo';

import { useSelector } from 'react-redux';
import { selectPerformanceBySlug } from 'services/selectors/performancesSelectors';

export const PerformancePage: React.FC = () => {
    const { slug: slugParam } = useParams<{ slug: string | undefined }>();
    const slug = typeof slugParam === 'string' ? slugParam : '';
    const performance = useSelector((state) => selectPerformanceBySlug(state, slug));

    if (!performance) {
        return <div>Событие не найдено</div>;
    }

    return <PerformanceInfoUI performance={performance} />;
};

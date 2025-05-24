import React from 'react';
import { useSelector } from 'react-redux';

import { selectPerformances, selectPerformancesError, selectPerformancesLoading } from '@services/selectors/performancesSelectors';

import { PerformancesListUI } from '@components/ui/PerformancesPage/PerformancesList';

export const PerformancesList: React.FC = () => {
    const performances = useSelector(selectPerformances);
    const loading = useSelector(selectPerformancesLoading);
    const error = useSelector(selectPerformancesError);

    if (loading) {
        return <div className="loading">Загрузка информации о спектаклях...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    return <PerformancesListUI performances={performances} />;
};

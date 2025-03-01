import React from 'react';
import { useSelector } from 'react-redux';

import { selectPerformances } from '@services/selectors/performancesSelectors';

import { PerformancesListUI } from '@components/ui/PerformancesPage/PerformancesList';

export const PerformancesList: React.FC = () => {
    const performances = useSelector(selectPerformances);

    return <PerformancesListUI performances={performances} />;
};

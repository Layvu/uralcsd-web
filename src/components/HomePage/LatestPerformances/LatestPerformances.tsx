import React from 'react';
import { LatestPerformancesUI } from '@components/ui/HomePage/LatestPerformances';

import { useSelector } from 'react-redux';
import { selectLatestPerformances } from 'services/selectors/performancesSelectors';

export const LatestPerformances: React.FC = () => {
    const latestPerformances = useSelector(selectLatestPerformances);

    return <LatestPerformancesUI latestPerformances={latestPerformances} />;
};

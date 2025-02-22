import React from 'react';
import { LatestPerformancesUI } from '@components/ui/HomePage/LatestPerformances';

import { mockPerformances } from 'mockData';

export const LatestPerformances: React.FC = () => {
    const latestPerformances = mockPerformances.slice(0, 3);

    return <LatestPerformancesUI latestPerformances={latestPerformances} />;
};

import { PerformancesListUI } from '@components/ui/PerformancesPage/PerformancesList';
import React from 'react';

import { mockPerformances } from 'mockData';

export const PerformancesList: React.FC = () => {
    return (
        <>
            <PerformancesListUI performances={mockPerformances}></PerformancesListUI>
        </>
    );
};

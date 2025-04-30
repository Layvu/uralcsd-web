import { PerformanceCardUI } from '@components/ui/PerformancesPage/PerformanceCard';
import { PerformanceCardProps } from '@components/ui/PerformancesPage/PerformanceCard/type';
import React from 'react';


export const PerformanceCard: React.FC<PerformanceCardProps> = (performance) => {
    return (
        <>
            <PerformanceCardUI {...performance}/>
        </>
    );
};

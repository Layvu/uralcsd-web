import { PerformanceCardUI } from '@components/ui/PerformancesPage/PerformanceCard';
import { PerformanceCardProps } from '@components/ui/PerformancesPage/PerformanceCard/type';
import { selectUniquePerformanceIds } from '@services/selectors/afishaItemsSelectors';
import React from 'react';
import { useSelector } from 'react-redux';


export const PerformanceCard: React.FC<PerformanceCardProps> = (performance) => {
    const uniquePerformanceIds = useSelector(selectUniquePerformanceIds);
    const isInRepertoire = uniquePerformanceIds.has(performance.id.toString());

    return (
        <PerformanceCardUI {...performance} isInRepertoire={isInRepertoire} />
    );
};

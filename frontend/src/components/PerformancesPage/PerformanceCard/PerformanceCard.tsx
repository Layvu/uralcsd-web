import { PerformanceCardUI } from '@components/ui/PerformancesPage/PerformanceCard';
import { PerformanceCardProps } from '@components/ui/PerformancesPage/PerformanceCard/type';
import { selectAfishaItemsByPerformanceId } from '@services/selectors/afishaItemsSelectors';
import React from 'react';
import { useSelector } from 'react-redux';


export const PerformanceCard: React.FC<PerformanceCardProps> = (performance) => {
    const selectAfishaItems = React.useMemo(
        () => (performance?.id ? selectAfishaItemsByPerformanceId(performance.id) : () => []),
        [performance?.id]
    );  
    const currentAfishaItems = useSelector(selectAfishaItems);
    const isInRepertoire = currentAfishaItems.length > 0;
    return (
        <PerformanceCardUI {...performance} isInRepertoire={isInRepertoire} />
    );
};

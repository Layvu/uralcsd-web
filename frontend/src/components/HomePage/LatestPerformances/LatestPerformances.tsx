import React from 'react';
import { LatestPerformancesUI } from '@components/ui/HomePage/LatestPerformances';

import { useSelector } from 'react-redux';
import { selectLatestAfishaItems } from '@services/selectors/afishaItemsSelectors';
import { RootState } from '@services/store';
import { selectPerformancesByIds } from '@services/selectors/performancesSelectors';

export const LatestPerformances: React.FC = () => {
    
    // Извлекаем близжайшие AfishaItems и засовываем в поле performance соотв спектакль 
    const latestAfishaItems = useSelector(selectLatestAfishaItems);
    const performancesIds = latestAfishaItems.map((afishaItem) => afishaItem.performance.id);
    const latestPerformances = useSelector((state: RootState) => selectPerformancesByIds(state, performancesIds));
    const latestAfishaItemsWithPerformances = latestAfishaItems.map((afishaItem)=>{
        const currentPerformance = latestPerformances.find((p) => p.id == afishaItem?.performance?.id);
        return {...afishaItem, performance:currentPerformance ? currentPerformance : null};
    });

    return <LatestPerformancesUI latestPerformances={latestAfishaItemsWithPerformances} />;
};

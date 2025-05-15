import React from 'react';
import { LatestPerformancesUI } from '@components/ui/HomePage/LatestPerformances';

import { useSelector } from 'react-redux';
import { selectLatestAfishaItems } from '@services/selectors/afishaItemsSelectors';
import { getAfishaItemsWithPerformances } from 'utils/getAfishaItemsWithPerformances';

export const LatestPerformances: React.FC = () => {
    
    // Извлекаем близжайшие AfishaItems и засовываем в поле performance соотв спектакль 
    const latestAfishaItems = useSelector(selectLatestAfishaItems);
    const latestAfishaItemsWithPerformances = getAfishaItemsWithPerformances(latestAfishaItems);

    return <LatestPerformancesUI latestPerformances={latestAfishaItemsWithPerformances} />;
};

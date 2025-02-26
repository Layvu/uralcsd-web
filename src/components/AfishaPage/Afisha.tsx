import React, { useCallback, useMemo, useState } from 'react';
import { AfishaUI } from '@components/ui/AfishaPage';
import { getNextThreeMonths } from 'utils/utils';
import { groupPerformancesByDate } from 'utils/groupPerformancesByDate';

import { mockPerformances } from 'mockData';

export const Afisha: React.FC = () => {
    const months = useMemo(() => getNextThreeMonths(), []);
    const [activeMonthIndex, setActiveMonthIndex] = useState(months[0].monthIndex);

    const groupedPerformances = useMemo(() => {
        const currentDate = new Date();
        const filteredPerformances = mockPerformances.filter((performance) => {
            const performanceDate = new Date(performance.date);
            return (
                performanceDate.getMonth() === activeMonthIndex && // Фильтр по месяцу
                performanceDate >= currentDate // Фильтр по дате (только будущие спектакли)
            );
        });
        return groupPerformancesByDate(filteredPerformances); 
    }, [activeMonthIndex]); 


    const handleMonthChange = useCallback((index: number) => {
        setActiveMonthIndex(index);
    }, []);

    return (
        <AfishaUI
            months={months}
            activeMonthIndex={activeMonthIndex}
            onMonthChange={handleMonthChange}
            groupedPerformancesByDate={groupedPerformances}
        />
    );
};

import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { AfishaUI } from '@components/ui/AfishaPage';

import { getNextThreeMonths } from 'utils/getNextThreeMonths';

import { makeSelectFilteredPerformances } from 'services/selectors/performancesSelectors';
import { RootState } from '@services/store';

export const Afisha: React.FC = () => {
    const currentDate = useMemo(() => new Date(), []);
    const [activeMonthIndex, setActiveMonthIndex] = useState(currentDate.getMonth());

    const selectFilteredPerformances = useMemo(() => makeSelectFilteredPerformances(), []);
    const groupedPerformances = useSelector((state: RootState) =>
        selectFilteredPerformances(state, activeMonthIndex, currentDate),
    );

    const handleMonthChange = useCallback((monthIndex: number) => {
        setActiveMonthIndex(monthIndex);
    }, []);

    const months = useMemo(() => getNextThreeMonths(), []);

    return (
        <AfishaUI
            months={months}
            activeMonthIndex={activeMonthIndex}
            onMonthChange={handleMonthChange}
            groupedPerformancesByDate={groupedPerformances}
        />
    );
};

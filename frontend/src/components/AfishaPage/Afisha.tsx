import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { AfishaUI } from '@components/ui/AfishaPage';

import { getNextThreeMonths } from 'utils/getNextThreeMonths';

import { makeSelectFilteredAfishaItems } from '@services/selectors/afishaItemsSelectors';
import { RootState } from '@services/store';

export const Afisha: React.FC = () => {
    const currentDate = useMemo(() => new Date(), []);
    const [activeMonthIndex, setActiveMonthIndex] = useState(currentDate.getMonth());

    const selectFilteredAfishaItems = useMemo(() => makeSelectFilteredAfishaItems(), []);
    const groupedAfishaItems = useSelector((state: RootState) =>
        selectFilteredAfishaItems(state, activeMonthIndex),
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
            groupedAfishaItemsWithPerformanceByDate={groupedAfishaItems}
        />
    );
};

import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AfishaUI } from '@components/ui/AfishaPage';

import { getNextThreeMonths } from 'utils/getNextThreeMonths';

import { makeSelectFilteredAfishaItems, selectAfishaActiveMonth } from '@services/selectors/afishaItemsSelectors';
import { AppDispatch, RootState } from '@services/store';
import { setActiveMonth } from '@services/slices/afishaItemsSlice';

export const Afisha: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const months = useMemo(() => getNextThreeMonths(), []);
    const activeMonthIndex = useSelector(selectAfishaActiveMonth);

    const handleMonthChange = useCallback(
        (monthIndex: number) => {
            dispatch(setActiveMonth(monthIndex));
        },
        [dispatch],
    );

    const selectFilteredAfishaItems = useMemo(() => makeSelectFilteredAfishaItems(), []);
    const groupedAfishaItems = useSelector((state: RootState) => selectFilteredAfishaItems(state, activeMonthIndex));

    return (
        <AfishaUI
            months={months}
            activeMonthIndex={activeMonthIndex}
            onMonthChange={handleMonthChange}
            groupedAfishaItemsWithPerformanceByDate={groupedAfishaItems}
        />
    );
};

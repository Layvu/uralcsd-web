import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AfishaUI } from '@components/ui/AfishaPage';

import { getNextThreeMonths } from 'utils/getNextThreeMonths';

import { makeSelectFilteredAfishaItems, selectAfishaActiveMonth, selectAfishaError, selectAfishaLoading } from '@services/selectors/afishaItemsSelectors';
import { AppDispatch, RootState } from '@services/store';
import { setActiveMonth } from '@services/slices/afishaItemsSlice';

export const AfishaPage: React.FC = () => {
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

    const loading = useSelector(selectAfishaLoading);
    const error = useSelector(selectAfishaError);

    if (loading) {
        return <div className="loading">Загрузка информации афиши...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }
    return (
        <AfishaUI
            months={months}
            activeMonthIndex={activeMonthIndex}
            onMonthChange={handleMonthChange}
            groupedAfishaItemsWithPerformanceByDate={groupedAfishaItems}
        />
    );
};

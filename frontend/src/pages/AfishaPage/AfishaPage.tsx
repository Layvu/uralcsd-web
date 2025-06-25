import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { AfishaUI } from '@components/ui/AfishaPage';
import { getNextThreeMonths } from 'utils/getNextThreeMonths';
import {
    selectAfishaActiveMonth,
    selectAfishaError,
    selectAfishaLoading,
} from '@services/selectors/afishaItemsSelectors';
import { AppDispatch } from '@services/store';
import { setActiveMonth } from '@services/slices/afishaItemsSlice';
import { IAfishaItemsWithPerformance } from 'types/afishaItemsWithPerformance';
import { CONTENT_LISTS } from 'consts';

export const AfishaPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const months = useMemo(() => getNextThreeMonths(), []);
    const activeMonthIndex = useSelector(selectAfishaActiveMonth);
    const { lastElementRef, visibleItems, hasMore } = useInfiniteScroll(CONTENT_LISTS.AFISHA_ITEMS);

    const handleMonthChange = useCallback(
        (monthIndex: number) => {
            dispatch(setActiveMonth(monthIndex));
        },
        [dispatch],
    );

    const loading = useSelector(selectAfishaLoading);
    const error = useSelector(selectAfishaError);

    if (loading && visibleItems.length === 0) {
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
            groupedAfishaItemsWithPerformanceByDate={visibleItems as [string, IAfishaItemsWithPerformance[]][]}
            lastElementRef={lastElementRef}
            hasMore={hasMore}
        />
    );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { selectPerformancesError, selectPerformancesLoading } from '@services/selectors/performancesSelectors';
import { PerformancesListUI } from '@components/ui/PerformancesPage/PerformancesList';
import { IPerformance } from 'types/performance';
import { CONTENT_LISTS } from 'consts';

export const PerformancesList: React.FC = () => {
    const loading = useSelector(selectPerformancesLoading);
    const error = useSelector(selectPerformancesError);
    const { lastElementRef, visibleItems, hasMore } = useInfiniteScroll(CONTENT_LISTS.PERFORMANCES);

    if (loading && visibleItems.length === 0) {
        return <div className="loading">Загрузка информации о спектаклях...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    return (
        <PerformancesListUI
            performances={visibleItems as IPerformance[]}
            lastElementRef={lastElementRef}
            hasMore={hasMore}
        />
    );
};

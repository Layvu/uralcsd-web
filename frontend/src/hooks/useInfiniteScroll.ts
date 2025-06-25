import { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@services/store';
import { selectPerformances } from '@services/selectors/performancesSelectors';
import { selectProjects } from '@services/selectors/projectsSelectors';
import { selectFilteredTeam } from '@services/selectors/teamSelectors';
import { makeSelectFilteredAfishaItems, selectAfishaActiveMonth } from '@services/selectors/afishaItemsSelectors';
import { IAfishaItemsWithPerformance } from 'types/afishaItemsWithPerformance';
import { CONTENT_LISTS } from 'consts';

type ListType = (typeof CONTENT_LISTS)[keyof typeof CONTENT_LISTS];

const ITEMS_PER_LOAD = 6; // Количество элементов для прорисовки за раз

export const useInfiniteScroll = (type: ListType) => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
    const observer = useRef<IntersectionObserver | null>(null);

    const activeMonthIndex = useSelector(selectAfishaActiveMonth);
    const selectFilteredAfishaItems = makeSelectFilteredAfishaItems();

    const dataSelector = {
        [CONTENT_LISTS.PERFORMANCES]: selectPerformances,
        [CONTENT_LISTS.PROJECTS]: selectProjects,
        [CONTENT_LISTS.TEAM]: selectFilteredTeam,
        [CONTENT_LISTS.AFISHA_ITEMS]: (state: RootState) => {
            const groupedItems = selectFilteredAfishaItems(state, activeMonthIndex);
            return Object.entries(groupedItems) as [string, IAfishaItemsWithPerformance[]][];
        },
    }[type];

    const allItems = useSelector((state: RootState) => dataSelector(state));
    const visibleItems = allItems.slice(0, visibleCount);
    const hasMore = visibleCount < allItems.length;

    const loadMore = useCallback(() => {
        if (!hasMore) return;
        setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
    }, [hasMore]);

    const lastElementRef = useCallback(
        (node: HTMLElement | null) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    loadMore();
                }
            });
            if (node) observer.current.observe(node);
        },
        [loadMore, hasMore],
    );

    useEffect(() => {
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);

    // Сбрасываем visibleCount
    useEffect(() => {
        setVisibleCount(ITEMS_PER_LOAD);
    }, [type, activeMonthIndex]);

    return { lastElementRef, visibleItems, hasMore };
};

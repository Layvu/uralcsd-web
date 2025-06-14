import { createSelector } from 'reselect';
import { RootState } from '@services/store';
import { groupAfishaItemsByDate } from 'utils/groupAfishaItemsByDate';
import { selectPerformances } from './performancesSelectors';

export const selectAfishaState = (state: RootState) => state.afishaItems;

export const selectAfishaItems = createSelector([selectAfishaState], (state) => state.data);
export const selectAfishaActiveMonth = createSelector([selectAfishaState], (state) => state.activeMonth);
export const selectAfishaLoading = createSelector([selectAfishaState], (state) => state.loading);
export const selectAfishaError = createSelector([selectAfishaState], (state) => state.error);
export const selectAfishaInitialized = createSelector([selectAfishaState], (state) => state.isInitialized);

// Селектор для премьер
export const selectMainBannerAfishaItems = createSelector([selectAfishaItems], (items) =>
    items.filter((item) => item.isInMainBanner),
);

export const selectLatestAfishaItems = createSelector([selectAfishaItems], (afishaItem) => afishaItem.slice(0, 3));

// Селектор для событий по ID спектакля
export const selectAfishaItemsByPerformanceId = (performanceId: string) =>
    createSelector([selectAfishaItems], (items) => items.filter((item) => item.performance.id == performanceId));

export const selectUniquePerformanceIds = createSelector(
    [selectAfishaItems],
    (afishaItems) => new Set(
      afishaItems
          .map(item => item.performance?.id)
          .filter(Boolean) as string[]
    )
);
export const makeSelectFilteredAfishaItems = () =>
    createSelector(
        [
            selectAfishaItems,
            selectPerformances, // Добавляем селектор спектаклей
            (_state: RootState, activeMonth: number) => activeMonth,
        ],
        (afishaItems, performances, activeMonth) => {
            // Создаем карту спектаклей для быстрого доступа
            const performancesMap = Object.fromEntries(performances.map((p) => [p.id, p]));

            // Фильтруем и обогащаем данные
            const filtered = afishaItems
                .filter((item) => {
                    const itemDate = new Date(item.date);
                    return itemDate.getMonth() === activeMonth;
                })
                .map((item) => ({
                    ...item,
                    performance: item.performance?.id ? performancesMap[item.performance.id] : null,
                }));

            return groupAfishaItemsByDate(filtered);
        },
    );

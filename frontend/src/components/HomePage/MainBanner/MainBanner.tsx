import { useSelector } from 'react-redux';

import { MainBannerUI } from '@components/ui/HomePage/MainBanner';

import { selectPremiereAfishaItems } from '@services/selectors/afishaItemsSelectors';
import { selectPerformancesByIds } from '@services/selectors/performancesSelectors';

export const MainBanner = () => {
    const premiereAfishaItems = useSelector(selectPremiereAfishaItems);
    const premiereAfishaItemIds = premiereAfishaItems.map((item) => item.performance.id);

    const premierePerformances = useSelector((state) => selectPerformancesByIds(state, premiereAfishaItemIds));

    return <MainBannerUI premierePerformances={premierePerformances} />;
};

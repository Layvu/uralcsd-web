import { useSelector } from 'react-redux';

import { MainBannerUI } from '@components/ui/HomePage/MainBanner';

import { selectPremiereAfishaItems } from '@services/selectors/afishaItemsSelectors';
import { getAfishaItemsWithPerformances } from 'utils/getAfishaItemsWithPerformances';

export const MainBanner = () => {
    const premiereAfishaItems = useSelector(selectPremiereAfishaItems);
    const premiereAfishaItemsWithPerformances = getAfishaItemsWithPerformances(premiereAfishaItems);
    return <MainBannerUI premiereAfishaItemsWithPerformances={premiereAfishaItemsWithPerformances} />;
};

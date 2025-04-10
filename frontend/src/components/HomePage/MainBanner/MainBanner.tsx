import { useSelector } from 'react-redux';

import { MainBannerUI } from '@components/ui/HomePage/MainBanner';

import { selectPremiereAfishaItems } from '@services/selectors/afishaItemsSelectors';

export const MainBanner = () => {
    const premierePerformances = useSelector(selectPremiereAfishaItems);

    return <MainBannerUI premierePerformances={premierePerformances} />;
};

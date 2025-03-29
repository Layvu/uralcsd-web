import { useSelector } from 'react-redux';

import { MainBannerUI } from '@components/ui/HomePage/MainBanner';

import { selectPremierePerformances } from 'services/selectors/performancesSelectors';

export const MainBanner = () => {
    const premierePerformances = useSelector(selectPremierePerformances);

    return <MainBannerUI premierePerformances={premierePerformances} />;
};

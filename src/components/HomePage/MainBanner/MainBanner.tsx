import { MainBannerUI } from '@components/ui/HomePage/MainBanner';
import { mockPerformances } from 'mockData';

export const MainBanner = () => {
    const premierePerformances = mockPerformances.filter((performance) => performance.isPremiere);

    return <MainBannerUI premierePerformances={premierePerformances} />;
};

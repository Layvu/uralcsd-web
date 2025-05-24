import { useSelector } from 'react-redux';

import { MainBannerUI } from '@components/ui/HomePage/MainBanner';

import { selectAfishaError, selectAfishaLoading, selectPremiereAfishaItems } from '@services/selectors/afishaItemsSelectors';
import { getAfishaItemsWithPerformances } from 'utils/getAfishaItemsWithPerformances';

export const MainBanner = () => {
    const premiereAfishaItems = useSelector(selectPremiereAfishaItems);
    const premiereAfishaItemsWithPerformances = getAfishaItemsWithPerformances(premiereAfishaItems);

    const loading = useSelector(selectAfishaLoading);
    const error = useSelector(selectAfishaError);

    if (loading) {
        return <div className="loading">Загрузка информации афиши...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    return <MainBannerUI premiereAfishaItemsWithPerformances={premiereAfishaItemsWithPerformances} />;
};

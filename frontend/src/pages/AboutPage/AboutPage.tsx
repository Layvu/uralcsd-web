import React from 'react';
import { useSelector } from 'react-redux';
import { AboutPageUI } from '@components/ui/AboutPage';
import { selectTheaterInfo, selectTheaterLoading, selectTheaterError } from 'services/selectors/theaterSelectors';

export const AboutPage: React.FC = () => {
    const theaterInfo = useSelector(selectTheaterInfo);
    const loading = useSelector(selectTheaterLoading);
    const error = useSelector(selectTheaterError);

    if (loading) {
        return <div className="about-page__loading">Загрузка информации о театре...</div>;
    }
    if (error) {
        return <div className="about-page__error">Ошибка: {error}</div>;
    }

    return <AboutPageUI theaterInfo={theaterInfo} />;
};

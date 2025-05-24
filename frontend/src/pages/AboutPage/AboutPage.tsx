import React from 'react';
import { useSelector } from 'react-redux';
import { AboutPageUI } from '@components/ui/AboutPage';
import { selectTheaterInfo, selectTheaterLoading, selectTheaterError } from 'services/selectors/theaterSelectors';

export const AboutPage: React.FC = () => {
    const theaterInfo = useSelector(selectTheaterInfo);
    const loading = useSelector(selectTheaterLoading);
    const error = useSelector(selectTheaterError);

    if (loading) {
        return <div className="loading">Загрузка информации о театре...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    return <AboutPageUI theaterInfo={theaterInfo} />;
};

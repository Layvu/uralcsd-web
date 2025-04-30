import React from 'react';
import { useNavigate } from 'react-router-dom';

import './latest-performances.scss';

import { ROUTES } from 'consts';
import { SpectacleCard } from '@components/AfishaPage/SpectacleCard';
import { LatestPerformancesProps } from './type';

export const LatestPerformancesUI: React.FC<LatestPerformancesProps> = ({ latestPerformances }) => {
    const navigate = useNavigate();

    return (
        <section className="latest-performances wrap">
            <h2 className="latest-performances__title title-h2">Последние спектакли</h2>

            <ul className="latest-performances__list">
                {latestPerformances.map((afishaItem) => {
                    console.log(afishaItem);
                    return (
                        <li key={afishaItem?.performance?.slug} className="latest-performances__card">
                            {/* Тут уже другой компонент нужен */}
                            <SpectacleCard {...afishaItem} />
                        </li>
                    );})}
            </ul>

            <button
                className="latest-performances__button button"
                onClick={() => {
                    navigate(ROUTES.AFISHA);
                }}
            >
                Переход ко всей афише
            </button>
        </section>
    );
};

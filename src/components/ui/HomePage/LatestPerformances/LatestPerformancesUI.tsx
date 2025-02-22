import React from 'react';
import { useNavigate } from 'react-router-dom';

import './latest-performances.scss';

import { SpectacleCard } from '@components/Shared/SpectacleCard';
import { LatestPerformancesProps } from './type';

export const LatestPerformancesUI: React.FC<LatestPerformancesProps> = ({ latestPerformances }) => {
    const navigate = useNavigate();

    return (
        <section className="latest-performances wrap">
            <h2 className="latest-performances__title title-h2">Последние спектакли</h2>

            <ul className="latest-performances__list">
                {latestPerformances.map((performance) => (
                    <li key={performance.name} className="latest-performances__card">
                        <SpectacleCard {...performance} />
                    </li>
                ))}
            </ul>

            <button
                className="latest-performances__button button"
                onClick={() => {
                    navigate('/afisha');
                }}
            >
                Переход ко всей афише
            </button>
        </section>
    );
};

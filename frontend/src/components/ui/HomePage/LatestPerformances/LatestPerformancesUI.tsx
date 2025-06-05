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
            <div className="latest-performances__header">
                <h1 className="latest-performances__title">Ближайшие спектакли</h1>
                <button
                    className="latest-performances__button "
                    onClick={() => {
                        navigate(ROUTES.AFISHA);
                    }}
                >
                Полный репертуар
                </button>
            </div>
            
            <ul className="latest-performances__list">
                {latestPerformances.map((afishaItem) => (
                    <li key={afishaItem?.id} className="latest-performances__card">
                        <SpectacleCard {...afishaItem} isLatestPerformance={true} />
                    </li>
                ))}
            </ul>

            
        </section>
    );
};

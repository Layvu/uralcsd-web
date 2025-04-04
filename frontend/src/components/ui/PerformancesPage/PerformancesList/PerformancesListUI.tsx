import React from 'react';
import './performances-list.scss';

import { SpectacleCard } from '@components/Shared/SpectacleCard';
import { PerformanceListUI } from './type';

export const PerformancesListUI: React.FC<PerformanceListUI> = ({ performances }) => {
    return (
        <ul className="performances-list">
            {performances.map((performance) => (
                <li key={performance.slug} className="performances-list__spectacle-card">
                    <SpectacleCard {...performance} />
                </li>
            ))}
        </ul>
    );
};

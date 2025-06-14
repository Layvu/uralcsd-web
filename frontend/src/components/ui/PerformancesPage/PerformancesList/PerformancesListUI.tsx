import React from 'react';
import './performances-list.scss';
import { PerformanceListUI } from './type';
import { PerformanceCard } from '@components/PerformancesPage/PerformanceCard';

export const PerformancesListUI: React.FC<PerformanceListUI> = ({ performances }) => {
    return (
        <ul className="performances-list">
            {performances.map((performance) => (
                <li key={performance.slug} className="performances-list__spectacle-card">
                    <PerformanceCard isInRepertoire={true} {...performance} />
                </li>
            ))}
        </ul>
    );
};

import React from 'react';
import './performances-list.scss';
import { PerformanceListUI } from './type';
import { PerformanceCard } from '@components/PerformancesPage/PerformanceCard';

export const PerformancesListUI: React.FC<PerformanceListUI> = ({ performances, lastElementRef, hasMore }) => {
    return (
        <>
            <ul className="performances-list">
                {performances.map((performance, index) => (
                    <li
                        key={performance.slug}
                        className="performances-list__spectacle-card"
                        ref={index === performances.length - 1 ? lastElementRef : null}
                    >
                        <PerformanceCard isInRepertoire={true} {...performance} />
                    </li>
                ))}
            </ul>
            {hasMore && <div className="loading">Загрузка...</div>}
        </>
    );
};

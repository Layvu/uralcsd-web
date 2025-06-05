import { PerformancesList } from '@components/PerformancesPage/PerformancesList';
import React from 'react';
import { PerformancesListProps } from './type';

import './performances.scss';

export const PerformancesUI: React.FC<PerformancesListProps> = () => {
    return (
        <section className='performances wrap'>
            <h1 className='performances__title title-h3--underline'>Спектакли</h1>
            <PerformancesList />
        </section>
    );
};

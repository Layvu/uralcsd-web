import { PerformancesList } from '@components/PerformancesPage/PerformancesList';
import { MainTitle } from '@components/Shared/MainTitle';
import React from 'react';
import { PerformancesListProps } from './type';

import './performances.scss';

export const PerformancesUI: React.FC<PerformancesListProps> = () => {
    return (
        <section className='performances wrap'>
            <MainTitle className='performances__title title-h3--underline'>Спектакли</MainTitle>
            <PerformancesList />
        </section>
    );
};

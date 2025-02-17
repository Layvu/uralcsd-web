import { SpectacleCard } from '@components/Shared/SpectacleCard';
import React from 'react';
import './performances-list.scss';

export const PerformancesListUI: React.FC = () => {
    return ( 
        <ul className='performances-list'>
            <li className='performances-list__spectacle-card'>
                <SpectacleCard />
            </li>
            <li className='performances-list__spectacle-card'>
                <SpectacleCard />
            </li>
            <li className='performances-list__spectacle-card'>
                <SpectacleCard />
            </li>
            <li className='performances-list__spectacle-card'>
                <SpectacleCard />
            </li>
            <li className='performances-list__spectacle-card'>
                <SpectacleCard />
            </li>
        </ul>

    );
};

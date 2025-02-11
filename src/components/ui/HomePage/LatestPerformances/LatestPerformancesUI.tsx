import React from 'react';

import './latest-performances.scss'; 
export const LatestPerformancesUI: React.FC = () => {
    return (
        <section className='latest-performances wrap'>
            <h2 className='latest-performances__title title-h2'>Последние спектакли</h2>
            <ul className="latest-performances__list">
                <li className="latest-performances__card">Карточка спектакля</li>
                <li className="latest-performances__card">Карточка спектакля</li>
                <li className="latest-performances__card">Карточка спектакля</li>
            </ul>
            <button className='latest-performances__button button'>Переход ко всей афише</button>
        </section>
        
    );
}; 

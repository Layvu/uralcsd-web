import React from 'react';
import { TeamFilterProps } from './type';

import './team-filter.scss';
import { TeamFilterCategories } from 'consts';

const categoriesLabels: Record<TeamFilterCategories, string> = {
    [TeamFilterCategories.Actors]: 'Актёры',
    [TeamFilterCategories.Directors]: 'Постановщики',
    [TeamFilterCategories.Management]: 'Руководство',
};

export const TeamFilterUI: React.FC<TeamFilterProps> = React.memo(({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="team__team-filter team-filter">
            {Object.values(TeamFilterCategories).map((category) => (
                <button
                    key={category}
                    className={`team-filter__button select-button ${
                        selectedCategory === category ? 'team-filter__button--active select-button--active' : ''
                    }`}
                    onClick={() => onSelectCategory(category as TeamFilterCategories)}
                >
                    {categoriesLabels[category as TeamFilterCategories]}
                </button>
            ))}
        </div>
    );
});

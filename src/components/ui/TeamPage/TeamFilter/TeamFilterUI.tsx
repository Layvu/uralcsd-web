import React from 'react';
import { TeamFilterProps } from './type';
import { TeamFilterCategory } from 'types/TeamFilterCategory';

import './team-filter.scss';


export const TeamFilterUI: React.FC<TeamFilterProps> = React.memo(({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="team__team-filter team-filter">
            {(["actors", "directors", "management"] as TeamFilterCategory[]).map((category) => (
                <button
                    key={category}
                    className={`team-filter__button select-button ${
                        selectedCategory === category ? "team-filter__button--active select-button--active" : ""
                    }`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category === "actors" ? "Актёры" : category === "directors" ? "Режиссёры" : "Руководство"}
                </button>
            ))}
        </div>
    );
});

  
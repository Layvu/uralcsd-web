import React from 'react';
import { TeamFilterProps } from './type';

import './team-filter.scss';
import { TeamFilterCategories } from 'consts';
import { useBreakpoint } from 'hooks/useBreakpoint';

const categoriesLabels: Record<TeamFilterCategories, string> = {
    [TeamFilterCategories.Actors]: 'Актёры',
    [TeamFilterCategories.Directors]: 'Постановщики',
    [TeamFilterCategories.Management]: 'Руководство',
};
export const TeamFilterUI: React.FC<TeamFilterProps> = React.memo(({ activeCategory, onSelectCategory }) => {
    // Refs для кнопок
    const buttonRefs = React.useRef<Record<TeamFilterCategories, HTMLButtonElement | null>>(
        {} as Record<TeamFilterCategories, HTMLButtonElement | null>,
    );

    const {isMobile} = useBreakpoint();

    const handleClick = (category: TeamFilterCategories) => {
        onSelectCategory(category);
        if(isMobile){
        // Прокручиваем к выбранному элементу
            const button = buttonRefs.current[category];
            if (button) {
                button.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'nearest', // Прокручивает минимально необходимое расстояние
                    inline: 'center', // Центрирует элемент по горизонтали
                });
            }
        }
    };

    return (
        <div className="team__team-filter team-filter">
            {Object.values(TeamFilterCategories).map((category) => (
                <button
                    key={category}
                    ref={(el) => (buttonRefs.current[category as TeamFilterCategories] = el)}
                    className={`team-filter__button select-button ${
                        activeCategory === category ? 'team-filter__button--active select-button--active' : ''
                    }`}
                    onClick={() => handleClick(category as TeamFilterCategories)}
                >
                    {categoriesLabels[category as TeamFilterCategories]}
                </button>
            ))}
        </div>
    );
});

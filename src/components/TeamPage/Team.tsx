import { TeamPageUI } from '@components/ui/TeamPage';
import React, { useCallback, useState } from 'react';
import { TeamFilterCategory } from 'types/TeamFilterCategory';


export const Team: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<TeamFilterCategory>("actors" as TeamFilterCategory);

    const handleCategoryChange = useCallback((category: TeamFilterCategory) => {
        setSelectedCategory(category);
    },[]); 

    // контекст актеров припилить 
    return (
        <TeamPageUI selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange} />     
    );
};

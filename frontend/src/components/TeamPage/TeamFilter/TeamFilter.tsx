import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from 'services/store';
import { setCategory } from 'services/slices/teamSlice';
import { selectSelectedCategory } from 'services/selectors/teamSelectors';

import { TeamFilterCategory } from 'types/TeamFilterCategory';
import { TeamFilterUI } from '@components/ui/TeamPage/TeamFilter';

export const TeamFilter: React.FC = React.memo(() => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedCategory = useSelector(selectSelectedCategory);

    const handleCategoryChange = useCallback(
        (category: TeamFilterCategory) => {
            dispatch(setCategory(category));
        },
        [dispatch],
    );

    return <TeamFilterUI selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange} />;
});

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from 'services/store';
import { setActiveCategory } from 'services/slices/teamSlice';
import { selectTeamActiveCategory } from 'services/selectors/teamSelectors';

import { TeamFilterCategory } from 'types/TeamFilterCategory';
import { TeamFilterUI } from '@components/ui/TeamPage/TeamFilter';

export const TeamFilter: React.FC = React.memo(() => {
    const dispatch = useDispatch<AppDispatch>();

    const activeTeamCategory = useSelector(selectTeamActiveCategory);

    const handleCategoryChange = useCallback(
        (category: TeamFilterCategory) => {
            dispatch(setActiveCategory(category));
        },
        [dispatch],
    );

    return <TeamFilterUI activeCategory={activeTeamCategory} onSelectCategory={handleCategoryChange} />;
});

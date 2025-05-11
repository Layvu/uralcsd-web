import { TeamFilterCategory } from 'types/TeamFilterCategory';

export interface BaseTeamProps {
    activeCategory: TeamFilterCategory;
    onSelectCategory: (category: TeamFilterCategory) => void;
}

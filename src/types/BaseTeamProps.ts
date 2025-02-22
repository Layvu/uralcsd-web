import { TeamFilterCategory } from "types/TeamFilterCategory";

export interface BaseTeamProps{ 
    selectedCategory: TeamFilterCategory;
    onSelectCategory: (category: TeamFilterCategory) => void;
}
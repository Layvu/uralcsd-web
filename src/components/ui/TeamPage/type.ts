// import { BaseTeamProps } from "types/BaseTeamProps";

import { TeamFilterCategory } from 'types/TeamFilterCategory';

export interface TeamPageProps {
    onSelectCategory: (category: TeamFilterCategory) => void;
}

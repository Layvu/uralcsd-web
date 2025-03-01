import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectTeamState = (state: RootState) => state.team;
export const selectTeam = createSelector([selectTeamState], (state) => state.data);
export const selectSelectedCategory = createSelector([selectTeamState], (state) => state.selectedCategory);

export const selectTeamLoading = createSelector([selectTeamState], (state) => state.loading);
export const selectTeamError = createSelector([selectTeamState], (state) => state.error);

export const selectTeamMemberBySlug = createSelector([selectTeam, (_, slug: string) => slug], (team, slug) =>
    team.find((member) => member.slug === slug),
);

export const selectFilteredTeam = createSelector([selectTeam, selectSelectedCategory], (team, category) =>
    team.filter((member) => member.category === category),
);

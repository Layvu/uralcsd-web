import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectTeamState = (state: RootState) => state.team;
export const selectTeam = createSelector([selectTeamState], (state) => state.data);
export const selectSelectedCategory = createSelector([selectTeamState], (state) => state.selectedCategory);

export const selectTeamLoading = createSelector([selectTeamState], (state) => state.loading);
export const selectTeamError = createSelector([selectTeamState], (state) => state.error);

const teamMemberBySlug = createSelector([selectTeam], (team) =>
    Object.fromEntries(team.map((member) => [member.slug, member])),
);
export const selectTeamMemberBySlug = createSelector(
    [teamMemberBySlug, (_, slug: string) => slug],
    (bySlug, slug) => bySlug[slug],
);

export const selectFilteredTeam = createSelector([selectTeam, selectSelectedCategory], (team, category) =>
    team.filter((member) => member.category === category),
);

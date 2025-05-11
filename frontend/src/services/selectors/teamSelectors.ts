import { createSelector } from 'reselect';
import { RootState } from 'services/store';

export const selectTeamState = (state: RootState) => state.team;
export const selectTeam = createSelector([selectTeamState], (state) => state.data);
export const selectTeamActiveCategory = createSelector([selectTeamState], (state) => state.activeCategory);
export const selectTeamInitialized = createSelector([selectTeamState], (state) => state.isInitialized);

export const selectTeamError = createSelector([selectTeamState], (state) => state.error);
export const selectTeamLoading = createSelector([selectTeamState], (state) => state.loading);

const teamMemberBySlug = createSelector([selectTeam], (team) =>
    Object.fromEntries(team.map((member) => [member.slug, member])),
);
export const selectTeamMemberBySlug = createSelector(
    [teamMemberBySlug, (_, slug: string) => slug],
    (bySlug, slug) => bySlug[slug],
);

export const teamMemberById = createSelector([selectTeam], (team) => Object.fromEntries(team.map((t) => [t.id, t])));

export const selectTeamMemberById = createSelector([teamMemberById, (_, id: string) => id], (byId, id) => byId[id]);

export const selectFilteredTeam = createSelector([selectTeam, selectTeamActiveCategory], (team, category) =>
    team.filter((member) => member.category === category),
);

export const selectTeamMembersByIds = createSelector(
    [selectTeam, (_state: RootState, memberIds: string[] | string) => memberIds],
    (teamMembers, memberIds) => {
        if (!memberIds || !memberIds.length) return [];

        const idsArray = Array.isArray(memberIds)
            ? memberIds
            : typeof memberIds === 'string'
                ? memberIds.split(',')
                : [];

        const idsSet = new Set(idsArray.filter(Boolean));

        return teamMembers.filter((member) => member.id && idsSet.has(member.id));
    },
);

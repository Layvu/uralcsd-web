import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTeamMemberBySlug } from 'services/selectors/teamSelectors';
import { selectPerformancesByIds } from 'services/selectors/performancesSelectors';

import { TeamCardFullUI } from '@components/ui/TeamPage/TeamCardFull';
import { RootState } from '@services/store';

export const TeamCardFull: React.FC = React.memo(() => {
    const { slug } = useParams<{ slug: string }>();
    const member = useSelector((state: RootState) => selectTeamMemberBySlug(state, slug || ''));

    const performanceIds = React.useMemo(() => member?.performances?.map((p) => p.performanceID) || [], [member]);

    const memberPerformances = useSelector((state: RootState) => selectPerformancesByIds(state, performanceIds));

    const performancesWithRoles = React.useMemo(() => {
        if (!member) return [];
        return (
            member.performances?.map((performance) => {
                const currentPerformance = memberPerformances.find((p) => p.id === performance.performanceID);
                return {
                    performance: currentPerformance,
                    role: performance.role?.join(', ') || 'Роль не указана',
                };
            }) || []
        );
    }, [member, memberPerformances]);

    if (!member) {
        return <div>Сотрудник не найден</div>;
    }

    return <TeamCardFullUI member={member} performancesWithRoles={performancesWithRoles} />;
});

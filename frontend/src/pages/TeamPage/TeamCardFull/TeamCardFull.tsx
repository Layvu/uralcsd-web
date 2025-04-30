import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTeamMemberBySlug } from 'services/selectors/teamSelectors';
import { selectPerformancesByIds } from 'services/selectors/performancesSelectors';
import { selectPerformanceCastByIds } from '@services/selectors/performanceCastSelectors';

import { TeamCardFullUI } from '@components/ui/TeamPage/TeamCardFull';
import { RootState } from '@services/store';

export const TeamCardFull: React.FC = React.memo(() => {
    const { slug } = useParams<{ slug: string }>();
    const member = useSelector((state: RootState) => selectTeamMemberBySlug(state, slug || ''));
    
    
    // Производим операции чтобы вытащить спектакли с ролями 
    const memberPerformanceCastsIds = member?.performanceCasts?.map((performanceCast) => performanceCast?.id);
    const memberPerformanceCasts = useSelector((state: RootState) => selectPerformanceCastByIds(state, memberPerformanceCastsIds ? memberPerformanceCastsIds : ''));
    const memberPerformancesIds = memberPerformanceCasts.map((performanceCast) => performanceCast?.performance?.id);
    const memberPerformances = useSelector((state: RootState) => selectPerformancesByIds(state, memberPerformancesIds));

    const performancesWithRoles = React.useMemo(() => {
        if (!memberPerformanceCasts) return [];
        return (
            memberPerformanceCasts?.map((performanceCast) => {
                const currentPerformance = memberPerformances.find((p) => p.id === performanceCast?.performance?.id);
                return {
                    performance: currentPerformance,
                    role: performanceCast.role || 'Роль не указана',
                };
            }) || []
        );
    }, [member, memberPerformances]);



    return <TeamCardFullUI member={member} performancesWithRoles={performancesWithRoles} />;
});

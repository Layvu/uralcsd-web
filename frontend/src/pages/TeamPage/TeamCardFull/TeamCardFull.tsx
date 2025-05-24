import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    selectTeamError,
    selectTeamLoading,
    selectTeamMemberBySlug
} from 'services/selectors/teamSelectors';

import { selectPerformancesByIds } from 'services/selectors/performancesSelectors';
import { selectPerformanceCastByIds } from '@services/selectors/performanceCastSelectors';

import { TeamCardFullUI } from '@components/ui/TeamPage/TeamCardFull';
import { RootState } from '@services/store';

export const TeamCardFull: React.FC = React.memo(() => {
    const { slug } = useParams<{ slug: string }>();
    const member = useSelector((state: RootState) =>
        selectTeamMemberBySlug(state, slug || '')
    );

    const memberPerformanceCastIds = React.useMemo(
        () => member?.performanceCasts?.map(pc => pc?.id).filter(Boolean) || [],
        [member]
    );
    const memberPerformanceCasts = useSelector((state: RootState) =>
        selectPerformanceCastByIds(state, memberPerformanceCastIds)
    );
    const memberPerformanceIds = React.useMemo(
        () => memberPerformanceCasts.map(pc => pc?.performance?.id).filter(Boolean),
        [memberPerformanceCasts]
    );
    const memberPerformances = useSelector((state: RootState) =>
        selectPerformancesByIds(state, memberPerformanceIds)
    );
    const performancesWithRoles = React.useMemo(() => {
        return memberPerformanceCasts.map(performanceCast => ({
            performance: memberPerformances.find(p => p?.id === performanceCast?.performance?.id),
            role: performanceCast?.role || 'Роль не указана',
        }));
    }, [memberPerformanceCasts, memberPerformances]);

    const loading = useSelector(selectTeamLoading);
    const error = useSelector(selectTeamError);

    if (loading) {
        return <div className="loading">Загрузка информации о команде...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }
    if (!member) {
        return <div className="loading">Участник команды не найден</div>;
    }

    return <TeamCardFullUI member={member} performancesWithRoles={performancesWithRoles} />;
});

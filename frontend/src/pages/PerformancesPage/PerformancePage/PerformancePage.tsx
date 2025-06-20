import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    selectPerformanceCastByIds
} from '@services/selectors/performanceCastSelectors';
import {
    selectPerformanceBySlug,
    selectPerformancesError,
    selectPerformancesLoading
} from '@services/selectors/performancesSelectors';
import {
    selectTeamMembersByIds
} from '@services/selectors/teamSelectors';
import {
    selectAfishaItemsByPerformanceId
} from '@services/selectors/afishaItemsSelectors';

import { PerformanceInfoUI } from '@components/ui/PerformancesPage/PerformanceInfo';
import { RootState } from '@services/store';

export const PerformancePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const performance = useSelector((state: RootState) =>
        selectPerformanceBySlug(state, slug || '')
    );

    const performanceCastIds = React.useMemo(
        () => performance?.performanceCasts?.map(pc => pc?.id).filter(Boolean) || [],
        [performance]
    );
    const performanceCasts = useSelector((state: RootState) =>
        selectPerformanceCastByIds(state, performanceCastIds)
    );
    const actorIds = React.useMemo(
        () => performanceCasts?.map(pc => pc?.actor?.id).filter(Boolean) || [],
        [performanceCasts]
    );
    const actors = useSelector((state: RootState) =>
        selectTeamMembersByIds(state, actorIds)
    );
    const actorsWithRoles = React.useMemo(() => {
        return performanceCasts.map(pc => ({
            actor: actors.find(a => a.id === pc?.actor?.id),
            role: pc?.role || 'Роль не указана',
        }));
    }, [performanceCasts, actors]);

    const selectAfishaItems = React.useMemo(
        () => (performance?.id ? selectAfishaItemsByPerformanceId(performance.id) : () => []),
        [performance?.id]
    );
    const currentAfishaItems = useSelector(selectAfishaItems);

    const loading = useSelector(selectPerformancesLoading);
    const error = useSelector(selectPerformancesError);

    if (loading) {
        return <div className="loading">Загрузка информации о спектакле...</div>;
    }

    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    if (!performance) {
        return <div className='not-found wrap'>Событие не найдено</div>;
    }

    return (
        <PerformanceInfoUI
            performance={performance}
            actorsWithRoles={actorsWithRoles}
            currentAfishaItems={currentAfishaItems}
        />
    );
};

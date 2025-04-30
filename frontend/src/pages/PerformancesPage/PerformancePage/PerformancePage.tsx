import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectPerformanceCastByIds } from '@services/selectors/performanceCastSelectors';
import { selectPerformanceBySlug } from 'services/selectors/performancesSelectors';
import { selectTeamMembersByIds } from '@services/selectors/teamSelectors';

import { PerformanceInfoUI } from '@components/ui/PerformancesPage/PerformanceInfo';
import { RootState } from '@services/store';

export const PerformancePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const performance = useSelector((state) => selectPerformanceBySlug(state, slug || ''));

    // Производим операции чтобы вытащить актеров с ролями
    const perdormanceCastIds = performance.performanceCasts.map((performanceCast) => performanceCast.id);
    const performanceCasts = useSelector((state: RootState) => selectPerformanceCastByIds(state, perdormanceCastIds ? perdormanceCastIds : ''));    
    const performanceActorsIds = performanceCasts.map((performanceCasts) => performanceCasts.actor?.id);
    const performanceActors = useSelector((state: RootState) => selectTeamMembersByIds(state, performanceActorsIds));

    const actorsWithRoles = React.useMemo(() => {
        if (!performanceCasts) return [];
        return (
            performanceCasts?.map((performanceCast) => {
                const currentActor = performanceActors.find((a) => a.id === performanceCast.actor?.id);
                return {
                    actor: currentActor,
                    role: performanceCast.role || 'Роль не указана',
                };
            }) || []
        );
    }, [performance, performanceActors]);

    // Директоров еще засунуть надо

    // const performanceDirectors = performance.directors.map((director) =>
    //     useSelector((state) => 
    //         selectTeamMemberById(state, director.id || '')));

    if (!performance) {
        return <div>Событие не найдено</div>;
    }

    return <PerformanceInfoUI performance={performance} actorsWithRoles={actorsWithRoles} />;
};

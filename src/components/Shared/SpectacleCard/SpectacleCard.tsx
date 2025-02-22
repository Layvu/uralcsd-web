import { SpectacleCardUI } from '@components/ui/Shared/SpectacleCard';
import { SpectacleCardProps } from '@components/ui/Shared/SpectacleCard/type';
import React from 'react';

export const SpectacleCard: React.FC<SpectacleCardProps> = (props) => {
    return (
        <>
            <SpectacleCardUI {...props} />
        </>
    );
};

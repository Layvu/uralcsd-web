import { SpectacleCardUI } from '@components/ui/AfishaPage/SpectacleCard';
import { SpectacleCardProps } from '@components/ui/AfishaPage/SpectacleCard/type';
import React from 'react';

export const SpectacleCard: React.FC<SpectacleCardProps> = (props) => {
    return (
        <>
            <SpectacleCardUI {...props} />
        </>
    );
};

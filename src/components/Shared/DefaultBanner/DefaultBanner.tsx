import React from 'react';

import { DefaultBannerUI } from '@components/ui/Shared/DefaultBanner';
import { DefaultBannerProps } from '@components/ui/Shared/DefaultBanner/type';

export const DefaultBanner: React.FC<DefaultBannerProps> = ({ performance }) => {
    return <DefaultBannerUI performance={performance} />;
};

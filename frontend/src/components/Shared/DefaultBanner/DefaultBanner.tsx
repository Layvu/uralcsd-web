import React from 'react';

import { DefaultBannerUI } from '@components/ui/Shared/DefaultBanner';
import { DefaultBannerProps } from '@components/ui/Shared/DefaultBanner/type';

export const DefaultBanner: React.FC<DefaultBannerProps> = ({ ...props }) => {
    if (props.images.length == 0){
        return ;
    }
    return <DefaultBannerUI {...props} />;
};

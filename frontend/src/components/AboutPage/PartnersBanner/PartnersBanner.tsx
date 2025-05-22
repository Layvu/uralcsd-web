import { PartnersBannerUI } from '@components/ui/AboutPage/PartnersBanner';
import { PartnersBannerProps } from '@components/ui/AboutPage/PartnersBanner/type';
import React from 'react';

export const PartnersBanner: React.FC<PartnersBannerProps> = ({...props}) => {
    return (
        <PartnersBannerUI {...props} />
    );
};

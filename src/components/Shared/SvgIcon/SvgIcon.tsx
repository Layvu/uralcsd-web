import React from 'react';
import { SvgIconUI } from '@components/ui/Shared/SvgIcon';
import { SvgIconProps } from '@components/ui/Shared/SvgIcon/type';

export const SvgIcon: React.FC<SvgIconProps> = ({ id, className, title }) => (
    <SvgIconUI id={id} className={className} title={title} />
);

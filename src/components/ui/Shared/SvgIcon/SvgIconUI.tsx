import './SvgIcon.scss';

import React from 'react';
import { SvgIconProps } from 'types/svgIcon';

export const SvgIconUI: React.FC<SvgIconProps> = ({ id, className, title }) => (
    <svg className={className} role={title ? 'img' : undefined} aria-label={title}>
        {title && <title>{title}</title>}
        <use xlinkHref={`img/sprite.svg#${id}`} />
    </svg>
);

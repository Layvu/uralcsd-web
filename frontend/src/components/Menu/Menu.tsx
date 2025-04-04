import React from 'react';

import { MenuUI } from '@components/ui/Menu';
import { MenuProps } from '@components/ui/Menu/type';

export const Menu: React.FC<MenuProps> = React.memo(({ isOpen }) => {
    return <MenuUI isOpen={isOpen} />;
});

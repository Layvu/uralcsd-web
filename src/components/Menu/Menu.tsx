import React from 'react';

import { MenuUI } from '@components/ui/Menu';
import { MenuProps } from '@components/ui/Menu/type';

export const Menu: React.FC<MenuProps> = ({ isOpen }) => {
    return <MenuUI isOpen={isOpen} />;
};

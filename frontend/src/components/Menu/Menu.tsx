import React from 'react';

import { MenuUI } from '@components/ui/Menu';
import { MenuProps } from '@components/ui/Menu/type';
import { useSelector } from 'react-redux';
import { selectContactsInfo } from '@services/selectors/contactsSelectors';

export const Menu: React.FC<MenuProps> = React.memo(({ isOpen }) => {
    const contactsInfo = useSelector(selectContactsInfo);
    
    return <MenuUI isOpen={isOpen} contactsInfo={contactsInfo}/>;
});

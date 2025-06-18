import React from 'react';

import { MenuUI } from '@components/ui/Menu';
import { MenuProps } from '@components/ui/Menu/type';
import { useSelector } from 'react-redux';
import { selectContactsInfo } from '@services/selectors/contactsSelectors';

export const Menu: React.FC<MenuProps> = React.memo(({ isOpen, onClose }) => {
    const contactsInfo = useSelector(selectContactsInfo);
    
    return <MenuUI isOpen={isOpen} onClose={onClose} contactsInfo={contactsInfo}/>;
});

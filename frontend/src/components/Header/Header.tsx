import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderUI } from '@components/ui/Header';
import { useSelector } from 'react-redux';
import { selectContactsInfo } from '@services/selectors/contactsSelectors';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const contactsInfo = useSelector(selectContactsInfo);

    return <HeaderUI onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} location={location.pathname} contactsInfo={contactsInfo}/>;
};

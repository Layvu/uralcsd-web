import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderUI } from '@components/ui/Header';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return <HeaderUI onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} location={location.pathname}/>;
};

import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '@components/Menu';

import { HeaderUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';
import { menuLinks } from 'consts';

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle, isMenuOpen }) => {
    return (
        <header className="header">
            <div className="wrap header__wrap">
                <Link to="/" className="logo header__logo">
                    <SvgIcon id="ellipseMock" title="Logotype" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {menuLinks.map(({ path, label }) => (
                            <li key={path} className="header__nav-item">
                                <Link to={path}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__social-media">
                    <a href="#" className="header__social-media-item">
                        <SvgIcon id="ellipseMock" title="VK icon" />
                    </a>
                    <a href="#" className="header__social-media-item">
                        <SvgIcon id="ellipseMock" title="Telegram icon" />
                    </a>
                </div>
                <button
                    className="header__menu-button"
                    onClick={onMenuToggle}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <SvgIcon id="ellipseMock" title="Menu icon" />
                </button>

                <Menu isOpen={isMenuOpen} />
            </div>
        </header>
    );
};

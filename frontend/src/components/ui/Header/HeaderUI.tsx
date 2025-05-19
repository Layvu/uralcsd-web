import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '@components/Menu';

import { HeaderUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';
import { menuLinks } from 'consts';

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle, isMenuOpen, location, contactsInfo }) => {
    return (
        <header className="header">
            <div className="header__wrap wrap">
                <Link to="/" className="header__logo">
                    <SvgIcon id="logo--white" title="Logotype" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {menuLinks.map(({ path, label }) => {
                            const isActive = location.includes(path);
                            return (
                                <li key={path} className={`header__nav-item ${isActive && 'header__nav-item--active'}`}>
                                    <Link to={path}>{label}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="header__social-media">
                    <a href={contactsInfo.social.vk} target="_blank" rel="noopener noreferrer" className="header__social-media-item">
                        <SvgIcon id="vk" title="VK icon" />
                    </a>
                    <a href={contactsInfo.social.tg} target="_blank" rel="noopener noreferrer" className="header__social-media-item">
                        <SvgIcon id="telegram" title="Telegram icon" />
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

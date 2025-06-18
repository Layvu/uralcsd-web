import './Menu.scss';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';
import { menuLinks } from 'consts';

export const MenuUI: React.FC<MenuProps> = ({ isOpen, contactsInfo, onClose }) => {
    const location = useLocation();
    
    const handleLinkClick = () => {
        onClose();
    };

    return (
        <div className={`menu ${isOpen ? 'menu--open' : 'menu--closed'}`}>
            <div className="wrap menu__wrap">
                <nav className="menu__nav">
                    <ul className="menu__nav-list">
                        {menuLinks.map(({ path, label }) => {
                            const isActive = location.pathname.includes(path);
                            return (
                                <li key={path} className={`menu__nav-item ${isActive ? 'underlined' : ''}`}>
                                    <Link to={path} onClick={handleLinkClick}>{label}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="menu__social-media">
                    <a href={contactsInfo?.social.vk} className="menu__social-media-item" target="_blank" rel="noopener noreferrer">
                        <SvgIcon id="vk" title="VK icon" />
                    </a>
                    <a href={contactsInfo?.social.tg} className="menu__social-media-item" target="_blank" rel="noopener noreferrer">
                        <SvgIcon id="telegram" title="Telegram icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};


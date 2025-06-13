import './Menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';

export const MenuUI: React.FC<MenuProps> = ({ isOpen, contactsInfo }) => {
    return (
        <div className={`menu ${isOpen ? 'menu--open' : 'menu--closed'}`}>
            <div className="wrap menu__wrap">
                <nav className="menu__nav">
                    <ul className="menu__nav-list">
                        <li className="menu__nav-item"><Link to="/afisha">Афиша</Link></li>
                        <li className="menu__nav-item"><Link to="/performances">Спектакли</Link></li>
                        <li className="menu__nav-item"><Link to="/about">О театре</Link></li>
                        <li className="menu__nav-item"><Link to="/team">Команда</Link></li>
                        <li className="menu__nav-item"><Link to="/projects">Проекты</Link></li>
                        <li className="menu__nav-item"><Link to="/contacts">Контакты</Link></li>
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


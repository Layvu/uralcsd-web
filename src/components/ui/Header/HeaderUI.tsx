import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="wrap header__wrap">
                <Link to="/" className="logo header__logo" onClick={onMenuToggle}>
                    <SvgIcon id="ellipseMock" title="Logotype" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <Link to="/afisha">Афиша</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/performances">Спектакли</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/about">О театре</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/team">Команда</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/projects">Проекты</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/contacts">Контакты</Link>
                        </li>
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
            </div>
        </header>
    );
};

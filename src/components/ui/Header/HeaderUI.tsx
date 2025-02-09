import './Header.scss';
import React from 'react';

import { HeaderUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="wrap header__wrap">
                <button className="btn-reset logo header__logo" onClick={onMenuToggle}>
                    <SvgIcon id="ellipseMock" title="Logotype" />
                </button>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="/">Афиша</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/">Спектакли</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/">О театре</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/">Команда</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/">Проекты</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="/">Контакты</a>
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

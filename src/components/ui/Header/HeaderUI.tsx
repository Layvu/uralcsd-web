import './Header.scss';

import React from 'react';

import { HeaderUIProps } from './type';

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="wrap header__wrap">
                <button className="btn-reset logo header__logo" onClick={onMenuToggle}>
                    <svg aria-hidden="true">
                        <use xlinkHref="img/sprite.svg#ellipseMock"></use>
                    </svg>
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
                        <svg className="header__social-media-icon" aria-hidden="true">
                            <use xlinkHref="img/sprite.svg#ellipseMock"></use>
                        </svg>
                    </a>
                    <a href="#" className="header__social-media-item">
                        <svg className="header__social-media-icon" aria-hidden="true">
                            <use xlinkHref="img/sprite.svg#ellipseMock"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

import "./Header.scss";

import React from "react";

import { HeaderUIProps } from "./type";

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
    return (
        <header className="header">
            <div className="wrap header__container">
                <button className="header__logo-container" onClick={onMenuToggle}>
                    <svg className="logo" aria-hidden="true">
                        <use xlinkHref="img/sprite.svg#iconName"></use>
                    </svg>
                </button>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item"><a href="/">Афиша</a></li>
                        <li className="header__nav-item"><a href="/">Спектакли</a></li>
                        <li className="header__nav-item"><a href="/">О театре</a></li>
                        <li className="header__nav-item"><a href="/">Команда</a></li>
                        <li className="header__nav-item"><a href="/">Проекты</a></li>
                        <li className="header__nav-item"><a href="/">Контакты</a></li>
                    </ul>
                </nav>
                <div className="header__social-media">
                    <a href="#" className="header__social-media-item">
                        <svg className="header__social-media-icon" aria-hidden="true">
                            <use xlinkHref="img/sprite.svg#iconName"></use>
                        </svg>
                    </a>
                    <a href="#" className="header__social-media-item">
                        <svg className="header__social-media-icon" aria-hidden="true">
                            <use xlinkHref="img/sprite.svg#iconName"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

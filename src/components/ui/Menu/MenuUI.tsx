//import s from "./Menu.module.scss";
import './Menu.scss';
import { CSSTransition } from 'react-transition-group';

import React from 'react';
import { Link } from 'react-router-dom';

import { MenuProps } from './type';

// import { Social } from "@components/Shared/Social";
import { SvgIcon } from '@components/Shared/SvgIcon';

export const MenuUI: React.FC<MenuProps> = ({ isOpen }) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={400}
            classNames={{
                enter: 'menu--enter',
                enterActive: 'menu--enter-active',
                exit: 'menu--exit',
                exitActive: 'menu--exit-active',
            }}
            unmountOnExit
        >
            <div className="menu">
                <div className="wrap menu__wrap">
                    <Link to="/" className="logo menu__logo">
                        <SvgIcon id="ellipseMock" title="Logotype" />
                    </Link>

                    <nav className="menu__nav">
                        <ul className="menu__nav-list">
                            <li className="menu__nav-item">
                                <Link to="/afisha">Афиша</Link>
                            </li>
                            <li className="menu__nav-item">
                                <Link to="/performances">Спектакли</Link>
                            </li>
                            <li className="menu__nav-item">
                                <Link to="/about">О театре</Link>
                            </li>
                            <li className="menu__nav-item">
                                <Link to="/team">Команда</Link>
                            </li>
                            <li className="menu__nav-item">
                                <Link to="/projects">Проекты</Link>
                            </li>
                            <li className="menu__nav-item">
                                <Link to="/contacts">Контакты</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* <Social className="menu__social" /> */}
                    <div className="menu__social-media">
                        <a href="#" className="menu__social-media-item">
                            <SvgIcon id="ellipseMock" title="VK icon" />
                        </a>
                        <a href="#" className="menu__social-media-item">
                            <SvgIcon id="ellipseMock" title="Telegram icon" />
                        </a>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

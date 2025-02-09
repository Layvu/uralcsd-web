//import s from "./Footer.module.scss";
import './Footer.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon } from '@components/Shared/SvgIcon';
//import { Social } from "@components/Shared/Social";

export const FooterUI: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__left">
                    <Link to="/" className="logo footer__logo" aria-label="logo">
                        <SvgIcon id="ellipseMock" title="Logotype" />
                    </Link>
                    <p className="footer__copyright">
                        &copy; 2025 Центр современной драматургии Екатеринбург. Все права защищены.
                    </p>
                    {/* <Social className="footer__social" /> */}
                    <div className="footer__social-media">
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="VK icon" />
                        </a>
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="Telegram icon" />
                        </a>
                    </div>
                </div>

                <div className="footer__contacts">
                    <h3 className="footer__title">КОНТАКТЫ</h3>
                    <p>Номер кассы</p>
                    <a href="tel:+71111111111" className="footer__phone">
                        +7(111)111-11-11
                    </a>
                    <p>Другой номер</p>
                    <a href="tel:+71111111111" className="footer__phone">
                        +7(111)111-11-11
                    </a>
                    <p>Email</p>
                    <a href="mailto:dramcentr@gmail.com" className="footer__email">
                        dramcentr@gmail.com
                    </a>
                </div>

                <div className="footer__schedule">
                    <h3 className="footer__title">ГРАФИК РАБОТЫ</h3>
                    <p>Рабочие дни</p>
                    <p className="footer__work-hours">Со вторника по воскресенье 9:00 — 21:00</p>
                    <p>Выходные дни</p>
                    <p className="footer__off-days">Понедельник</p>
                </div>
            </div>
        </footer>
    );
};

import './Footer.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon } from '@components/Shared/SvgIcon';
import { FooterUIProps } from './type';

export const FooterUI: React.FC<FooterUIProps> = React.memo(({ contactsInfo }) => {
    const { phones, email, workingDaysText, workingHours, daysOff, address } = contactsInfo;

    return (
        <footer className="footer">
            <div className="wrap footer__wrap">
                <div className="footer__left">
                    <Link to="/" className="logo footer__logo" aria-label="logo">
                        <SvgIcon id="logo_full" title="Logotype" />
                    </Link>
                    <p className="footer__copyright">
                        &copy; 2025 Центр современной драматургии Екатеринбург. Все права защищены.
                    </p>
                </div>
                <div className="footer__info">
                    <div className="footer__contacts">
                        <h3 className="footer__title title-h5--underline">КОНТАКТЫ</h3>
                        <ul className="footer__contacts-info-list">
                            <li className="footer__contacts-info-item">
                                <p className="footer__contacts-text">Номер кассы</p>
                                <a href={`tel:${phones?.boxOffice?.replace(/[^\d+]/g, '')}`} className="footer__contacts-info-value">
                                    {phones?.boxOffice}
                                </a>
                            </li>
                            <li className="footer__contacts-info-item">
                                <p className="footer__contacts-text">Основной телефон</p>
                                <a href={`tel:${phones?.main?.replace(/[^\d+]/g, '')}`} className="footer__contacts-info-value">
                                    {phones?.main}
                                </a>
                            </li>
                            <li className="footer__contacts-info-item">
                                <p className="footer__contacts-text">Email</p>
                                <a href={`mailto:${email}`} className="footer__contacts-info-value">
                                    {email}
                                </a>
                            </li>
                            <li className="footer__contacts-info-item">
                                <p className="footer__contacts-text">Адрес</p>
                                <p className="footer__contacts-adress footer__contacts-info-value">
                                    {address}
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__schedule">
                        <h3 className="footer__title title-h5--underline">ГРАФИК РАБОТЫ</h3>
                        <div className="footer__schedule-content-container">
                            <div className="footer__work-hours-container">
                                <p className="footer__work-days">Рабочие дни</p>
                                <div className="footer__work-time">
                                    <p className="footer__work-time-text">{workingDaysText}</p>
                                    <div className="footer__work-time-line">
                                        <p className="footer__work-time-start">{workingHours?.start}</p>
                                        —
                                        <p className="footer__work-time-end">{workingHours?.end}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__off-days-container">
                                <p className="footer__off-days">Выходные дни</p>
                                <p className="footer__off-days-text">{daysOff?.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
});

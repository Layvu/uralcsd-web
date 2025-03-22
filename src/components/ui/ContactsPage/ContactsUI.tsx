import React from 'react';
import './contacts-page.scss';

import { MainTitle } from '@components/Shared/MainTitle';
import { ContactsUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';
import { YandexMap } from '@components/Shared/YandexMap';

export const ContactsUI: React.FC<ContactsUIProps> = React.memo(({ contactsInfo }) => {
    const { address, workingDaysText, workingHours, daysOff, phones, email, faq } = contactsInfo;

    return (
        <section className="contacts-page">
            <div className="wrap contacts-page__wrap">
                <MainTitle className="contacts-page__main-title">Контакты</MainTitle>

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Наш адрес</h2>
                    <p className="contacts-page__info-text">{address}</p>

                    {/* Контейнер для карты */}
                    <div className="contacts-page__map-container">
                        <h2 className="contacts-page__section-title">Наше расположение</h2>
                        <YandexMap />
                    </div>
                </div>

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Время работы кассы</h2>
                    <p className="contacts-page__info-text">{workingDaysText}</p>
                    <p className="contacts-page__info-text">
                        {workingHours.start} - {workingHours.end}
                    </p>
                    <p className="contacts-page__info-text">Выходные дни: {daysOff.join(', ')}</p>
                </div>

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Телефоны</h2>
                    <p className="contacts-page__info-title">Основной телефон</p>
                    <a href={`tel:${phones.main.replace(/[^\d+]/g, '')}`} className="contacts-page__phone">
                        {phones.main}
                    </a>
                    <p className="contacts-page__info-title">Касса</p>
                    <a href={`tel:${phones.boxOffice.replace(/[^\d+]/g, '')}`} className="contacts-page__phone">
                        {phones.boxOffice}
                    </a>
                </div>

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Email</h2>
                    <a href={`mailto:${email}`} className="contacts-page__email">
                        {email}
                    </a>
                </div>

                {faq && faq.length > 0 && (
                    <div className="contacts-page__section">
                        <h2 className="contacts-page__section-title">FAQ</h2>
                        <div className="contacts-page__faq">
                            {faq.map((item, index) => (
                                <div key={index} className="contacts-page__faq-item">
                                    <h3 className="contacts-page__faq-question">{item.question}</h3>
                                    <p className="contacts-page__faq-answer">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Мы в социальных сетях</h2>
                    <div className="contacts-page__social-media">
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="VK icon" />
                        </a>
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="Telegram icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

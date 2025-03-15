import React from 'react';
import './contacts-page.scss';

import { MainTitle } from '@components/Shared/MainTitle';
import { ContactsUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';

export const ContactsUI: React.FC<ContactsUIProps> = React.memo(({ contactsInfo }) => {
    const { address, workingDaysText, workingHours, daysOff, phones, email, faq } = contactsInfo;

    return (
        <section className="contacts-page">
            <div className="wrap contacts-page__wrap">
                <MainTitle className="contacts-page__main-title">Контакты</MainTitle>

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Наш адрес</h2>
                    <p className="contacts-page__info-text">{address}</p>

                    {/* Yandex Maps iframe */}
                    <iframe
                        src={`https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&amp;source=constructor&amp;ll=60.614371%2C56.831631&amp;z=16&amp;pt=60.614371,56.831631&amp;text=${encodeURIComponent('ЦСД Екатеринбург')}`}
                        className="contacts-page__map"
                        frameBorder="0"
                    ></iframe>
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

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Социальные сети</h2>
                    <p className="contacts-page__info-text">Все новости – в телеграмм-канале.</p>
                    <div className="contacts-page__social-media">
                        {/* TODO: компонент */}
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="VK icon" />
                        </a>
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="Telegram icon" />
                        </a>
                    </div>
                </div>

                <div className="contacts-page__section">
                    <h2 className="contacts-page__section-title">Часто задаваемые вопросы</h2>
                    <div className="contacts-page__faq">
                        {faq.map((item, index) => (
                            <div key={index} className="contacts-page__faq-item">
                                <h3 className="contacts-page__faq-question">{item.question}</h3>
                                <p className="contacts-page__faq-answer">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

import React, { useState } from 'react';
import './contacts-page.scss';

import { ContactsUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';
import { YandexMap } from '@components/Shared/YandexMap';

export const ContactsUI: React.FC<ContactsUIProps> = React.memo(({ contactsInfo }) => {
    const { faq, social } = contactsInfo;

    const [openedFaqIndexes, setOpenedFaqIndexes] = useState<number[]>([]);

    const handleFaqClick = (index: number) => {
        setOpenedFaqIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="contacts-page wrap">
            <h1 className='visually-hidden'>FAQ</h1>

            <div className="contacts-page__social-section">
                <div className="contacts-page__social-title">
                    Следите за нами в социальных сетях и будьте в курсе событий!
                </div>
                <div className="contacts-page__social-links-container">
                    <a
                        href={social.tg}
                        className="contacts-page__social-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SvgIcon id="telegram" title="Telegram icon" />
                        Telegram-канал
                    </a>
                    <a
                        href={social.vk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contacts-page__social-link">
                        <SvgIcon id="vk" title="VK icon" />
                        <p>Сообщество ВК</p>
                    </a>
                </div>
            </div>

            {faq && faq.length > 0 && (
                <div className="contacts-page__faq-section">
                    <ul className="contacts-page__faq-list">
                        {faq.map((faqItem, index) => {
                            const isOpen = openedFaqIndexes.includes(index);
                            return (
                                <li key={faqItem.question} className="contacts-page__faq-item">
                                    <h2
                                        className={`contacts-page__faq-question title-h3 ${isOpen && 'contacts-page__faq-question--opened'} `}
                                        onClick={() => handleFaqClick(index)}
                                    >
                                        {faqItem.question}
                                    </h2>

                                    <ul
                                        className={`contacts-page__faq-answer-container ${isOpen ? '' : 'visually-hidden'}`}
                                    >
                                        {faqItem.info.map((info) => (
                                            <li
                                                className="contacts-page__faq-answer-info"
                                                key={info.answer}
                                            >
                                                <h3 className="contacts-page__faq-answer-title title-h6">
                                                    {info?.subtitle}
                                                </h3>
                                                <p className="contacts-page__faq-answer-text">
                                                    {info.answer}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            <YandexMap />
        </section>
    );
});

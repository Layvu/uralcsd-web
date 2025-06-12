import React, { useState } from 'react';
import './contacts-page.scss';
import { ContactsUIProps } from './type';
import { SvgIcon } from '@components/Shared/SvgIcon';
import { YandexMap } from '@components/Shared/YandexMap';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';

export const ContactsUI: React.FC<ContactsUIProps> = React.memo(({ contactsInfo }) => {
    const { faq, social } = contactsInfo;

    const [openedFaqIndexes, setOpenedFaqIndexes] = useState<number[]>([]);

    const handleFaqClick = (index: number) => {
        setOpenedFaqIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
    };

    return (
        <>
            <SEO
                title="Социальные сети и FAQ - Центр современной драматургии"
                description="Социальные сети театра ЦСД, театр на карте. Ответы на часто задаваемые вопросы: как добраться, как купить билет, график работы"
                keywords="контакты, адрес, FAQ, соцсети, вк, телеграмм, телефон, email, театр, ЦСД, Центр современной драматургии, график"
                path={ROUTES.CONTACTS}
            />

            <section className="contacts-page wrap">
                <h1 className="visually-hidden">FAQ</h1>

                <div className="contacts-page__social-section">
                    <div className="contacts-page__social-title">
                        Следите за нами в социальных сетях и будьте в курсе событий!
                    </div>
                    <div className="contacts-page__social-links-container">
                        <a
                            href={social.tg}
                            className="contacts-page__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SvgIcon id="telegram" title="Telegram icon" />
                            <p>Telegram-канал</p>
                        </a>
                        <a
                            href={social.vk}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contacts-page__social-link"
                        >
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
                                        <div className={`contacts-page__faq-title-container ${isOpen && 'contacts-page__faq-title-container--opened'
                                        } `}
                                        onClick={() => handleFaqClick(index)}
                                        >
                                            <h2 className='contacts-page__faq-question'>
                                                {faqItem.question}
                                            </h2>
                                            <SvgIcon 
                                                className="contacts-page__faq-arrow" 
                                               
                                                id={`${isOpen ? 'faq-item__arrow-up' : 'faq-item__arrow-down'}`}      
                                                title="arrow" />
                                        </div>

                                        <ul
                                            className={`contacts-page__faq-answer-container ${
                                                isOpen ? 'contacts-page__faq-answer-container--visible' : ''
                                            }`}
                                        >
                                            {faqItem.info.map((info) => (
                                                <li className="contacts-page__faq-answer-info" key={info.answer}>
                                                    <h3 className="contacts-page__faq-answer-title">
                                                        {info?.subtitle}
                                                    </h3>
                                                    <p className="contacts-page__faq-answer-text">{info.answer}</p>
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
        </>
    );
});

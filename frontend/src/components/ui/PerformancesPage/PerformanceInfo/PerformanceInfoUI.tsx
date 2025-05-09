import React from 'react';
import './PerformanceInfo.scss';

import { PerformanceInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import { openTicketsWidget } from 'services/yandexTickets';
import { Link } from 'react-router-dom';
import { MainTitle } from '@components/Shared/MainTitle';
import { formatDateTime, formatToWeekday } from 'utils/timeFormat';

export const PerformanceInfoUI: React.FC<PerformanceInfoUIProps> = ({ performance, actorsWithRoles, currentAfishaItems }) => {
    const handleBuyTicket = (sessionId: string) => {
        if (sessionId) {
            openTicketsWidget(sessionId);
        }
    };

    const { title, description, additionalInfo, ageLimit, duration, dramatist, images, isWithIntermission, isActual } = performance;

    const performanceImages = images?.map((image) => image.url);
    return (

        <div className="performance-info">
            <DefaultBanner name={title} images={performanceImages || []} />
            <div className="performance-info__wrap wrap">

                <section className="performance-info__main-section">
                    <div className="performance-info__title-section">
                        <div className="performance-info__title-container">
                            <MainTitle className="performance-info__title title-h2--underline">«{title.trim()}»</MainTitle>
                            <p className="performance-info__additional-description">{additionalInfo}</p>
                        </div>
                        <div className="performance-info__tags-container">
                            <div className="performance-info__duration-container">
                                <p className="performance-info__duration">{duration}</p>
                                <p className="performance-info__addition">{isWithIntermission && 'дополнение'}</p>
                            </div>
                            {ageLimit != null && <div className="performance-info__age-rate">
                                <p>{ageLimit}+</p>
                            </div>
                            }
                            <div className="performance-info__tags">
                                <p className='performance-info__tag tag--big'>текст</p>
                            </div>
                        </div>
                    </div>
                    <div className="performance-info__description-section">
                        <p className="performance-info__description-title title-h4">Описание спектакля</p>
                        <p className="performance-info__description">{description}</p>
                    </div>


                    {/* Циклом смотреть какие есть данные в афише по этому спектаклю */}
                    {/* <button className="performance-info__ya-button select-button" onClick={handleBuyTicket}>
                        Купить билет
                    </button> */}
                    <div className="performance-info__crew">
                        <h2 className="performance-info__crew-title title-h4">Постановщики</h2>
                        {/* <ul className="performance-info__crew-list">
                                {crew.map((member, key) => (
                                    // TODO
                                    // member: IMember и из него уже вытаскивать роль в этом спектакле
                                    <li
                                        key={`${member.name}-${member.role}-${key}`}
                                        className="performance-info__crew-item"
                                    >
                                        {member.role} — {member.name}
                                    </li>
                                ))}
                            </ul> */}
                    </div>

                    {actorsWithRoles.length > 0 &&
                        <div className="performance-info__cast">
                            <h2 className="performance-info__cast-title title-h4">Актерский состав</h2>
                            <ul className="performance-info__cast-list">
                                {actorsWithRoles.map((item) => (
                                    <li key={`${item.actor?.name}-${item.role}`}>
                                        <Link to={`/team/${item.actor?.slug}`} key={item.actor?.id} className="performance-info__cast-item">
                                            <p className="performance-info__cast-actor">{item.actor?.name}</p>
                                            <p className="performance-info__cast-role">{item.role}</p>
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    }


                </section>
                {currentAfishaItems.length > 0 ?
                    <section className='performance-info__ticket-section'>
                        <ul className="performance-info__ticket-list">
                            {currentAfishaItems.map((afishaItem) => {
                                return (
                                    <li key={afishaItem.id} className='performance-info__ticket-item'>
                                        <div className='performance-info__ticket-date-container'>
                                            <p className="performance-info__ticket-date">
                                                {formatDateTime(afishaItem.date)}
                                            </p>
                                            <p className="performance-info__ticket-weekday">
                                                {formatToWeekday(afishaItem.date)}
                                            </p>
                                        </div>
                                        <button className='performance-info__ticket-button' onClick={() => handleBuyTicket(afishaItem.sessionId)}>
                                            Билеты
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                    :
                    <section className='performance-info__ticket-section'>
                        <div className="performance-info__no-performances-container">
                            <button disabled className="performance-info__no-performances-button">
                                Нет в показе
                            </button>
                            <p className="performance-info__no-performances-info">
                            Следите за афишей театра ЦСД, чтобы не пропустить показ!
                            </p>
                        </div>
                    </section>
                }

            </div>
        </div>

    );
};

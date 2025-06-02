import React from 'react';
import './PerformanceInfo.scss';

import { PerformanceInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import { openTicketsWidget } from 'services/yandexTickets';
import { Link } from 'react-router-dom';
import { MainTitle } from '@components/Shared/MainTitle';
import { formatToFullDateTime, formatToWeekday } from 'utils/timeFormat';
import { proseedBackendText } from 'utils/proceedBackendText';
export const PerformanceInfoUI: React.FC<PerformanceInfoUIProps> = ({ performance, actorsWithRoles, currentAfishaItems }) => {
    const handleBuyTicket = (sessionId: string) => {
        if (sessionId) {
            openTicketsWidget(sessionId);
        }
    };

    const { title, description, additionalInfo, ageLimit, duration, dramatist, images, intermissionInfo, directors, choreographers } = performance;

    const paragraphs = description?.split('\n').filter((p) => p.trim().length > 0);

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
                                <p className="performance-info__addition">{intermissionInfo}</p>
                            </div>
                            {ageLimit != null && <div className="performance-info__age-rate">
                                <p>{ageLimit}+</p>
                            </div>
                            }
                            {performance.isPremiere && <div className="performance-info__tags">
                                <p className='performance-info__tag tag--big'>Премьера</p>
                            </div> }
                        </div>
                    </div>
                    {description &&
                        <div className="performance-info__description-section">
                            <p className="performance-info__description-title title-h4">Описание спектакля</p>
                            <div className="performance-info__description-container">
                                {paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="performance-info__description-paragraph"
                                        dangerouslySetInnerHTML={{ __html: proseedBackendText(paragraph) }}
                                    />
                                ))}
                            </div>
                        </div>}

                    {/* Постановщики, включает в себя хореографов, режиссеров и драматурга  */}
                    {(dramatist?.length > 0 || directors?.length > 0 || choreographers?.length > 0) &&
                        <div className="performance-info__crew">
                            <h2 className="performance-info__crew-title title-h4">Постановщики</h2>
                            <ul className="performance-info__crew-list">
                                {dramatist && <li className="performance-info__crew-item performance-info__dramatist">
                                    <p className="performance-info__crew-member">{dramatist}</p>
                                    <p className="performance-info__crew-position">драматург</p>
                                </li>}
                                {directors.map((director) => (
                                    <li key={`${director?.name}-${director.id}`}>
                                        <Link to={`/team/${director?.slug}`} className="performance-info__crew-item">
                                            <p className="performance-info__crew-member">{director?.name} {director?.surname}</p>
                                            <p className="performance-info__crew-position">Режиссер</p>
                                        </Link>
                                    </li>
                                ))}
                                {choreographers.map((choreographer) => (
                                    <li key={`${choreographer?.name}-${choreographer.id}`}>
                                        <Link to={`/team/${choreographer?.slug}`} className="performance-info__crew-item">
                                            <p className="performance-info__crew-member">{choreographer?.name} {choreographer?.surname}</p>
                                            <p className="performance-info__crew-position">Xореограф</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }


                    {/* Актерский состав */}
                    {actorsWithRoles.length > 0 &&
                        <div className="performance-info__cast">
                            <h2 className="performance-info__cast-title title-h4">Актерский состав</h2>
                            <ul className="performance-info__cast-list">
                                {actorsWithRoles.map((item) => (
                                    <li key={`${item.actor?.name}-${item.role}`}>
                                        <Link to={`/team/${item.actor?.slug}`} key={item.actor?.id} className="performance-info__cast-item">
                                            <p className="performance-info__cast-actor">{item.actor?.name} {item.actor?.surname}</p>
                                            <p className="performance-info__cast-role">{item.role}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </section>


                {/* секция покупки билетов на этот спектакль, даты которого есть в репертуаре */}
                {currentAfishaItems.length > 0 ?
                    <section className='performance-info__ticket-section'>
                        <ul className="performance-info__ticket-list">
                            {currentAfishaItems.map((afishaItem) => {
                                return (
                                    <li key={afishaItem.id} className='performance-info__ticket-item'>
                                        <div className='performance-info__ticket-date-container'>
                                            <p className="performance-info__ticket-date">
                                                {formatToFullDateTime(afishaItem.date)}
                                            </p>
                                            <p className="performance-info__ticket-weekday">
                                                {formatToWeekday(afishaItem.date)}
                                            </p>
                                        </div>
                                        <button
                                            className='performance-info__ticket-button ticket-button'
                                            onClick={() => handleBuyTicket(afishaItem.sessionId)}
                                            disabled={!afishaItem.sessionId}
                                            style={{ cursor: !afishaItem.sessionId ? 'not-allowed' : 'pointer' }}
                                        >

                                            Билеты
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                    :
                    <section className='performance-info__no-ticket-section'>
                        <div className="performance-info__no-performances-container">
                            <p className="performance-info__no-performances-info">
                                Следите за афишей театра ЦСД, чтобы не пропустить показ!
                            </p>
                            <button disabled className="performance-info__no-performances-button">
                                Нет в показе
                            </button>
                        </div>
                    </section>
                }

            </div>
        </div>

    );
};

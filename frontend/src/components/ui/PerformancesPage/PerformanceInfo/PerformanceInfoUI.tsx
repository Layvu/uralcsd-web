import React from 'react';
import './PerformanceInfo.scss';

import { PerformanceInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import { openTicketsWidget } from 'services/yandexTickets';
import { Link } from 'react-router-dom';

export const PerformanceInfoUI: React.FC<PerformanceInfoUIProps> = ({ performance, actorsWithRoles }) => {
    // const handleBuyTicket = () => {
    //     if (sessionId) {
    //         openTicketsWidget(sessionId);
    //     }
    // };

    const performanceImages = performance.images?.map((image) => image.url);
    return (
        <>
            <div className="performance-info">
                <DefaultBanner name={performance.title} images={performanceImages || []} />

                <div className="performance-info__wrap wrap">
                    <h2 className="performance-info__name">{performance.title}</h2>
                    <p className="performance-info__additional">{performance.additionalInfo}</p>
                    <p className="performance-info__description-title">Описание</p>
                    <p className="performance-info__description">{performance.description}</p>


                    {/* Циклом смотреть какие есть данные в афише по этому спектаклю */}
                    {/* <button className="performance-info__ya-button select-button" onClick={handleBuyTicket}>
                        Купить билет
                    </button> */}

                    <div className="performance-info__details">
                        <div className="performance-info__cast">
                            <h3 className="performance-info__cast-title">Актерский состав</h3>
                            <ul className="performance-info__cast-list">
                                {actorsWithRoles.map((item) => (
                                    <li key={`${item.actor?.name}-${item.role}`} className="performance-info__cast-item">
                                        <Link to={`/team/${item.actor?.slug}`} key={item.actor?.id}>
                                            {item.actor?.name} — {item.role}
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="performance-info__crew">
                            <h3 className="performance-info__crew-title">Постановщики</h3>
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
                    </div>
                </div>
            </div>
        </>
    );
};

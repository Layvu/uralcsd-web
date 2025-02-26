import React from 'react';
import './PerformanceInfo.scss';

import { PerformanceInfoUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';

export const PerformanceInfoUI: React.FC<PerformanceInfoUIProps> = ({ performance }) => {
    return (
        <>
            <div className="performance-info">
                <DefaultBanner performance={performance} />

                <div className="performance-info__wrap wrap">
                    <h2 className="performance-info__name">{performance.name}</h2>
                    <p className="performance-info__additional">Прочее</p>
                    <p className="performance-info__description-title">Описание</p>
                    <p className="performance-info__description">{performance.description}</p>

                    <div className="performance-info__details">
                        <div className="performance-info__cast">
                            <h3 className="performance-info__cast-title">Актерский состав</h3>
                            <ul className="performance-info__cast-list">
                                {performance.cast.map((actor) => (
                                    <li key={actor.name} className="performance-info__cast-item">
                                        {actor.name} — {actor.role}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="performance-info__crew">
                            <h3 className="performance-info__crew-title">Постановщики</h3>
                            <ul className="performance-info__crew-list">
                                {performance.crew.map((member) => ( 
                                    // TODO
                                    // member: IMember и из него уже вытаскивать роль в этом спектакле
                                    <li key={member.name} className="performance-info__crew-item">
                                        {member.role} — {member.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

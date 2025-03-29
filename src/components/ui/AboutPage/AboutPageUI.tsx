import React from 'react';
import { MainTitle } from '@components/Shared/MainTitle';
import { AboutPageUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';

import './about-page.scss';

export const AboutPageUI: React.FC<AboutPageUIProps> = React.memo(({ theaterInfo }) => {
    // Разбиваем описание на абзацы по переносам строк
    const paragraphs = theaterInfo.description.split('\n').filter((p) => p.trim().length > 0);

    return (
        <div className="about-page">
            <div className="container about-page__container">
                <MainTitle className="about-page__main-title">О театре</MainTitle>

                <div className="about-page__image-container">
                    <img src={theaterInfo.image} alt="Фотография театра" className="about-page__image" />
                </div>

                <div className="about-page__description wrap">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="about-page__paragraph">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="about-page__partners">
                    <h2 className="about-page__partners-title">Наши партнёры</h2>
                    <DefaultBanner name="Партнёр" images={theaterInfo.partnersImages} />
                </div>
            </div>
        </div>
    );
});

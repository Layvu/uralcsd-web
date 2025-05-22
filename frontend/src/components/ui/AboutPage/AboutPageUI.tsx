import React from 'react';
import { MainTitle } from '@components/Shared/MainTitle';
import { AboutPageUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';

import './about-page.scss';
import { PartnersBanner } from '@components/AboutPage/PartnersBanner';

export const AboutPageUI: React.FC<AboutPageUIProps> = React.memo(({ theaterInfo }) => {
    // Разбиваем описание на абзацы по переносам строк
    const paragraphs = theaterInfo.description.split('\n').filter((p) => p.trim().length > 0);

    return (
        <section className="about-page">
            <DefaultBanner name="Фотография театра" images={theaterInfo.images.map((image) => image.url)} />

            <div className="container about-page__wrap wrap">

                <div className="about-page__title-container">
                    <MainTitle className="about-page__main-title title-h2--underline">О театре</MainTitle>
                    <div className="about-page__description">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="about-page__paragraph">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>


                <div className="about-page__partners">
                    <h2 className="about-page__partners-title title-h2--underline">Наши партнёры</h2>
                    <PartnersBanner partners={theaterInfo.partners}/>
                </div>
            </div>
        </section>
    );
});

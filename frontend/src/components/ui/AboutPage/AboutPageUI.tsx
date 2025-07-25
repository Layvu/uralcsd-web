import React from 'react';
import { AboutPageUIProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import './about-page.scss';
import { PartnersBanner } from '@components/AboutPage/PartnersBanner';
import { parseParagraphs, proseedBackendText } from 'utils/proceedBackendText';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import { Background } from '@components/Shared/Background';

export const AboutPageUI: React.FC<AboutPageUIProps> = React.memo(({ theaterInfo }) => {
    // Разбиваем описание на абзацы по переносам строк
    const paragraphs = parseParagraphs(theaterInfo.description);

    return (
        <div className="app-wrapper">
            <SEO
                title="О театре - Центр современной драматургии"
                description="История и миссия театра ЦСД"
                keywords="театр, ЦСД, Центр современной драматургии, история театра, о театре"
                path={ROUTES.ABOUT}
            />
            <Background needShift={theaterInfo.images.length > 0}/>
            <section className="about-page">
                <DefaultBanner name="Фотография театра" images={theaterInfo.images.map((image) => image.url)} />

                <div className="container about-page__wrap wrap">
                    <div className="about-page__title-container">
                        <h1 className="about-page__main-title">{theaterInfo.title}</h1>
                        <div className="about-page__description">
                            {paragraphs?.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="about-page__paragraph"
                                    dangerouslySetInnerHTML={{ __html: proseedBackendText(paragraph) }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="about-page__partners">
                        <h2 className="about-page__partners-title">Наши партнёры</h2>
                        <PartnersBanner partners={theaterInfo.partners} />
                    </div>
                </div>
            </section>
        </div>
    );
});

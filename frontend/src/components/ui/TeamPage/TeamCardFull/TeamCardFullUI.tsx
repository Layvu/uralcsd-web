import React from 'react';
import { Link } from 'react-router-dom';
import { TeamCardFullProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';

import './team-card-full.scss';
import { MainTitle } from '@components/Shared/MainTitle';
import { proseedBackendText } from 'utils/proceedBackendText';

export const TeamCardFullUI: React.FC<TeamCardFullProps> = React.memo(({ member, performancesWithRoles }) => {

    const paragraphs = member?.biography?.split('\n').filter((p) => p.trim().length > 0);

    return (
        <section className="team-card-full">
            <div className="team-card-full__slider">
                <DefaultBanner
                    name={member.name}
                    images={member.images ? member.images.map((image: { url: string }) => image.url || '') : []}
                />
            </div>

            <div className="team-card-full__info wrap">
                <div className="team-card-full__photo">
                    <img src={member.mainPhoto?.url} alt={member.surname} />
                </div>
                <div className="team-card-full__info-container">
                    <div className="team-card-full__name-container">
                        <MainTitle className="team-card-full__name title-h2--underline">{member.name} {member.surname}</MainTitle>
                        <div className="team-card-full__position">{member.position}</div>
                    </div>
                    <div className="team-card-full__biography-container">
                        <h2 className="title-h4">Биография</h2>
                        <div className="team-card-full__biography">
                            {paragraphs?.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="team-card-full__biography-paragraph"
                                    dangerouslySetInnerHTML={{ __html: proseedBackendText(paragraph) }}
                                />
                            ))}
                        </div>
                    </div> 
                    <div className="team-card-full__spectacles-container">
                        <h2 className="title-h4">Спектакли</h2>
                        <div className="team-card-full__spectacles">
                            {performancesWithRoles.map(({ performance, role }) =>
                                performance ? (
                                    <Link to={`/performances/${performance?.slug}`} key={performance?.id}>
                                        <div className="team-card-full__spectacle-container">
                                            <div className="team-card-full__spectacle-title">{performance.title}</div>
                                            <div className="team-card-full__spectacle-role">{role}</div>
                                            
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="team-card-full__spectacle-container" key={`no-performance-${member.id}-${role}`}>
                                        <div className="team-card-full__spectacle-title">Спектакль не найден </div>
                                        <div className="team-card-full__spectacle-role">{role}</div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

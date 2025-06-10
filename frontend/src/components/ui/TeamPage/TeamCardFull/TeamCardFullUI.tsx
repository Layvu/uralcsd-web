import React from 'react';
import { Link } from 'react-router-dom';
import { TeamCardFullProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';
import { proseedBackendText } from 'utils/proceedBackendText';
import placeholder from '@assets/backgrounds/member-placeholder.png';
import './team-card-full.scss';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';

export const TeamCardFullUI: React.FC<TeamCardFullProps> = React.memo(
    ({ member, performancesWithRoles, directedPerformances, choreographedPerformances }) => {
        const paragraphs = member?.biography?.split('\n').filter((p) => p.trim().length > 0) || [];
        const { biography, name, surname, position } = member;

        // Описание страницы для SEO
        const seoDescription = React.useMemo(() => {
            return biography?.slice(0, 160) || `Биография актёра ${name} ${surname} театра ЦСД`;
        }, [name, surname, biography]);

        // Ключевые слова для SEO
        const seoKeywords = React.useMemo(() => {
            const baseKeywords = ['театр', 'ЦСД', 'актёр', 'биография', 'спектакли', name, surname, position];
            const combined = [...baseKeywords];

            if (biography) {
                const biographyWords = biography
                    .split(' ')
                    .filter((word) => word.length > 3 && word.match(/^[a-zA-Zа-яА-Я0-9-]+$/))
                    .slice(0, 5);
                combined.push(...biographyWords);
            }

            return Array.from(new Set(combined)).join(', ');
        }, [name, surname, position, biography]);

        return (
            <>
                <SEO
                    title={`${member.name} ${member.surname} — Актёр театра ЦСД`}
                    description={seoDescription}
                    keywords={seoKeywords}
                    path={`${ROUTES.TEAM}/${member.slug}`}
                />

                <section className="team-card-full">
                    <div className="team-card-full__slider">
                        <DefaultBanner name={name} images={member.images?.map((image) => image.url || '') || []} />
                    </div>

                    <div className="team-card-full__info wrap">
                        <div className="team-card-full__photo">
                            <img src={member.mainPhoto?.url || placeholder} alt={`${name} ${surname}`} />
                        </div>

                        <div className="team-card-full__info-container">
                            <div className="team-card-full__name-container">
                                <h1 className="team-card-full__name">
                                    {name} {surname}
                                </h1>
                                <div className="team-card-full__position">{position}</div>
                            </div>

                            {paragraphs.length > 0 && <BiographySection paragraphs={paragraphs} />}

                            <PerformancesSection
                                performancesWithRoles={performancesWithRoles}
                                directedPerformances={directedPerformances}
                                choreographedPerformances={choreographedPerformances}
                                memberId={member.id}
                            />
                        </div>
                    </div>
                </section>
            </>
        );
    },
);

const BiographySection: React.FC<{ paragraphs: string[] }> = ({ paragraphs }) => (
    <div className="team-card-full__biography-container">
        <h2 className="title-h4">Биография</h2>
        <div className="team-card-full__biography">
            {paragraphs.map((paragraph, index) => (
                <p
                    key={index}
                    className="team-card-full__biography-paragraph"
                    dangerouslySetInnerHTML={{ __html: proseedBackendText(paragraph) }}
                />
            ))}
        </div>
    </div>
);

const PerformancesSection: React.FC<{
    performancesWithRoles: TeamCardFullProps['performancesWithRoles'];
    directedPerformances: TeamCardFullProps['directedPerformances'];
    choreographedPerformances: TeamCardFullProps['choreographedPerformances'];
    memberId: string;
}> = ({ performancesWithRoles, directedPerformances, choreographedPerformances, memberId }) => {
    const hasPerformances =
        performancesWithRoles.length > 0 || directedPerformances.length > 0 || choreographedPerformances.length > 0;

    if (!hasPerformances) return null;

    return (
        <div className="team-card-full__spectacles-container">
            <h2 className="title-h4">Спектакли</h2>
            <div className="team-card-full__spectacles">
                {performancesWithRoles.map(({ performance, role }) => (
                    <PerformanceItem
                        key={performance?.id || `role-${role}`}
                        performance={performance}
                        role={role}
                        memberId={memberId}
                    />
                ))}
                {directedPerformances.map((performance) => (
                    <PerformanceItem
                        key={performance?.id || 'directed'}
                        performance={performance}
                        role="Режиссер"
                        memberId={memberId}
                    />
                ))}
                {choreographedPerformances.map((performance) => (
                    <PerformanceItem
                        key={performance?.id || 'choreographed'}
                        performance={performance}
                        role="Хореограф"
                        memberId={memberId}
                    />
                ))}
            </div>
        </div>
    );
};

const PerformanceItem: React.FC<{
    performance: { slug?: string; id?: string; title: string } | null | undefined;
    role: string;
    memberId: string;
}> = ({ performance, role, memberId }) => {
    if (!performance) {
        return (
            <div className="team-card-full__spectacle-container" key={`no-performance-${memberId}`}>
                <div className="team-card-full__spectacle-title">Спектакль не найден</div>
                <div className="team-card-full__spectacle-role">{role}</div>
            </div>
        );
    }

    return (
        <Link to={`/performances/${performance.slug}`} key={performance.id}>
            <div className="team-card-full__spectacle-container">
                <div className="team-card-full__spectacle-title">{performance.title}</div>
                <div className="team-card-full__spectacle-role">{role}</div>
            </div>
        </Link>
    );
};

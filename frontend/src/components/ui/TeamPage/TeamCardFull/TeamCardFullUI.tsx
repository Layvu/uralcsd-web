import React from 'react';
import { Link } from 'react-router-dom';
import { TeamCardFullProps } from './type';
import { DefaultBanner } from '@components/Shared/DefaultBanner';

export const TeamCardFullUI: React.FC<TeamCardFullProps> = React.memo(({ member, performancesWithRoles }) => {
    if (!member){
        return <div>Загрузка</div>;
    };
    return (
        <section className='team-card-full'>
            <div className='team-card-full__slider '>
                <DefaultBanner 
                    name={member.name} 
                    images={member.images ? member.images.map((image: {url:string}) => 
                        image.url ? image.url : '') : []}/>
            </div>
            {/* TODO Продюссеров еще надо рассмотреть */}
            <div>{member.name}</div>
            <div>{member.surname}</div>
            <img src={member.mainPhoto?.url} />

            {performancesWithRoles.map(({ performance, role }) =>
                performance ? (
                    <Link to={`/performances/${performance?.slug}`} key={performance?.id}>
                        <div>
                            {performance.title} - {role}
                        </div>
                    </Link>
                ) : (
                    <div key={`no-performance-${member.id}-${role}`}>Спектакль не найден - {role}</div>
                ),
            )}

        </section>
    );
});

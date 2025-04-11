import React from 'react';
import { Link } from 'react-router-dom';
import { TeamCardFullProps } from './type';

export const TeamCardFullUI: React.FC<TeamCardFullProps> = React.memo(({ member, performancesWithRoles }) => {
    if (!member){
        return <div>Загрузка</div>;
    };
    return (
        <>
            {/* TODO Продюссеров еще надо рассмотреть */}
            <div>{member.name}</div>
            <div>{member.surname}</div>

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

            {/* Проверка */}
            <img src={member?.mainPhoto?.url} />
            {member?.images?.map((image: {url:string}) => image ? (<img src={image.url} key={image.url} />) : null)}
        </>
    );
});

import React from 'react';
import { Link } from 'react-router-dom';
import { TeamCardFullProps } from './type';

export const TeamCardFullUI: React.FC<TeamCardFullProps> = React.memo(({ member, performancesWithRoles }) => {
    return (
        <>
            {/* TODO Продюссеров еще надо рассмотреть */}
            <div>{member.name}</div>
            <div>{member.surname}</div>
            {performancesWithRoles.map(({ performance, role }, index) =>
                performance ? (
                    <Link to={`/performances/${performance.slug}`} key={index}>
                        <div>
                            {performance.name} - {role}
                        </div>
                    </Link>
                ) : (
                    <div key={index}>Спектакль не найден - {role}</div>
                ),
            )}
        </>
    );
});

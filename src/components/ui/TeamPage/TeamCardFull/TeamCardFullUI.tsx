import React from 'react';
import { TeamCardFullProps } from './type';
import { mockPerformances } from 'mockData';
import { Link } from 'react-router-dom';

export const TeamCardFullUI: React.FC<TeamCardFullProps> = React.memo(({ member }) => {
    return (
        <>
            <div>{member.name}</div>
            <div>{member.surname}</div>
            {member.performances?.map((performance) => {
                const currentPerformance = mockPerformances.find((p) => p.id === performance.performanceID);
                // TODO
                // Продюссеров еще надо рассмотреть
                return currentPerformance ? (
                    <Link to={`/performances/${currentPerformance.slug}`} key={performance.performanceID}>
                        <div>{currentPerformance.name} - {performance.role?.join(', ')}</div>
                    </Link>
                ) : (
                    <div key={performance.performanceID}>{performance.role?.join(', ')}</div>
                );
            })}
        </>
    );
});
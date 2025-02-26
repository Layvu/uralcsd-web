import { TeamCardFullUI } from '@components/ui/TeamPage/TeamCardFull';
import { mockMembers } from 'mockData';
import React from 'react';
import { useParams } from 'react-router-dom';


export const TeamCardFull: React.FC = React.memo(() => {
    const { slug } = useParams<{ slug: string }>();

    const member = mockMembers.find((member) => member.slug === slug);

    if (!member) {
        return <div>Сотрудник не найден</div>;
    }

    return <TeamCardFullUI member={member} />;
});

import React from 'react';
import { MainTitle } from '../Shared/MainTitle';
import { TeamPageProps } from './type';
import { TeamFilter } from '@components/TeamPage/TeamFilter';
import { TeamList } from '@components/TeamPage/TeamList';

import './team-page.scss';
import { mockMembers } from 'mockData';
import { IMember } from 'interfases/IMember';


export const TeamPageUI: React.FC<TeamPageProps> = React.memo(({ selectedCategory, onSelectCategory }) => {
    const members = mockMembers as IMember[];
    return (
        <section className='team-page wrap'>
            <MainTitle className='team-page__title'>Команда</MainTitle>
            <TeamFilter
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory} />

            <TeamList category={selectedCategory} members={members} />
        </section>
    );
});

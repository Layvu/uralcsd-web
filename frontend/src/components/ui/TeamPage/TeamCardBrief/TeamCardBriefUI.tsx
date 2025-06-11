import React, { useState } from 'react';
import { TeamCardBriefProps } from './type';
import './team-card-brief.scss';
import { Link } from 'react-router-dom';
import placeholder from '@assets/backgrounds/member-placeholder.png';

export const TeamCardBriefUI: React.FC<TeamCardBriefProps> = React.memo(({ member }) => {
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        setImageError(true);
    };

    const { name, surname, slug, position, mainPhoto } = member;

    const imageUrl = imageError ? placeholder : mainPhoto?.url ? mainPhoto?.url : placeholder;
    
    return (
        <Link to={`/team/${slug}`} className="team-card-brief">
            <img 
                className="team-card-brief__photo" 
                src={imageUrl} 
                alt={name}
                onError={handleImageError}
            />
            <div>
                <div className="team-card-brief__name">
                    {name} {surname}
                </div>
                <div className="team-card-brief__position">{position}</div>
            </div>
        </Link>
    );
});

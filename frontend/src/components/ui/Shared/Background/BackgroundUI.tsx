import React from 'react';
import { BackgroundProps } from './type';
import './background.scss';
import pomegranateImg from '@assets/backgrounds/pomegranate.png';

export const BackgroundUI: React.FC<BackgroundProps> = ({count, isInPageWithBanner}) => {
    return (
        <div className="background-wrapper">
            <div className="pomegranates">
                {Array.from({ length: count }).map((_, i) => {
                    const isEven = i % 2 === 0;
                    const uniqueKey = `pomegranate-${i}`;
                    return (<React.Fragment key={uniqueKey}>
                        <div
                            className={`red-circle ${isEven ? 'left' : 'right'}`}
                            style={{
                                top: `${i * 880 + Number(isInPageWithBanner) * 630}px`,
                            }}
                        >
                        </div>
                        <img
                            src={pomegranateImg}
                            className={`pomegranate ${isEven ? 'left' : 'right'}`}
                            style={{
                                top: `${i * 880 + Number(isInPageWithBanner) * 630}px`,
                                transform: isEven ? 'none' : 'scale(-1,1)',
                            }}
                            alt='pomegranate background'
                            rel="preload"
                        />
                    </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

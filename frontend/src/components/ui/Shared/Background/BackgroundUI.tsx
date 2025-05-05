import React from 'react';
import { BackgroundProps } from './type';
import './background.scss';

export const BackgroundUI: React.FC<BackgroundProps> = ({count}) => {
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
                                top: `${i * 880}px`,
                            }}
                        >
                        </div>
                        <img
                            src="/src/assets/backgrounds/pomegranate.png"
                            className={`pomegranate ${isEven ? 'left' : 'right'}`}
                            style={{
                                top: `${i * 880}px`,
                                transform: isEven ? 'none' : 'scale(-1,1)',
                            }}
                        />
                    </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

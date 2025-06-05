import React from 'react';
import './yandex-map.scss';
import { YandexMapUIProps } from './type';

export const YandexMapUI: React.FC<YandexMapUIProps> = React.memo(({ mapContainerRef }) => {
    return (
        <div className="yandex-map-container">
            <div ref={mapContainerRef} className="yandex-map" aria-label="Карта с расположением театра" />
        </div>
    );
});

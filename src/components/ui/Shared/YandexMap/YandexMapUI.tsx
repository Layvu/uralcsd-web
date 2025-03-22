import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './yandex-map.scss';
import { YandexMapUIProps } from './type';

export const YandexMapUI: React.FC<YandexMapUIProps> = ({ apiKey, mapState }) => {
    return (
        <div className="yandex-map-container">
            <YMaps query={{ apikey: apiKey }}>
                <Map state={mapState} className="yandex-map" modules={['control.ZoomControl']}>
                    <Placemark
                        geometry={mapState.center}
                        options={{
                            preset: 'islands#redTheaterIcon',
                            iconColor: '#D6422F',
                        }}
                        className="yandex-map__placemark"
                    />
                </Map>
            </YMaps>
        </div>
    );
};

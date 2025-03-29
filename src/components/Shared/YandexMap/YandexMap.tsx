import React from 'react';
import { YandexMapUI } from '@components/ui/Shared/YandexMap';
import { MapState } from '@components/ui/Shared/YandexMap/type';

export const YandexMap: React.FC = () => {
    const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;
    if (!apiKey) {
        console.error('Yandex Maps API key not found in environment variables');
    }

    const theaterCoordinates: [number, number] = [56.842253, 60.666816];

    const mapState: MapState = {
        center: theaterCoordinates,
        zoom: 17,
        controls: ['zoomControl'],
    };

    return <YandexMapUI apiKey={apiKey} mapState={mapState} />;
};

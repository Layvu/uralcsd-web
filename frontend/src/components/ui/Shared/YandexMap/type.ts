import React from 'react';

export interface YandexMapUIProps {
    mapContainerRef: React.RefObject<HTMLDivElement>;
}

export interface MapState {
    center: [number, number];
    zoom: number;
    controls: string[];
}

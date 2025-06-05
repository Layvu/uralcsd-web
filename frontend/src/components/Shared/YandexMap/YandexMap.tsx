import React, { useEffect, useMemo, useRef } from 'react';
import { YandexMapUI } from '@components/ui/Shared/YandexMap';
import { MapState } from '@components/ui/Shared/YandexMap/type';

export const YandexMap: React.FC = () => {
    const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;
    const coordinates: [number, number] = [56.842253, 60.666816];
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);

    const mapOptions = useMemo<MapState>(
        () => ({
            center: coordinates,
            zoom: 17,
            controls: ['zoomControl'],
        }),
        [],
    );

    useEffect(() => {
        if (!apiKey) {
            console.error('Missing Yandex Maps API key');
            return;
        }

        let isMounted = true;

        const initMap = () => {
            if (!isMounted || !mapContainerRef.current) return;

            const mapInstance = new window.ymaps.Map(
                mapContainerRef.current,
                {
                    center: mapOptions.center,
                    zoom: mapOptions.zoom,
                    controls: mapOptions.controls,
                },
                {
                    suppressMapOpenBlock: true,
                },
            );

            const placemark = new window.ymaps.Placemark(
                mapOptions.center,
                {},
                {
                    preset: 'islands#redTheaterIcon',
                    iconColor: '#D6422F',
                },
            );

            mapInstance.geoObjects.add(placemark);
            mapRef.current = mapInstance;
        };

        const loadYandexMap = () => {
            if (window.ymaps) {
                window.ymaps.ready(initMap);
                return;
            }

            const script = document.createElement('script');
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
            script.async = true;
            script.onload = () => window.ymaps.ready(initMap);
            script.onerror = () => console.error('Failed to load Yandex Maps API');
            document.head.appendChild(script);
        };

        loadYandexMap();

        return () => {
            isMounted = false;
            if (mapRef.current) {
                mapRef.current.destroy();
                mapRef.current = null;
            }
        };
    }, [apiKey]);

    return <YandexMapUI mapContainerRef={mapContainerRef} />;
};

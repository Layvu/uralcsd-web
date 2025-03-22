export interface YandexMapUIProps {
    apiKey: string;
    mapState: MapState;
}

export interface MapState {
    center: [number, number];
    zoom: number;
    controls: string[];
}

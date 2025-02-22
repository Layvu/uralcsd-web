export interface Performance {
    name: string;
    slug: string;
    description: string;
    cast: { name: string; role: string }[];
    crew: { name: string; role: string }[];
    images: string[];
    date: string;
    age: number;
    duration: string;
    isWithIntermission: boolean;
    isPremiere: boolean;
}

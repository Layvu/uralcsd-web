export interface IProject {
    id: string;
    name: string;
    slug: string;
    images: {
        url: string;
    }[];
   // teaser: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

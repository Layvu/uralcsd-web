export interface IProject {
    id: string;
    title: string;
    additionalInfo: string;
    slug: string;
    images: {
        url: string;
    }[];
   // teaser: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

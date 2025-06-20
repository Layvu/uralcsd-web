export interface ITheaterInfo {
    title: string;
    images:{
        url: string;
    }[];
    description: string;
    partners: {
        url: string;
        image: {
            url: string;
        };
    }[];
}

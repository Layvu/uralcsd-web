export interface IContactInfo {
    address: string;
    workingDaysText: string;
    workingHours: {
        start: string;
        end: string;
    };
    daysOff: string[];
    phones: {
        main: string;
        boxOffice: string;
    };
    email: string;
    faq: IFaqItem[];
    social: {
        vk: string,
        tg: string,
    }
}

export interface IFaqItem {
    question: string;
    info: {
        subtitle?: string;
        answer?: string;
    }[]
}

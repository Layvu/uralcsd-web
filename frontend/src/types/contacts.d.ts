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
}

export interface IFaqItem {
    question: string;
    answer: string;
}

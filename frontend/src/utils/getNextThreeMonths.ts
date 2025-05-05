import { IMonth } from './../types/month.d';

const getNextThreeMonths = (): IMonth[] => {
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    const currentMonth = new Date().getMonth();

    return [0, 1, 2].map((offset) => {
        const monthIndex = (currentMonth + offset) % 12;
        return { name: months[monthIndex], monthIndex };
    });
};

export { getNextThreeMonths };

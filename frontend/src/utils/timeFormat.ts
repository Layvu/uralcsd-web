import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { parseISO } from 'date-fns';
// npm install date-fns@2.30.0 --save
// npm install @types/date-fns --save-dev

export const formatToWeekday = (dateString: string) => {
    return format(parseISO(dateString), 'EEEE', { locale: ru });
};

export const formatDateTime = (dateString: string) => {
    return format(parseISO(dateString), 'd MMMM HH:mm', { locale: ru });
};

export const formatToMonth = (date: Date) => {
    return date.toLocaleString('ru', { month: 'long', day: 'numeric' }).split(' ')[1];
};

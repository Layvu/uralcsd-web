import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatToWeekday = (dateString : string) => {
    return format(parseISO(dateString), 'EEEE', { locale: ru });
};

export const formatToFullDateTime = (dateString : string) => {
    return format(parseISO(dateString), 'd MMMM HH:mm', { locale: ru });
};

export const formatToMonth = (date : Date) => {
    return date.toLocaleString('ru', { month: 'long', day: 'numeric' }).split(' ')[1];
};

export const formatToDate = (dateString : string) => {
    return format(parseISO(dateString), 'd MMMM', { locale: ru });
};

export const formatToTime = (dateString : string) => {
    return format(parseISO(dateString), 'HH:mm', { locale: ru });
};
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatToWeekday = (dateString: string) => {
    return format(parseISO(dateString), 'EEEE', { locale: ru });
};

export const formatDateTime = (dateString :string) => {
    return format(parseISO(dateString), 'd MMMM HH:mm', { locale: ru });
};
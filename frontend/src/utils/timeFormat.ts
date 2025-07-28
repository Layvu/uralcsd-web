import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';

const yekaterinburgTimeZone = 'Asia/Yekaterinburg';

export const formatToWeekday = (dateString: string) => {
    const zonedDate = utcToZonedTime(parseISO(dateString), yekaterinburgTimeZone);
    return format(zonedDate, 'EEEE', { locale: ru });
};

export const formatToFullDateTime = (dateString: string) => {
    const zonedDate = utcToZonedTime(parseISO(dateString), yekaterinburgTimeZone);
    return format(zonedDate, 'd MMMM HH:mm', { locale: ru });
};

export const formatToMonth = (date: Date) => {
    const zonedDate = utcToZonedTime(date, yekaterinburgTimeZone);
    return zonedDate.toLocaleString('ru', { month: 'long', day: 'numeric' }).split(' ')[1];
};

export const formatToDate = (dateString: string) => {
    const zonedDate = utcToZonedTime(parseISO(dateString), yekaterinburgTimeZone);
    return format(zonedDate, 'd MMMM', { locale: ru });
};

export const formatToTime = (dateString: string) => {
    const zonedDate = utcToZonedTime(parseISO(dateString), yekaterinburgTimeZone);
    return format(zonedDate, 'HH:mm', { locale: ru });
};

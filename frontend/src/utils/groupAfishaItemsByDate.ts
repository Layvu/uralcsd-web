import { IAfishaItemsWithPerformance } from 'types/afishaItemsWithPerformance';

export const groupAfishaItemsByDate = (items: IAfishaItemsWithPerformance[]) => {
    const grouped = items.reduce(
        (acc, item) => {
            // Извлекаем дату без времени (формат 'YYYY-MM-DD')
            const dateKey = new Date(item.date).toISOString().split('T')[0];
            
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(item);
            return acc;
        },
        {} as { [key: string]: IAfishaItemsWithPerformance[] },
    );

    
    for (const dateKey in grouped) {
        grouped[dateKey].sort((a, b) => {
            const timeA = new Date(a.date).toISOString().split('T')[1];
            const timeB = new Date(b.date).toISOString().split('T')[1];
            return timeA.localeCompare(timeB);
        });
    }

    return grouped;
};
import { Performance } from 'types/performance';

export const groupPerformancesByDate = (performances: Performance[]) => {
    // Группируем спектакли по дате
    const grouped = performances.reduce(
        (acc, performance) => {
            const dateKey = performance.date.split('T')[0];
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(performance);
            return acc;
        },
        {} as { [key: string]: Performance[] },
    );

    // Сортируем спектакли внутри каждой группы по времени начала
    for (const dateKey in grouped) {
        grouped[dateKey].sort((a, b) => {
            const timeA = a.date.split('T')[1];
            const timeB = b.date.split('T')[1];
            return timeA.localeCompare(timeB);
        });
    }

    return grouped;
};

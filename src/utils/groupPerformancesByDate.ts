import { Performance } from 'types/performance';

export const groupPerformancesByDate = (performances: Performance[]) => {
    return performances.reduce(
        (acc, performance) => {
            if (!acc[performance.date]) {
                acc[performance.date] = [];
            }
            acc[performance.date].push(performance);
            return acc;
        },
        {} as { [key: string]: Performance[] },
    );
};

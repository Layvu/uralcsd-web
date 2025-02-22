import React, { useCallback, useState } from 'react';
import { AfishaUI } from '@components/ui/AfishaPage';
import { getNextThreeMonths } from 'utils/utils';

export const Afisha: React.FC = () => {
    const [activeMonthIndex, setActiveMonthIndex] = useState(0);
    const months = getNextThreeMonths();

    const handleMonthChange = useCallback((index: number) => {
        setActiveMonthIndex(index);
    },[]);

    return (
        <AfishaUI
            months={months}
            activeMonthIndex={activeMonthIndex}
            onMonthChange={handleMonthChange} />
    );
};

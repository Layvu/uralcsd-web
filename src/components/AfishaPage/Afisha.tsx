import React, { useState } from 'react';
import { AfishaUI } from '@components/ui/AfishaPage';

export const Afisha: React.FC = () => {
    const [activeMonthIndex, setActiveMonthIndex] = useState(0);
    const months = ["Февраль", "Март", "Апрель"];

    return (
        <AfishaUI
            months={months}
            activeMonthIndex={activeMonthIndex}
            setActiveMonthIndex={setActiveMonthIndex} />
    );
};

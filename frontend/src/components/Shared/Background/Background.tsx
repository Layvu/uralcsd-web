import { BackgroundUI } from '@components/ui/Shared/Background';
import React from 'react';


export const Background: React.FC = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const updateCount = () => {
            const pageHeight = document.body.scrollHeight;
            const pomegranateSpacing = 900;
            const needed = Math.ceil(pageHeight / pomegranateSpacing);
            setCount(needed);
        };

        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    return (
        <BackgroundUI count={count}/>
    );
};

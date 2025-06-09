import { BackgroundUI } from '@components/ui/Shared/Background';
import { useBreakpoint } from 'hooks/useBreakpoint';
import React from 'react';
import { useLocation } from 'react-router-dom';


export const Background: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const { isTablet, isMobile } = useBreakpoint();
    React.useEffect(() => {
        const updateCount = () => {
            const pageHeight = document.documentElement.scrollHeight - 514;
            const pomegranateSpacing = 900;
            const needed = Math.ceil(pageHeight / pomegranateSpacing);
            setCount(needed);
        };
    
        const observer = new MutationObserver(() => {
            updateCount();
        });
    
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    
        setTimeout(updateCount, 0);
    
        window.addEventListener('resize', updateCount);
    
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateCount);
        };
    }, []);
    
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (isTablet || isMobile){
        return null;
    }
    return (
        <BackgroundUI count={count}/>
    );
};

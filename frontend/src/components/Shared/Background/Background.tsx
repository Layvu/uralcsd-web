import { BackgroundUI } from '@components/ui/Shared/Background';
import { isAboutRoute, isPerformanceDetailRoute, isProjectDetailRoute, isTeamDetailRoute } from 'consts';
import { useBreakpoint } from 'hooks/useBreakpoint';
import React from 'react';
import { useLocation } from 'react-router-dom';


export const Background: React.FC = () => {
    const { pathname } = useLocation();

    const [count, setCount] = React.useState(0);
    const { isLaptop, isTablet, isMobile } = useBreakpoint();

    const isInPageWithBanner = 
        isProjectDetailRoute(pathname) ||
        isPerformanceDetailRoute(pathname) ||
        isTeamDetailRoute(pathname) || 
        isAboutRoute(pathname);

    React.useEffect(() => {
        const updateCount = () => {
            const pageHeight = document.documentElement.scrollHeight - 590 -  Number(isInPageWithBanner) * 630;
            const pomegranateSpacing = 900 + Number(isInPageWithBanner) * 630;
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
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (isLaptop || isTablet || isMobile){
        return null;
    }
    return (
        <BackgroundUI count={count} isInPageWithBanner={isInPageWithBanner}/>
    );
};

import { useState, useEffect } from 'react';

export function useBreakpoint() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile: width <= 499,
        isTablet: width >= 500 && width <= 599,
        isLaptop: width >= 600 && width <= 849,
        isDesktop: width >= 850
    };
}
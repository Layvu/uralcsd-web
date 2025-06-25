import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'consts'; 

export const useScrollRestoration = () => {
    const location = useLocation();
    const scrollPositions = useRef<Record<string, number>>({});

    const shouldRestoreScroll = useRef(false);

    useEffect(() => {
        shouldRestoreScroll.current = [
            ROUTES.AFISHA,
            ROUTES.PERFORMANCES,
            ROUTES.PROJECTS,
            ROUTES.TEAM
        ].some(path => location.pathname == path);
    }, [location.pathname]);

    useEffect(() => {
        if (!shouldRestoreScroll.current) return;
        
        const currentPath = location.pathname;
        return () => {
            scrollPositions.current[currentPath] = window.scrollY;
        };
    }, [location]);

    useEffect(() => {
        if (!shouldRestoreScroll.current) return;
        
        const savedPosition = scrollPositions.current[location.pathname];
        if (savedPosition !== undefined) {
            window.scrollTo(0, savedPosition);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
};
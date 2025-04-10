import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from 'consts';
import { useInitialData } from 'hooks/useInitialData';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { HomePage } from '@pages/HomePage';
import { AfishaPage } from '@pages/AfishaPage';
import { PerformancesPage } from '@pages/PerformancesPage';
import { PerformancePage } from '@pages/PerformancesPage/PerformancePage';
import { AboutPage } from '@pages/AboutPage';
import { TeamPage } from '@pages/TeamPage';
import { TeamCardFull } from '@pages/TeamPage/TeamCardFull';
import { ProjectsPage } from '@pages/ProjectsPage';
import { ProjectPage } from '@pages/ProjectsPage/ProjectPage';
import { ContactsPage } from '@pages/ContactsPage';

const AppContent = () => {
    useInitialData();

    return (
        <div className="site-container">
            <Header />
            <main className="main">
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.AFISHA} element={<AfishaPage />} />
                    <Route path={ROUTES.PERFORMANCES} element={<PerformancesPage />} />
                    <Route path={`${ROUTES.PERFORMANCES}/:slug`} element={<PerformancePage />} />
                    <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                    <Route path={ROUTES.TEAM} element={<TeamPage />} />
                    <Route path={`${ROUTES.TEAM}/:slug`} element={<TeamCardFull />} />
                    <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
                    <Route path={`${ROUTES.PROJECTS}/:slug`} element={<ProjectPage />} />
                    <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;

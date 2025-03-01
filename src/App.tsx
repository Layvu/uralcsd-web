import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useInitialData } from 'hooks/useInitialData';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { HomePage } from '@pages/HomePage';
import { AfishaPage } from '@pages/AfishaPage';
import { PerformancesPage } from '@pages/PerformancesPage';
import { PerformancePage } from '@pages/PerformancesPage/PerformancePage';
import { About } from '@pages/about';
import { TeamPage } from '@pages/TeamPage';
import { TeamCardFull } from '@pages/TeamPage/TeamCardFull';
import { Projects } from '@pages/projects';
import { Contacts } from '@pages/contacts';

const App: React.FC = () => {
    useInitialData();

    return (
        <>
            <Router>
                <div className="site-container">
                    <Header />
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/afisha" element={<AfishaPage />} />
                            <Route path="/performances" element={<PerformancesPage />} />
                            <Route path="/performances/:slug" element={<PerformancePage />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/team/:slug" element={<TeamCardFull />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </>
    );
};

export default App;

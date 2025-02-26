import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Menu } from '@components/Menu';

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
    // А оно тут нужно?
    // все приложение перерисовывается
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    return (
        <>
            <Router>
                <div className="site-container">
                    <Header onMenuToggle={toggleMenu} />
                    <Menu isOpen={isMenuOpen} />

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

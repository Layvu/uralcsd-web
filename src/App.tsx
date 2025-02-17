import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Menu } from '@components/Menu';

import { HomePage } from '@pages/HomePage';
import { AfishaPage } from '@pages/AfishaPage';
import { Performances } from '@pages/performances';
import { About } from '@pages/about';
import { Team } from '@pages/team';
import { Projects } from '@pages/projects';
import { Contacts } from '@pages/contacts';

const App: React.FC = () => {
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
                            <Route path="/performances" element={<Performances />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/team" element={<Team />} />
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


import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAgent from './components/AIAgent';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Materials from './pages/Materials';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import { Language } from './types';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('en');

  // Sync with HTML class for Tailwind dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'ru' : 'en');

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <Header 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          language={language}
          toggleLanguage={toggleLanguage}
        />
        
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} language={language} />} />
            <Route path="/portfolio" element={<Portfolio isDarkMode={isDarkMode} language={language} />} />
            <Route path="/materials" element={<Materials isDarkMode={isDarkMode} language={language} />} />
            <Route path="/calculator" element={<Calculator isDarkMode={isDarkMode} language={language} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} language={language} />} />
          </Routes>
        </main>

        <Footer isDarkMode={isDarkMode} language={language} />
        <AIAgent isDarkMode={isDarkMode} language={language} />
      </div>
    </Router>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/portfolio', label: t.portfolio },
    { path: '/materials', label: t.materials },
    { path: '/calculator', label: t.calculator },
    { path: '/contact', label: t.contact },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? (isDarkMode ? 'glass border-b border-white/10' : 'glass-light border-b border-black/5 shadow-sm') 
      : 'bg-transparent'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          {/* Icon - Solid Premium Color */}
          <div className="text-3xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <i className="fas fa-layer-group"></i>
          </div>
          
          {/* Typography */}
          <div className="flex flex-col justify-center">
            <span className={`text-2xl font-sans font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              ILEX
              <span className="font-serif font-light italic ml-0.5 text-primary">
                ART
              </span>
            </span>
            <span className={`text-[0.55rem] uppercase tracking-[0.3em] font-medium leading-none mt-1 opacity-60 pl-0.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Wall Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-8 flex-shrink">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs lg:text-sm uppercase tracking-wide lg:tracking-widest font-medium hover:text-primary transition-colors whitespace-nowrap ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : (isDarkMode ? 'text-slate-300' : 'text-slate-600')
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
           {/* Language Toggle */}
           <button 
            onClick={toggleLanguage}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
              isDarkMode ? 'hover:bg-white/10 text-slate-300' : 'hover:bg-black/5 text-slate-600'
            }`}
          >
            {language.toUpperCase()}
          </button>

           <button 
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isDarkMode ? 'hover:bg-white/10 text-primary' : 'hover:bg-black/5 text-slate-600'
            }`}
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-slate-800'
            }`}>
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isDarkMode ? 'text-white' : 'text-slate-900'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${isDarkMode ? 'bg-slate-900/95 border-b border-white/10' : 'bg-white/95 border-b border-black/10'} backdrop-blur-lg p-6 shadow-xl`}>
          <nav className="flex flex-col space-y-4">
             {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : (isDarkMode ? 'text-slate-300' : 'text-slate-600')
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
               <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                className="flex items-center space-x-2 text-sm uppercase tracking-widest font-medium"
              >
                <i className={`fas ${isDarkMode ? 'fa-sun text-primary' : 'fa-moon text-slate-600'}`}></i>
                <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>Theme</span>
              </button>

              <button 
                onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                className="flex items-center space-x-2 text-sm uppercase tracking-widest font-medium"
              >
                <i className={`fas fa-globe ${isDarkMode ? 'text-primary' : 'text-slate-600'}`}></i>
                <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>{language === 'en' ? 'Russian' : 'English'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

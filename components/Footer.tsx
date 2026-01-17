
import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { Language } from '../types';

interface FooterProps {
  isDarkMode: boolean;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, language }) => {
  const t = translations[language].footer;
  const nav = translations[language].nav;
  
  const bgClass = isDarkMode ? 'bg-slate-900 border-t border-white/10' : 'bg-slate-100 border-t border-slate-200';
  const textClass = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const headingClass = isDarkMode ? 'text-white' : 'text-slate-900';

  return (
    <footer className={`${bgClass} pt-16 pb-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group">
               {/* Icon */}
              <div className="text-3xl text-primary">
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
                <span className={`text-[0.55rem] uppercase tracking-[0.3em] font-medium leading-none mt-1 opacity-60 pl-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Wall Studio
                </span>
              </div>
            </Link>
            <p className={`${textClass} mb-6 text-sm leading-relaxed`}>
              {t.brandText}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={`${headingClass} font-bold mb-6`}>{t.navTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className={`${textClass} hover:text-primary transition-colors`}>{nav.home}</Link></li>
              <li><Link to="/portfolio" className={`${textClass} hover:text-primary transition-colors`}>{nav.portfolio}</Link></li>
              <li><Link to="/materials" className={`${textClass} hover:text-primary transition-colors`}>{nav.materials}</Link></li>
              <li><Link to="/calculator" className={`${textClass} hover:text-primary transition-colors`}>{nav.calculator}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className={`${headingClass} font-bold mb-6`}>{t.infoTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className={`${textClass} hover:text-primary transition-colors`}>{nav.contact}</Link></li>
              <li><a href="#" className={`${textClass} hover:text-primary transition-colors`}>{t.privacy}</a></li>
              <li><a href="#" className={`${textClass} hover:text-primary transition-colors`}>{t.terms}</a></li>
              <li><a href="#" className={`${textClass} hover:text-primary transition-colors`}>{t.faq}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`${headingClass} font-bold mb-6`}>{t.contactTitle}</h4>
            <ul className={`space-y-4 text-sm ${textClass}`}>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-primary"></i>
                <span>123 Art Avenue,<br/>Design District, NY 10012</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <span>hello@ilexart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${isDarkMode ? 'border-white/5' : 'border-black/5'} pt-8 text-center`}>
          <p className={`text-xs ${textClass}`}>&copy; {new Date().getFullYear()} {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

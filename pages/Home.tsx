import React from 'react';
import { Language } from '../types';
import Hero from '../components/home/Hero';
import Advantages from '../components/home/Advantages';
import AboutSection from '../components/home/AboutSection';
import CategoriesCarousel from '../components/home/CategoriesCarousel';
import StatsSection from '../components/home/StatsSection';

interface HomeProps {
  isDarkMode: boolean;
  language: Language;
}

const Home: React.FC<HomeProps> = ({ isDarkMode, language }) => {
  return (
    <div className="w-full overflow-hidden">
      <Hero isDarkMode={isDarkMode} language={language} />
      <Advantages isDarkMode={isDarkMode} language={language} />
      <AboutSection isDarkMode={isDarkMode} language={language} />
      <CategoriesCarousel isDarkMode={isDarkMode} language={language} />
      <StatsSection isDarkMode={isDarkMode} language={language} />
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Language } from '../../types';
import { translations } from '../../translations';

interface HeroProps {
  isDarkMode: boolean;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, language }) => {
  const t = translations[language].hero;
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  const heroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
         <img 
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1920&auto=format&fit=crop" 
          alt="Hero Background - Premium Wall Art" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Static Overlays */}
      <div className={`absolute inset-0 z-0 pointer-events-none ${isDarkMode ? 'bg-slate-900/60' : 'bg-black/30'}`}></div>
      <div className={`absolute bottom-0 left-0 w-full z-0 pointer-events-none ${isDarkMode ? 'h-full from-slate-900' : 'h-2/3 from-white'} bg-gradient-to-t to-transparent`}></div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={heroItemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          {t.title}
        </motion.h1>
        <motion.p 
          variants={heroItemVariants}
          className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light"
        >
          {t.subtitle}
        </motion.p>
        <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            to="/calculator" 
            className="px-8 py-4 bg-primary hover:bg-yellow-600 text-slate-900 rounded-full font-bold tracking-wide transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1"
          >
            {t.calculateBtn}
          </Link>
          <Link 
            to="/portfolio" 
            className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-medium tracking-wide transition-all backdrop-blur-sm"
          >
            {t.portfolioBtn}
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <i className={`fas fa-chevron-down text-2xl ${isDarkMode ? 'text-white/50' : 'text-slate-900/50'}`}></i>
      </motion.div>
    </section>
  );
};

export default Hero;
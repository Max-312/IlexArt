import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Language } from '../../types';
import { translations } from '../../translations';

interface CategoriesCarouselProps {
  isDarkMode: boolean;
  language: Language;
}

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({ isDarkMode, language }) => {
  const t = translations[language].homeCategories;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      } 
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  const categories = [
    { name: t.names.abstract, img: 'https://picsum.photos/id/1016/600/800' },
    { name: t.names.nature, img: 'https://picsum.photos/id/1018/600/800' },
    { name: t.names.urban, img: 'https://picsum.photos/id/1019/600/800' },
    { name: t.names.classic, img: 'https://picsum.photos/id/1025/600/800' },
    { name: t.names.minimalism, img: 'https://picsum.photos/id/1049/600/800' },
    { name: t.names.textures, img: 'https://picsum.photos/id/1057/600/800' },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const scrollAmount = 350; // Card width + gap
        
        // If we are near the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 350; // Card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section 
      className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <motion.div variants={childVariants}>
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.title}</h2>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{t.subtitle}</p>
          </motion.div>
          <motion.div variants={childVariants} className="flex gap-4">
            <button 
              onClick={() => scrollCarousel('left')}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-slate-900 hover:bg-slate-100'}`}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-slate-900 hover:bg-slate-100'}`}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 -mx-4 px-4 scrollbar-hide"
          ref={carouselRef}
          variants={sectionVariants}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {categories.map((cat, idx) => (
            <motion.div 
              variants={childVariants} 
              key={idx}
              className="flex-shrink-0 w-80 md:w-96 snap-start"
            >
              <Link to="/portfolio" className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer block shadow-xl">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">{cat.name}</h3>
                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100 translate-y-2 group-hover:translate-y-0 duration-300">
                    <span className="uppercase tracking-widest mr-2">{t.explore}</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
           <motion.div 
              variants={childVariants} 
              className="flex-shrink-0 w-40 snap-start flex items-center justify-center"
            >
               <Link to="/portfolio" className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 ${isDarkMode ? 'border-white/30 text-white hover:bg-white hover:text-slate-900' : 'border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
                  <i className="fas fa-arrow-right text-xl"></i>
               </Link>
            </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CategoriesCarousel;
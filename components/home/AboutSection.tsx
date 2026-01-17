import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Language } from '../../types';
import { translations } from '../../translations';

interface AboutSectionProps {
  isDarkMode: boolean;
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode, language }) => {
  const t = translations[language].aboutSection;

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

  return (
    <motion.section 
      className={`py-20 md:py-32 relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 relative">
           <motion.h2 
             variants={childVariants}
             className={`text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] z-10 max-w-4xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
           >
             {t.title.split(' ').map((word, i) => (
               <span key={i} className="inline-block mr-4">{word}</span>
             ))}
           </motion.h2>

           {/* Abstract Shape Top Right */}
           <motion.div 
             variants={{
               hidden: { opacity: 0, rotate: -10, x: 50 },
               visible: { opacity: 0.8, rotate: 0, x: 0, transition: { duration: 1 } }
             }}
             className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 md:translate-x-0 w-48 h-80 md:w-64 md:h-96 rounded-b-full rounded-tl-full bg-gradient-to-b from-primary to-yellow-700 opacity-80 mix-blend-overlay"
           ></motion.div>
           <div className="absolute top-20 right-20 w-4 h-4 bg-primary opacity-60"></div>
           <div className="absolute top-24 right-16 w-4 h-4 bg-primary opacity-40"></div>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20">
          <div className="md:col-span-3 order-2 md:order-1">
            <motion.div variants={childVariants}>
              <Link to="/contact" className={`inline-block px-8 py-3 border rounded-full uppercase text-xs tracking-widest font-medium transition-all hover:-translate-y-1 ${isDarkMode ? 'border-white/30 hover:bg-white hover:text-slate-900 text-white' : 'border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900'}`}>
                {t.button}
              </Link>
            </motion.div>
          </div>
          
          <div className="md:col-span-5 order-3 md:order-2">
            <motion.p variants={childVariants} className={`text-xl md:text-2xl font-light leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.text}
            </motion.p>
          </div>

          <motion.div variants={childVariants} className="md:col-span-4 relative order-1 md:order-3">
             <div className="aspect-[3/4] rounded-tr-[5rem] overflow-hidden relative group cursor-pointer shadow-2xl">
                {/* Portrait of the Artist/Founder */}
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                  alt="Creative Director"
                  className="w-full h-full object-cover transition-all duration-700"
                  initial={{ filter: "grayscale(100%)", scale: 1 }}
                  whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color"></div>
             </div>
          </motion.div>
        </div>

        {/* Bottom Row - The Collage */}
        <motion.div variants={sectionVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48 md:h-64">
           {/* 1. Grid Pattern */}
           <motion.div variants={childVariants} className={`rounded-tl-[3rem] overflow-hidden relative ${isDarkMode ? 'bg-white/5' : 'bg-slate-200'}`}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: '10px 10px' }}></div>
              <svg className="absolute inset-0 w-full h-full stroke-current opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,25 50,50 T100,50" fill="none" strokeWidth="1" />
                <path d="M0,30 Q25,55 50,30 T100,30" fill="none" strokeWidth="1" />
                <path d="M0,70 Q25,45 50,70 T100,70" fill="none" strokeWidth="1" />
              </svg>
           </motion.div>

           {/* 2. Shape */}
           <motion.div variants={childVariants} className={`rounded-tr-[5rem] relative overflow-hidden flex items-end p-4 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-300'}`}>
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-2 h-2 bg-primary"></div>
                <div className="w-2 h-2 bg-primary opacity-50"></div>
              </div>
           </motion.div>

           {/* 3. Interactive Video 2: The Process */}
           <motion.div variants={childVariants} className="relative overflow-hidden group cursor-pointer">
              <motion.video 
                src="https://cdn.coverr.co/videos/coverr-paint-falling-in-water-5282/1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
                initial={{ filter: "sepia(50%)" }}
                whileHover={{ filter: "sepia(0%)", scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
           </motion.div>

           {/* 4. Waves */}
           <motion.div variants={childVariants} className={`rounded-br-[3rem] relative overflow-hidden ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'}`}>
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 {[...Array(5)].map((_, i) => (
                    <path 
                      key={i}
                      d={`M${i*20},0 Q${i*20+10},50 ${i*20},100`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="20"
                      className={isDarkMode ? 'text-primary/20' : 'text-primary/30'} 
                    />
                 ))}
               </svg>
           </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
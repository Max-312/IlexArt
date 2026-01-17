import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Language } from '../../types';
import { translations } from '../../translations';

interface AdvantagesProps {
  isDarkMode: boolean;
  language: Language;
}

const Advantages: React.FC<AdvantagesProps> = ({ isDarkMode, language }) => {
  const t = translations[language].advantages;

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

  const advantagesList = [
    { icon: 'fa-gem', title: t.quality.title, text: t.quality.text },
    { icon: 'fa-bolt', title: t.delivery.title, text: t.delivery.text },
    { icon: 'fa-fingerprint', title: t.design.title, text: t.design.text }
  ];

  return (
    <motion.section 
      className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantagesList.map((item, index) => (
            <motion.div 
              key={index}
              variants={childVariants}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl border ${
                isDarkMode ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'
              } text-center transition-all`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-primary/20">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className={`text-xl font-bold mb-3 font-serif ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Advantages;
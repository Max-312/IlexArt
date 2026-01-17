
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Language } from '../types';

interface MaterialsProps {
  isDarkMode: boolean;
  language: Language;
}

const Materials: React.FC<MaterialsProps> = ({ isDarkMode, language }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const t = translations[language].materials;

  return (
    <div className={`pt-32 pb-20 min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.title}</h1>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {t.items.map((material, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={material.id}
              className={`p-8 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-200'
              } hover:border-primary/50 transition-colors`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold">{material.name}</h3>
                <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">
                  ${material.pricePerSqm} {t.pricePerSqm}
                </span>
              </div>
              <p className={`mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {material.description}
              </p>
              <ul className="space-y-2">
                {material.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <i className="fas fa-check text-green-400 mr-3"></i>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-xl overflow-hidden border ${
                  isDarkMode ? 'border-white/10 bg-slate-800/50' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-primary' : ''}`}></i>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaqIndex === idx ? 'auto' : 0, opacity: openFaqIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-6 pt-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;

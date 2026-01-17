
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../translations';
import { Language, PortfolioItem } from '../types';

interface PortfolioProps {
  isDarkMode: boolean;
  language: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode, language }) => {
  const t = translations[language].portfolio;
  const items = translations[language].portfolioItems;
  
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // We use the 'All' key from translations for the default filter
  const allLabel = t.all;
  
  // Extract unique categories from the items
  const uniqueCategories = Array.from(new Set(items.map(item => item.category)));
  const categories = [allLabel, ...uniqueCategories];

  const filteredItems = filter === allLabel 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className={`pt-32 pb-20 min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.title}</h1>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : (isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedItem(item)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{item.title}</h3>
                  <span className="text-primary text-sm uppercase tracking-wider">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedItem.imageUrl} 
              alt={selectedItem.title} 
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-2xl font-serif font-bold">{selectedItem.title}</h3>
              <p className="text-white/80">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

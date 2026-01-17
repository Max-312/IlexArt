
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface CalculatorProps {
  isDarkMode: boolean;
  language: Language;
}

const Calculator: React.FC<CalculatorProps> = ({ isDarkMode, language }) => {
  const t = translations[language].calculator;
  const materials = translations[language].materials.items;

  const [width, setWidth] = useState<number>(3);
  const [height, setHeight] = useState<number>(2.5);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(materials[0].id);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const selectedMaterial = materials.find(m => m.id === selectedMaterialId) || materials[0];

  useEffect(() => {
    if (selectedMaterial) {
      const area = width * height;
      const materialCost = area * selectedMaterial.pricePerSqm;
      const baseFee = 50; // Base processing fee
      setTotalPrice(Math.round(materialCost + baseFee));
    }
  }, [width, height, selectedMaterialId, selectedMaterial]);

  return (
    <div className={`pt-32 pb-20 min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Form */}
          <div className="flex-1">
             <h1 className="text-4xl font-serif font-bold mb-6">{t.title}</h1>
             <p className={`mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
               {t.subtitle}
             </p>

             <div className={`p-8 rounded-2xl border shadow-xl ${
               isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-100'
             }`}>
               {/* Dimensions */}
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div>
                   <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.width}</label>
                   <input 
                    type="number" 
                    min="0.5" 
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none ${
                      isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.height}</label>
                   <input 
                    type="number" 
                    min="0.5" 
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none ${
                      isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                   />
                 </div>
               </div>

               {/* Material */}
               <div className="mb-8">
                 <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.material}</label>
                 <select 
                   value={selectedMaterialId}
                   onChange={(e) => setSelectedMaterialId(e.target.value)}
                   className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none appearance-none ${
                      isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                 >
                   {materials.map(m => (
                     <option key={m.id} value={m.id}>{m.name} - ${m.pricePerSqm}/m²</option>
                   ))}
                 </select>
               </div>

               {/* Upload */}
               <div className="mb-8">
                 <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.uploadTitle}</label>
                 <div className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                   isDarkMode ? 'border-slate-600 hover:border-primary hover:bg-slate-700' : 'border-slate-300 hover:border-primary hover:bg-slate-50'
                 }`}>
                   <i className="fas fa-cloud-upload-alt text-3xl mb-3 text-slate-400"></i>
                   <p className="text-sm opacity-70">{t.uploadText}</p>
                   <p className="text-xs opacity-50 mt-1">{t.uploadHint}</p>
                   <input type="file" className="hidden" />
                 </div>
               </div>
             </div>
          </div>

          {/* Summary Card */}
          <div className="w-full lg:w-96">
            <div className={`sticky top-32 p-8 rounded-2xl border shadow-2xl relative overflow-hidden ${
               isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-100'
            }`}>
              {/* Background gradient blob */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

              <h2 className="text-2xl font-serif font-bold mb-6">{t.summaryTitle}</h2>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between pb-4 border-b border-dashed border-slate-500/30">
                  <span className="opacity-70">{t.dimensions}</span>
                  <span className="font-medium">{width}m x {height}m</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-dashed border-slate-500/30">
                  <span className="opacity-70">{t.area}</span>
                  <span className="font-medium">{(width * height).toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-dashed border-slate-500/30">
                  <span className="opacity-70">{t.material}</span>
                  <span className="font-medium">{selectedMaterial?.name}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold pt-2">
                  <span>{t.estimatedTotal}</span>
                  <span className="text-3xl text-primary">${totalPrice}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                {t.requestBtn}
              </button>
              
              <p className="text-xs text-center mt-4 opacity-50">
                {t.disclaimer}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;

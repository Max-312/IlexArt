
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface ContactProps {
  isDarkMode: boolean;
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode, language }) => {
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={`pt-32 pb-20 min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.title}</h1>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className={`p-10 rounded-3xl ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-xl'}`}>
            <h3 className="text-2xl font-bold mb-8 font-serif">{t.infoTitle}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.studio}</h4>
                  <p className={`opacity-70 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    123 Art Avenue, Design District<br/>
                    New York, NY 10012, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.phone}</h4>
                  <p className={`opacity-70 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    +1 (555) 123-4567
                  </p>
                  <p className="text-xs opacity-50 mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.email}</h4>
                  <p className={`opacity-70 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    hello@ilexart.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden h-64 w-full bg-slate-700 relative">
               <img src="https://picsum.photos/id/122/800/400" alt="Map" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">We are here</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.formName}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none ${
                      isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                    }`}
                  />
                </div>
                <div>
                   <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.formEmail}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none ${
                      isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                    }`}
                  />
                </div>
              </div>

              <div>
                 <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.formPhone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none ${
                    isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                  }`}
                />
              </div>

              <div>
                 <label className="block text-sm font-bold mb-2 uppercase tracking-wide opacity-70">{t.formMessage}</label>
                <textarea 
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-primary focus:outline-none ${
                    isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                  }`}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
              >
                {t.sendBtn}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/20 text-green-400 rounded-xl text-center font-medium border border-green-500/30">
                  {t.success}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

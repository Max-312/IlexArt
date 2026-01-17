import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Language } from '../../types';
import { translations } from '../../translations';
import AnimatedCounter from '../common/AnimatedCounter';

interface StatsSectionProps {
  isDarkMode: boolean;
  language: Language;
}

const StatsSection: React.FC<StatsSectionProps> = ({ isDarkMode, language }) => {
  const t = translations[language];

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
      className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        
        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          
          {/* Block 1: Projects (Count + Image) */}
          <motion.div 
            variants={childVariants}
            className="relative h-96 rounded-3xl overflow-hidden group col-span-1 lg:col-span-1"
          >
            <img src="https://images.unsplash.com/photo-1549411984-52e8d350eb96?q=80&w=800&auto=format&fit=crop" alt="Projects" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
            <div className="absolute top-8 left-8">
               <span className="text-white/80 text-sm font-medium uppercase tracking-wider">{t.statsSection.projects.label}</span>
            </div>
            <div className="absolute bottom-8 left-8">
               <div className="text-7xl font-serif text-white font-bold mb-0 leading-none">
                  <AnimatedCounter to={t.statsSection.projects.number} suffix={t.statsSection.projects.suffix} />
               </div>
               <div className="text-white/80 text-lg mt-2">{t.statsSection.projects.subtext}</div>
            </div>
          </motion.div>

          {/* Block 2: Lifetime Warranty (Solid Color + Text) */}
          <motion.div 
            variants={childVariants}
            className={`relative h-96 rounded-3xl overflow-hidden p-8 flex flex-col justify-between col-span-1 lg:col-span-1 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-800'}`} // Always dark for premium feel
          >
            <div>
              <h3 className="text-4xl font-serif text-white font-light leading-tight">{t.statsSection.warranty.title}</h3>
            </div>
            <div>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                {t.statsSection.warranty.description}
              </p>
            </div>
          </motion.div>

          {/* Block 3: Service (Image) */}
          <motion.div 
            variants={childVariants}
            className="relative h-96 rounded-3xl overflow-hidden group col-span-1 lg:col-span-1"
          >
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
             <div className="absolute top-8 left-8 right-8">
               <h3 className="text-3xl font-serif text-white leading-tight">{t.statsSection.service.title}</h3>
               <p className="text-white/90 text-sm mt-4">{t.statsSection.service.description}</p>
             </div>
             <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-slate-900 shadow-lg shadow-primary/30">
               <i className="fas fa-arrow-right"></i>
             </div>
          </motion.div>

          {/* Block 4: Team/Experience (Video Background) - Spans 2 cols on Desktop */}
          <motion.div 
            variants={childVariants}
            className="relative h-96 rounded-3xl overflow-hidden group col-span-1 md:col-span-2 lg:col-span-2"
          >
            <video 
              src="https://cdn.coverr.co/videos/coverr-person-working-on-a-wooden-structure-5374/1080p.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 z-10 flex items-end space-x-6">
               <div>
                  <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-2">{t.statsSection.team.label}</span>
                  <div className="text-6xl md:text-8xl font-serif text-white font-bold leading-none">
                     <AnimatedCounter to={t.statsSection.team.number} suffix={t.statsSection.team.suffix} />
                  </div>
               </div>
               <div className="pb-4 max-w-xs">
                  <p className="text-white/80 text-sm md:text-base border-l-2 border-primary pl-4">
                     {t.statsSection.team.subtext}
                  </p>
               </div>
            </div>
            
            {/* Optional: Avatar overlay like in reference */}
            <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden">
               <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Specialist" className="w-full h-full object-cover" />
            </div>
          </motion.div>

           {/* Block 5: Small Decorative Block - Spans 1 col */}
           <motion.div 
            variants={childVariants}
            className={`relative h-96 rounded-3xl overflow-hidden p-8 flex items-center justify-center col-span-1 lg:col-span-1 border border-dashed ${isDarkMode ? 'border-white/20' : 'border-slate-300'}`}
          >
             <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary text-3xl mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Partnership</h4>
                <Link to="/contact" className="text-sm underline opacity-70 hover:opacity-100 transition-opacity">Become a partner</Link>
             </div>
          </motion.div>

        </div>

        {/* Testimonials Header */}
        <motion.div variants={childVariants} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.testimonials.title}
          </h2>
        </motion.div>

        {/* Interactive Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item) => (
            <motion.div
              key={item.id}
              layout
              variants={childVariants}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative group rounded-2xl p-6 cursor-default overflow-hidden transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800/40 border border-white/5 hover:bg-slate-800 hover:border-primary/30' 
                  : 'bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.name}</h4>
                  <p className={`text-xs uppercase tracking-wide opacity-70 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-primary text-xs mb-4">
                 {[...Array(item.rating)].map((_, i) => (
                   <i key={i} className="fas fa-star"></i>
                 ))}
              </div>

              {/* Body - Unfolds on Hover */}
              <motion.div className="relative">
                <i className={`fas fa-quote-left text-3xl absolute -top-2 -left-2 opacity-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}></i>
                <p className={`text-sm leading-relaxed relative z-10 transition-colors ${
                  isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {item.text}
                </p>
              </motion.div>

              {/* Decorative Elements on Hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default StatsSection;
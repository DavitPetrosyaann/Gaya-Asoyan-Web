import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="introduction" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-academic-accent font-semibold tracking-wide uppercase text-sm mb-4">
              Department of Comparative Literature & Media Studies
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-academic-900 mb-6 leading-tight">
              Literature, Cinema, <br className="hidden md:block" />
              <span className="italic font-light text-academic-800">& Canvas</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-xl text-academic-800 font-serif leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            An academic exploration of how core narrative themes and character archetypes mutate and adapt across contemporary novels, historical and modern film adaptations, and classic visual arts.
          </motion.p>

          <motion.div 
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#case-studies" className="bg-academic-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-academic-800 transition-colors shadow-lg">
              Explore Case Studies
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-academic-200 to-transparent blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-academic-200 to-transparent blur-3xl" />
      </div>
    </section>
  );
};
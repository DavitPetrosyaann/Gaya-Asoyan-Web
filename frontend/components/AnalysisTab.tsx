import React from 'react';
import { motion } from 'framer-motion';
import { AnalysisItem } from '../types';
import { Book, Film, Image as ImageIcon, GitMerge } from 'lucide-react';

interface AnalysisTabProps {
  item: AnalysisItem;
}

export const AnalysisTab: React.FC<AnalysisTabProps> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'book': return <Book className="w-5 h-5" />;
      case 'film-old':
      case 'film-new': return <Film className="w-5 h-5" />;
      case 'artwork': return <ImageIcon className="w-5 h-5" />;
      case 'synthesis': return <GitMerge className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
    >
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md bg-academic-200">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-2 text-white/90 mb-1">
              {getIcon()}
              <span className="text-xs font-semibold uppercase tracking-wider">{item.type.replace('-', ' ')}</span>
            </div>
            <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
            <p className="text-white/80 text-sm">{item.creator}, {item.year}</p>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="prose prose-academic max-w-none">
          <p className="text-lg font-serif text-academic-800 italic mb-6 border-l-4 border-academic-accent pl-4">
            {item.description}
          </p>
          
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-academic-500 mb-3">Key Thematic Elements</h4>
            <div className="flex flex-wrap gap-2">
              {item.keyThemes.map((theme, idx) => (
                <span key={idx} className="px-3 py-1 bg-academic-200 text-academic-800 text-xs font-medium rounded-full">
                  {theme}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-academic-500 mb-3">Critical Analysis</h4>
            <p className="text-academic-900 font-serif leading-relaxed text-justify">
              {item.analysis}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
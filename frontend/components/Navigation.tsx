import React from 'react';
import { BookOpen } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-academic-50/80 border-b border-academic-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-academic-accent" />
            <span className="font-serif font-bold text-xl tracking-tight text-academic-900">
              Intermedial Echoes
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#introduction" className="text-sm font-medium text-academic-800 hover:text-academic-accent transition-colors">Introduction</a>
            <a href="#case-studies" className="text-sm font-medium text-academic-800 hover:text-academic-accent transition-colors">Case Studies</a>
            <a href="#contact" className="text-sm font-medium text-academic-800 hover:text-academic-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
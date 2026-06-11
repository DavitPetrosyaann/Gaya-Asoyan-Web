import React, { useState } from 'react';
import { CaseStudy, MediaType } from '../types';
import { AnalysisTab } from './AnalysisTab';

interface CaseStudyViewerProps {
  study: CaseStudy;
  index: number;
}

export const CaseStudyViewer: React.FC<CaseStudyViewerProps> = ({ study, index }) => {
  const [activeTab, setActiveTab] = useState<MediaType>('book');

  const tabs: { id: MediaType; label: string }[] = [
    { id: 'book', label: 'Source Text' },
    { id: 'film-old', label: 'Classic Adaptation' },
    { id: 'film-new', label: 'Modern Adaptation' },
    { id: 'artwork', label: 'Visual Art Parallel' },
    { id: 'synthesis', label: 'Synthesis' },
  ];

  return (
    <div className="mb-32">
      <div className="mb-12 text-center">
        <span className="text-academic-accent font-bold tracking-widest uppercase text-sm">Case Study {index + 1}</span>
        <h2 className="text-4xl font-serif font-bold text-academic-900 mt-2 mb-3">{study.title}</h2>
        <p className="text-xl text-academic-600 font-serif italic">{study.subtitle}</p>
      </div>

      <div className="bg-white rounded-lg shadow-xl border border-academic-100 overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-academic-200 bg-academic-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-colors relative ${
                activeTab === tab.id 
                  ? 'text-academic-accent bg-white' 
                  : 'text-academic-600 hover:text-academic-900 hover:bg-academic-100'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-academic-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 lg:p-12">
          <AnalysisTab key={`${study.id}-${activeTab}`} item={study.items[activeTab]} />
        </div>
      </div>
    </div>
  );
};
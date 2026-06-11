import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CaseStudyViewer } from './components/CaseStudyViewer';
import { Contact } from './components/Contact';
import { CASE_STUDIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="case-studies" className="py-20 bg-academic-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 border-b border-academic-300 pb-8">
              <h2 className="text-3xl font-serif font-bold text-academic-900">Comparative Analyses</h2>
              <p className="mt-4 text-academic-700 max-w-3xl font-serif">
                The following case studies examine specific narratives, tracing their thematic evolution from original text through various cinematic interpretations, and grounding them in parallel visual art movements.
              </p>
            </div>

            {CASE_STUDIES.map((study, index) => (
              <CaseStudyViewer key={study.id} study={study} index={index} />
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="bg-academic-900 border-t border-academic-800 py-8 text-center">
        <p className="text-academic-400 text-sm font-serif">
          &copy; {new Date().getFullYear()} Department of Comparative Literature. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
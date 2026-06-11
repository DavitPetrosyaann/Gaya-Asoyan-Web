import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-academic-900 text-academic-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Academic Inquiries</h2>
          <p className="text-academic-300 font-serif">
            For access to full research papers, collaboration proposals, or syllabus inclusion requests.
          </p>
        </div>

        {submitted ? (
          <div className="bg-academic-800 p-8 rounded-sm text-center border border-academic-700">
            <h3 className="text-xl font-serif font-bold text-white mb-2">Inquiry Received</h3>
            <p className="text-academic-300">Thank you for your interest. The department will respond shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-academic-800 p-8 rounded-sm border border-academic-700 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-academic-300 mb-2">Full Name / Title</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-academic-900 border border-academic-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-academic-accent focus:ring-1 focus:ring-academic-accent transition-colors"
                  placeholder="Dr. Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-academic-300 mb-2">Institution</label>
                <input
                  type="text"
                  id="institution"
                  required
                  className="w-full bg-academic-900 border border-academic-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-academic-accent focus:ring-1 focus:ring-academic-accent transition-colors"
                  placeholder="University of..."
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-academic-300 mb-2">Institutional Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-academic-900 border border-academic-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-academic-accent focus:ring-1 focus:ring-academic-accent transition-colors"
                placeholder="jane.doe@university.edu"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-academic-300 mb-2">Message / Proposal</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-academic-900 border border-academic-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-academic-accent focus:ring-1 focus:ring-academic-accent transition-colors resize-none"
                placeholder="Detail your inquiry here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-academic-accent hover:bg-red-800 text-white font-medium py-4 px-6 rounded-sm transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : (
                <>
                  Submit Inquiry <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
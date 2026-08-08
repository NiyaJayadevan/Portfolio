import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Code, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-bold text-orange-400 font-mono">
              NJ
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">{personalInfo.name}</h3>
              <p className="text-xs text-neutral-400">
                {personalInfo.degree} • {personalInfo.institution}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{personalInfo.phone}</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <p>© {new Date().getFullYear()} Niya Jayadevan. Crafted with React & Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open for Internships & Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

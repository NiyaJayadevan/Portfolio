import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export const EducationExperience: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-orange-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tighter">
            Education & Journey
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Building a strong theoretical foundation in computer science combined with hands-on technical project development at premier institutions.
          </p>

          <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur space-y-3">
            <h3 className="text-sm font-semibold text-white">LBSITW Academic Focus</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Enrolled in Computer Science & Engineering (2024–2028). Actively applying course concepts into working code in DBMS, OOP Java, C Programming, and Modern Web Stack.
            </p>
          </div>
        </div>

        {/* Right Column: Timeline Cards */}
        <div className="lg:col-span-7 space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border-gradient relative bg-neutral-900/40 rounded-[28px] p-6 sm:p-8 backdrop-blur space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-xs text-orange-400 font-medium mt-0.5">{edu.institution}</p>
                </div>
                <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-neutral-300">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

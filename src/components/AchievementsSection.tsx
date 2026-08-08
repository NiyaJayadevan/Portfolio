import React from 'react';
import { achievements, softSkills } from '../data/portfolioData';
import { Award, Trophy, Sparkles, Navigation, Users, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-slide space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
          <Trophy className="w-3.5 h-3.5" />
          <span>Honors & Soft Skills</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tighter">
          Recognitions & Soft Skills
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm">
          Distinctions earned through ideathons, hackathons, and collaborative problem solving.
        </p>
      </div>

      {/* Main Award Spotlight Card */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="lg:col-span-6 border-gradient relative bg-neutral-900/50 rounded-[32px] p-6 sm:p-8 backdrop-blur flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Badge row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {item.badgeText}
                </span>
                <span className="text-xs font-mono text-neutral-400">{item.organization}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

              {/* Takeaways List */}
              <div className="mt-6 space-y-2.5 bg-neutral-950/60 rounded-2xl p-4 border border-neutral-800/80">
                <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider block">
                  Project Impact Highlights:
                </span>
                {item.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono">{item.award}</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Demonstrated Innovation
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Banner */}
      <div className="border-gradient bg-neutral-900/30 rounded-[32px] p-6 sm:p-8 backdrop-blur">
        <h3 className="text-xl font-semibold text-white tracking-tight mb-6 flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-orange-400" />
          <span>Professional Soft Skills & Work Ethic</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors"
            >
              <h4 className="text-xs font-bold text-orange-300">{skill.title}</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

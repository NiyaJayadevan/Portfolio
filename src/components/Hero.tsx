import React from 'react';
import { ArrowUpRight, Code, Sparkles, MapPin, Award, CheckCircle2, FileText, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow & mesh grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="animate-fade-slide inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur text-xs text-neutral-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-orange-400 absolute"></span>
          <span className="ml-1 text-neutral-300 font-medium">{personalInfo.status}</span>
        </div>

        {/* Hero Grid layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Title & Bio (Left Col 7) */}
          <div className="lg:col-span-7 space-y-6 animate-fade-slide">
            <h1 className="text-5xl sm:text-7xl lg:text-[80px] leading-[0.92] font-light tracking-tighter text-white">
              Building Software & <br />
              <span className="text-neutral-400 italic font-serif">Relational DB Systems.</span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong> — a Computer Science Engineering student at <span className="text-orange-300">{personalInfo.institution}</span>. I build web applications, design normalized SQL schemas, and conceptualize smart IoT solutions.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                <Code className="w-3.5 h-3.5 text-orange-400" /> Web Dev (HTML/CSS/JS/React)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                <Database className="w-3.5 h-3.5 text-orange-400" /> MySQL & Python DBMS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                <Award className="w-3.5 h-3.5 text-orange-400" /> 2nd Prize Ideathon Winner
              </span>
            </div>

            {/* CTA Buttons with User Component corner dots */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="btn-wrapper cursor-pointer"
                style={{
                  '--dot-size': '7px',
                  '--line-weight': '1px',
                  '--line-distance': '0.75rem 1.4rem',
                  '--dot-color': '#ffffff',
                  '--line-color': 'rgba(255, 255, 255, 0.3)',
                } as React.CSSProperties}
              >
                <div className="line horizontal top"></div>
                <div className="line vertical right"></div>
                <div className="line horizontal bottom"></div>
                <div className="line vertical left"></div>
                <div className="dot top left"></div>
                <div className="dot top right"></div>
                <div className="dot bottom right"></div>
                <div className="dot bottom left"></div>
                <button className="btn bg-transparent flex items-center text-sm font-medium text-white cursor-pointer">
                  <span>Explore My Projects</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-orange-400" />
                </button>
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200 flex items-center gap-2"
              >
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Profile Card & Avatar Highlight (Right Col 5) */}
          <div className="lg:col-span-5 relative animate-fade-slide">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer glowing halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-neutral-700/20 to-orange-500/10 rounded-[32px] blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative border-gradient bg-neutral-900/80 rounded-[28px] p-6 backdrop-blur-xl space-y-5">
                {/* Header Profile Row */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-400/40 shadow-xl bg-neutral-800 flex-shrink-0">
                    {/* Stylized Avatar Representation based on Resume */}
                    <div className="w-full h-full bg-gradient-to-tr from-amber-900/60 via-neutral-800 to-neutral-900 flex items-center justify-center relative">
                      <span className="text-2xl font-bold text-orange-400 font-mono tracking-wider">NJ</span>
                      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-900" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">{personalInfo.name}</h3>
                    <p className="text-xs text-orange-400 font-medium">{personalInfo.degree}</p>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                {/* About snippet from resume */}
                <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950/60 rounded-2xl p-4 border border-neutral-800/80">
                  "{personalInfo.about}"
                </p>

                {/* Key stats pill list */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-neutral-950/40 border border-neutral-800/60">
                    <span className="text-neutral-400 text-[10px] block">Institution</span>
                    <span className="text-white font-semibold text-xs truncate block">LBSITW, Poojapura</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950/40 border border-neutral-800/60">
                    <span className="text-neutral-400 text-[10px] block">Batch</span>
                    <span className="text-white font-semibold text-xs block">{personalInfo.batch}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

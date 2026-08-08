import React from 'react';
import { ArrowRight, Code2, Database, Shield, Cpu, Wand2, Terminal, Award } from 'lucide-react';
import { skillCategories, personalInfo } from '../data/portfolioData';

interface TechStackGridProps {
  onOpenContact: () => void;
}

export const TechStackGrid: React.FC<TechStackGridProps> = ({ onOpenContact }) => {
  return (
    <section id="skills" className="sm:px-6 sm:mt-10 sm:mb-20 lg:px-8 z-10 max-w-7xl mx-auto px-4 py-16">
      {/* Heading + CTA Row from User Component */}
      <div className="grid md:grid-cols-3 gap-6 items-start animate-fade-slide">
        <div className="md:col-span-2">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
            Technical Competencies
          </span>
          <h2 className="leading-tight sm:text-4xl lg:text-6xl text-3xl font-light text-white tracking-tighter">
            Solutions Tailored to Your Stack
          </h2>
        </div>
        <div className="flex md:justify-end">
          <div className="max-w-sm space-y-3">
            <p className="sm:text-sm leading-relaxed text-xs text-neutral-400">
              Transforming complex problem statements into clean code, normalized MySQL databases, and intuitive user experiences.
            </p>
            <div>
              <button
                onClick={onOpenContact}
                className="btn-wrapper cursor-pointer"
                style={{
                  '--dot-size': '8px',
                  '--line-weight': '1px',
                  '--line-distance': '0.8rem 1rem',
                  '--animation-speed': '0.35s',
                  '--dot-color': 'rgba(255, 255, 255, 0.9)',
                  '--line-color': 'rgba(255, 255, 255, 0.25)',
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
                <div className="btn bg-transparent flex items-center">
                  <span className="btn-text text-xs text-white font-medium">Collaborate With Me</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-orange-400" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid from User Component */}
      <div className="grid grid-cols-1 sm:mt-8 sm:gap-4 md:grid-cols-4 mt-10 gap-3">
        {/* Card 1: Web Engineering */}
        <div className="border-gradient animate-fade-slide sm:rounded-[30px] sm:p-5 min-h-[220px] flex flex-col p-5 backdrop-blur justify-between bg-neutral-900/40 rounded-[20px]">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-xl text-orange-400">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="text-xs font-mono text-neutral-400">01 / Frontend</span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold text-white tracking-tight sm:text-2xl">
              Web Development
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              HTML5, CSS3, JavaScript (ES6+), React & Responsive UI design.
            </p>
          </div>
        </div>

        {/* Card 2: Highlighted Card (White highlight as in user snippet) */}
        <div className="animate-fade-slide relative rounded-[22px] sm:rounded-[28px] p-0">
          <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-br from-orange-400/30 via-white/10 to-orange-500/20 rounded-[28px] pointer-events-none"></div>
          <div className="sm:rounded-[24px] sm:p-5 min-h-[220px] hover:rotate-0 transition text-neutral-900 bg-white bg-cover rounded-[20px] p-5 relative shadow-[0_10px_50px_-12px_rgba(255,255,255,0.35)] -rotate-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-800">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900/10 text-neutral-900 font-bold">
                <Database className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono font-bold bg-neutral-900/10 px-2 py-0.5 rounded-full text-neutral-800">
                Core Specialty
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-base font-semibold tracking-tight text-neutral-950 sm:text-2xl">
                DBMS & MySQL
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                Relational schema normalization (3NF), SQL querying, and Python database driver integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Systems & OOP */}
        <div className="border-gradient animate-fade-slide min-h-[220px] flex flex-col sm:rounded-[24px] sm:p-5 rounded-[20px] p-5 backdrop-blur justify-between bg-neutral-900/40">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-xl text-amber-400">
              <Terminal className="w-5 h-5" />
            </span>
            <span className="text-xs font-mono text-neutral-400">03 / OOP & Logic</span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold tracking-tight text-white sm:text-2xl">
              Python, Java & C
            </h3>
            <p className="sm:text-sm leading-relaxed text-xs text-neutral-400 mt-1.5">
              Object-oriented programming, inheritance, encapsulation, and algorithm fundamentals.
            </p>
          </div>
        </div>

        {/* Card 4: IoT Innovations */}
        <div className="border-gradient animate-fade-slide min-h-[220px] flex flex-col sm:rounded-[24px] sm:p-5 rounded-[20px] p-5 backdrop-blur justify-between bg-neutral-900/40">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-xl text-orange-400">
              <Cpu className="w-5 h-5" />
            </span>
            <span className="text-xs font-mono text-neutral-400">04 / Innovation</span>
          </div>
          <div className="mt-8">
            <h3 className="sm:text-2xl text-base font-semibold text-white tracking-tight">
              IoT & Smart Devices
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              2nd Prize Ideathon winner for IoT public office wait-time prediction and navigation concept.
            </p>
          </div>
        </div>
      </div>

      {/* KPIs Row from User Component */}
      <div className="sm:mt-8 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 mt-8 gap-3">
        <div className="border-gradient sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] p-5 backdrop-blur">
          <p className="text-[10px] sm:text-xs text-neutral-400 font-mono uppercase tracking-wider">
            Key Achievement
          </p>
          <p className="sm:text-xl md:text-2xl text-lg font-bold text-white tracking-tight mt-1 flex items-center gap-2">
            <span>2nd Prize Winner</span>
            <Award className="w-5 h-5 text-amber-400 inline" />
          </p>
          <p className="text-[10px] sm:text-xs text-neutral-400 mt-1">
            Ideathon IoT Smart Navigation Concept
          </p>
        </div>

        <div className="border-gradient sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] p-5 backdrop-blur">
          <p className="text-[10px] sm:text-xs text-neutral-400 font-mono uppercase tracking-wider">
            Hands-on Systems
          </p>
          <p className="mt-1 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
            4+ Core Projects
          </p>
          <p className="text-[10px] sm:text-xs text-neutral-400 mt-1">
            DBMS, Web, Java Cart & Hackathons
          </p>
        </div>

        <div className="border-gradient sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] p-5 backdrop-blur">
          <p className="text-[10px] sm:text-xs text-neutral-400 font-mono uppercase tracking-wider">
            Academic Status
          </p>
          <p className="mt-1 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
            2024 – 2028 Batch
          </p>
          <p className="text-[10px] sm:text-xs text-neutral-400 mt-1">
            BTech CSE @ LBSITW, Poojapura
          </p>
        </div>
      </div>
    </section>
  );
};

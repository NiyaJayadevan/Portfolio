import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { FolderGit2, Code2, Database, ExternalLink, ChevronRight, CheckCircle2, Layers, X, FileCode } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'DBMS & Full-Stack', 'Hackathon Project', 'Java OOP'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => {
          if (selectedCategory === 'DBMS & Full-Stack') return p.type.includes('DBMS') || p.type.includes('Backend');
          if (selectedCategory === 'Hackathon Project') return p.type.includes('Hackathon');
          if (selectedCategory === 'Java OOP') return p.type.includes('Java');
          return true;
        });

  return (
    <section id="projects" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest mb-2 font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tighter">
            Hands-on Systems & Projects
          </h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl">
            Real-world software built during coursework, Google Solutions Hackathons, and technical design challenges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 bg-neutral-900/60 p-1.5 rounded-2xl border border-neutral-800 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border-gradient group relative bg-neutral-900/40 rounded-[28px] p-6 backdrop-blur flex flex-col justify-between transition-all duration-300 hover:bg-neutral-900/70"
          >
            <div>
              {/* Header Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-800 border border-neutral-700/80 text-orange-300">
                  {project.type}
                </span>
                <span className="text-xs text-neutral-400 font-mono">{project.period}</span>
              </div>

              {/* Title & Summary */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed">
                {project.summary}
              </p>

              {/* Key Features Bullets */}
              <ul className="mt-4 space-y-1.5 text-xs text-neutral-400">
                {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-950/80 border border-neutral-800 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between">
              <div className="flex gap-4 text-xs font-mono text-neutral-400">
                {project.metrics?.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-white font-semibold">{m.value}</span>{' '}
                    <span className="text-[10px] text-neutral-400">({m.label})</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors cursor-pointer group/btn"
              >
                <span>View Details & Code</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal Overlay */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-slide">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-[28px] p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-800 pb-5">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-2">
                  {activeModalProject.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-orange-400 tracking-wider">
                System Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {activeModalProject.fullDescription}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 bg-neutral-950/60 rounded-2xl p-4 border border-neutral-800/80">
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-400" />
                <span>Key Capabilities & Features</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {activeModalProject.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Highlight */}
            {activeModalProject.codeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-orange-400" />
                    <span>{activeModalProject.codeSnippet.filename}</span>
                  </span>
                  <span className="text-[10px] uppercase bg-neutral-800 px-2 py-0.5 rounded">
                    {activeModalProject.codeSnippet.language}
                  </span>
                </div>
                <div className="bg-neutral-950 rounded-xl p-4 border border-neutral-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                  <pre>{activeModalProject.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

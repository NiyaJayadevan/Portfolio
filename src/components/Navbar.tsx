import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Award, FolderGit2, GraduationCap, Mail, Phone, Menu, X, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Terminal },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Live Demo', href: '#playground', icon: Sparkles },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo & status */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60 flex items-center justify-center font-semibold text-white group-hover:border-neutral-500 transition-colors shadow-inner">
            <span className="text-orange-400 font-mono text-lg">NJ</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold tracking-tight text-sm sm:text-base group-hover:text-orange-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-400/10 text-orange-400 border border-orange-400/20">
                BTech CSE
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px]">LBSITW '28</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-400' : ''}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden lg:inline">{personalInfo.email}</span>
          </a>

          <button
            onClick={onOpenContact}
            className="btn-wrapper text-xs text-white font-medium cursor-pointer"
            style={{
              '--dot-size': '5px',
              '--line-weight': '1px',
              '--line-distance': '0.5rem 1rem',
              '--dot-color': '#f97316',
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
            <span className="flex items-center gap-1.5 text-xs text-white font-medium">
              <span>Contact Me</span>
              <Phone className="w-3 h-3 text-orange-400" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900/60 border border-neutral-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl px-4 py-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800/80 text-xs text-neutral-300 hover:text-white hover:border-neutral-700"
                >
                  <Icon className="w-4 h-4 text-orange-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-neutral-800/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

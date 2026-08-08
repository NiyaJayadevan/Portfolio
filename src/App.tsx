import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { TechStackGrid } from './components/TechStackGrid';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationExperience } from './components/EducationExperience';
import { ProjectPlayground } from './components/ProjectPlayground';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'achievements', 'education', 'playground'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 selection:text-orange-200">
      {/* Floating Header */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="space-y-6 sm:space-y-12">
        {/* Hero Banner */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* User's Component 1: Marquee Trust Bar */}
        <TrustTicker />

        {/* User's Component 2: 4-Card Tech Grid & KPIs */}
        <TechStackGrid onOpenContact={() => setIsContactOpen(true)} />

        {/* Projects Showcase */}
        <ProjectsSection />

        {/* Interactive Live Playground */}
        <ProjectPlayground />

        {/* Achievements & Soft Skills */}
        <AchievementsSection />

        {/* Academic Journey */}
        <EducationExperience />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Drawer Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

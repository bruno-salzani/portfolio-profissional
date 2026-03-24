
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './LanguageContext';

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <section id="skills" className="py-24 px-4 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">{t('skills.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-center gradient-text">{t('skills.title')}</h2>
            </div>
            <Skills />
          </div>
        </section>

        <section id="experience" className="py-24 px-4 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">{t('experience.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-center gradient-text">{t('experience.title')}</h2>
            </div>
            <Experience />
          </div>
        </section>

        <section id="projects" className="py-24 px-4 bg-[#0a0a0c] scroll-mt-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <span className="text-purple-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">{t('projects.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-center gradient-text">{t('projects.title')}</h2>
            </div>
            <Projects />
          </div>
        </section>

        <section id="certifications" className="py-24 px-4 bg-[#0a0a0c] scroll-mt-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <span className="text-green-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">{t('certifications.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-center gradient-text">{t('certifications.title')}</h2>
            </div>
            <Certifications />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;

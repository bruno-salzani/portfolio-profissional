
import React from 'react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Compensação para o header fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-8'}`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group"
          aria-label="Voltar ao topo"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20" aria-hidden="true">B</div>
          <div className="text-xl font-black tracking-tighter">
            <span className="gradient-text">BRUNO</span> SALZANI
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1 text-sm font-bold text-slate-400" aria-label="Navegação principal">
          <a 
            href="#skills" 
            onClick={(e) => handleScroll(e, 'skills')}
            className="px-4 py-2 hover:text-white transition-colors rounded-xl hover:bg-white/5"
          >
            {t('nav.skills')}
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="px-4 py-2 hover:text-white transition-colors rounded-xl hover:bg-white/5"
          >
            {t('nav.projects')}
          </a>
          <a 
            href="#experience" 
            onClick={(e) => handleScroll(e, 'experience')}
            className="px-4 py-2 hover:text-white transition-colors rounded-xl hover:bg-white/5"
          >
            {t('nav.experience')}
          </a>
          <a 
            href="#certifications" 
            onClick={(e) => handleScroll(e, 'certifications')}
            className="px-4 py-2 hover:text-white transition-colors rounded-xl hover:bg-white/5"
          >
            {t('nav.certifications')}
          </a>
          <div className="w-[1px] h-6 bg-slate-800 mx-2" aria-hidden="true"></div>
          
          <div className="flex items-center gap-2 mr-4">
            <button
              onClick={() => setLanguage('pt')}
              className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${language === 'pt' ? 'border-blue-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
              title="Português"
            >
              <img src="https://flagcdn.com/w40/br.png" alt="PT" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${language === 'en' ? 'border-blue-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
              title="English"
            >
              <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-full h-full object-cover" />
            </button>
          </div>

          <a 
            href="https://github.com/bruno-salzani/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            aria-label="Ver perfil no GitHub"
          >
            <i className="ph ph-github-logo text-2xl"></i>
          </a>
          <a 
            href="https://wa.me/5519987096082" 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-white text-black px-6 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95 flex items-center justify-center"
            aria-label="Entrar em contato via WhatsApp"
          >
            {t('hero.cta.contact')}
          </a>
        </nav>

        <button 
          className="md:hidden text-white p-2 bg-white/5 rounded-xl"
          aria-label="Abrir menu de navegação"
        >
          <i className="ph ph-list text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

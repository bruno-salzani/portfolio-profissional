
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'QA' | 'Other'>('All');

  const filteredProjects = PROJECTS.filter(p => activeTab === 'All' || p.category === activeTab);

  const getGenericDescription = (category: string) => {
    switch(category) {
      case 'QA': return 'Implementação moderna com foco em estratégias de teste automatizado, desenvolvida com abordagem AI-Driven para máxima eficiência e cobertura.';
      default: return 'Projeto diversificado explorando novas tecnologias, cibersegurança e desenvolvimento especializado com suporte de IA avançada.';
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {(['All', 'QA', 'Other'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border ${
              activeTab === tab 
              ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105' 
              : 'bg-white/5 border-white/10 text-slate-500 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab === 'All' ? 'VER TODOS' : tab === 'QA' ? 'QUALIDADE / QA' : 'OUTROS'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <a 
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-6 rounded-2xl bg-[#0d0d0f] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
          >
            {/* Grid Overlay inside card */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg ${
                  project.title.toLowerCase().includes('mobile') || project.title.toLowerCase().includes('appium') ? 'bg-amber-500/10 text-amber-400' :
                  project.title.toLowerCase().includes('api') ? 'bg-rose-500/10 text-rose-400' :
                  project.category === 'QA' ? 'bg-purple-500/10 text-purple-400' : 
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  <i className={`ph ${
                    project.title.toLowerCase().includes('mobile') || project.title.toLowerCase().includes('appium') ? 'ph-device-mobile' :
                    project.title.toLowerCase().includes('api') ? 'ph-plugs-connected' :
                    project.category === 'QA' ? 'ph-check-square-offset' : 
                    'ph-cube'
                  } text-xl`}></i>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-md uppercase border border-white/5">{project.date}</span>
              </div>

              <h4 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                {project.title}
              </h4>
              
              <p className="text-xs text-slate-500 mb-6 line-clamp-3 leading-relaxed font-medium">
                {project.description || getGenericDescription(project.category)}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-blue-400 transition-all uppercase">
                  <span>Explorar Código</span>
                  <i className="ph ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 group-hover:animate-pulse"></div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

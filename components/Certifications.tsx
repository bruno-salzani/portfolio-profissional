
import React, { useMemo, useState } from 'react';
import { CERTIFICATIONS } from '../constants';

export const Certifications: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = useMemo(() => {
    const map = new Map<string, typeof CERTIFICATIONS>();
    CERTIFICATIONS.forEach(cert => {
      const list = map.get(cert.category) || [];
      list.push(cert);
      map.set(cert.category, list);
    });
    return Array.from(map.entries());
  }, []);

  const visibleCategories = isExpanded ? categories : categories.slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-16">
        {visibleCategories.map(([category, certs]) => (
          <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-black text-white uppercase tracking-wider">{category}</h3>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certs.map((cert, idx) => (
                <a 
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                    <i className="ph ph-medal text-2xl text-blue-500"></i>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-sm font-black text-slate-200 group-hover:text-blue-400 transition-colors leading-tight mb-1">{cert.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                      <span className="text-[10px] font-bold text-slate-500">{cert.date}</span>
                    </div>
                  </div>
                  <i className="ph ph-arrow-square-out text-xl text-slate-700 group-hover:text-blue-500 transition-colors ml-4"></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
        >
          <i className={`ph ${isExpanded ? 'ph-caret-up' : 'ph-caret-down'} text-xl group-hover:scale-110 transition-transform`}></i>
          {isExpanded ? 'MINIMIZAR CERTIFICAÇÕES' : 'VER TODAS AS CERTIFICAÇÕES'}
        </button>
      </div>

      <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 text-center mt-8">
        <p className="text-lg italic text-slate-300 max-w-2xl mx-auto leading-relaxed">
          "Essas certificações são um reflexo da minha jornada de aprendizado contínuo e dedicação em melhorar tanto minha expertise técnica quanto habilidades interpessoais."
        </p>
      </div>
    </div>
  );
};

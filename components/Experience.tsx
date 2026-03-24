
import React from 'react';
import { EXPERIENCES } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-12">
      {EXPERIENCES.map((exp, index) => (
        <div 
          key={index} 
          className="relative pl-8 md:pl-12 border-l border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Dot on the timeline */}
          <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-black text-white mb-1 tracking-tight uppercase">{t(`exp.${index}.role`)}</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-widest">
                <span className="text-blue-400">{t(`exp.${index}.company`)}</span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-500">{t(`exp.type.fulltime`)}</span>
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs font-black text-slate-200 mb-1 uppercase tracking-tighter">
                {t(`exp.${index}.period`)}
              </div>
              <div className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                {t(`exp.${index}.duration`)}
              </div>
            </div>
          </div>

          <div className="text-[10px] font-bold text-slate-500 mb-6 uppercase tracking-widest flex items-center gap-2">
            <i className="ph ph-map-pin text-blue-500/50"></i>
            {t(`exp.${index}.location`)}
          </div>

          <ul className="space-y-4">
            {exp.description.map((_, i) => {
              const translatedItem = t(`exp.${index}.desc.${i}`);
              const [title, ...rest] = translatedItem.split(':');
              return (
                <li key={i} className="flex gap-3 text-slate-400 leading-relaxed group/item">
                  <span className="text-blue-500/30 shrink-0 mt-1.5 group-hover/item:text-blue-500 transition-colors">•</span>
                  <p className="text-sm">
                    <span className="text-slate-300 font-bold uppercase text-[11px] tracking-wider">{title}:</span>
                    <span className="ml-1 text-slate-400">{rest.join(':')}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

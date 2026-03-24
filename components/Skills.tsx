
import React from 'react';
import { TECH_STACK } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const SkillCard = ({ title, items, colorClass, icon }: { title: string, items: string[], colorClass: string, icon: string }) => (
    <div className="glass p-6 rounded-2xl hover:translate-y-[-4px] transition-all duration-500 group card-gradient h-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
      
      <div className="relative z-10">
        <div className={`w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/5 ${colorClass}`}>
          <i className={`ph ${icon} text-xl`}></i>
        </div>
        <h3 className="text-sm font-black mb-4 text-white uppercase tracking-widest">{title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <span 
              key={item} 
              className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-slate-400 group-hover:text-slate-200 group-hover:border-white/10 transition-all uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkillCard 
        title={t('skills.languages')} 
        items={TECH_STACK.languages} 
        colorClass="text-blue-400" 
        icon="ph-code"
      />
      <SkillCard 
        title={t('skills.automation')} 
        items={TECH_STACK.automation} 
        colorClass="text-purple-400" 
        icon="ph-robot"
      />
      <SkillCard 
        title={t('skills.tools')} 
        items={TECH_STACK.tools} 
        colorClass="text-emerald-400" 
        icon="ph-wrench"
      />
      <SkillCard 
        title={t('skills.ai')} 
        items={TECH_STACK.ai} 
        colorClass="text-cyan-400" 
        icon="ph-brain"
      />
      <SkillCard 
        title={t('skills.cicd')} 
        items={TECH_STACK.devops} 
        colorClass="text-green-400" 
        icon="ph-rocket-launch"
      />
      <SkillCard 
        title={t('skills.management')} 
        items={TECH_STACK.agile} 
        colorClass="text-orange-400" 
        icon="ph-strategy"
      />
    </div>
  );
};


import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-2xl font-black mb-6">
          <span className="gradient-text">BRUNO</span> SALZANI
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.linkedin.com/in/brunosalzani" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/bruno-salzani" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="mailto:brunosalzani@hotmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
        </div>

        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Bruno Salzani. Todos os direitos reservados.
        </p>
        <p className="text-slate-700 text-xs mt-2">
          Desenvolvido com React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

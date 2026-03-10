
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 overflow-hidden" aria-label="Introdução">
      {/* Elementos de Fundo com Blur Dinâmico */}
      <div className="absolute top-[15%] right-[5%] -z-10 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[10%] left-[5%] -z-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Esquerda: Conteúdo */}
        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
            7+ Anos de Experiência em Tecnologia
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95] text-white animate-in fade-in slide-in-from-left-4 duration-1000 delay-150">
            Qualidade em <br />
            <span className="gradient-text">Cada Linha</span><br />
            de Código.
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed animate-in fade-in slide-in-from-left-4 duration-1000 delay-300 font-medium">
            Olá, sou <span className="text-white font-bold">Bruno Salzani</span>, Especialista em qualidade de software com 7+ anos de experiência em testes manuais e automação web.
            Domino ferramentas como <span className="text-white">Cypress, Selenium e Appium</span> para garantir qualidade e agilidade em projetos complexos.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a 
              href="https://github.com/bruno-salzani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 bg-white text-black rounded-full text-xs font-black tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
              title="Ver perfil no GitHub"
            >
              <i className="ph ph-github-logo text-lg"></i>
              GITHUB
            </a>
            <a 
              href="https://www.linkedin.com/in/brunosalzani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/10 text-white rounded-full text-xs font-black tracking-widest transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
              title="Conectar no LinkedIn"
            >
              <i className="ph ph-linkedin-logo text-lg"></i>
              LINKEDIN
            </a>
            <a 
              href="./curriculo.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/10 text-white rounded-full text-xs font-black tracking-widest transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
              title="Baixar currículo"
            >
              <i className="ph ph-file-pdf text-lg group-hover:scale-110 transition-transform"></i>
              CURRÍCULO
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-12 py-10 border-t border-white/5 w-full lg:w-auto animate-in fade-in duration-1000 delay-700">
            <div className="flex flex-col gap-1">
              <div className="text-4xl font-black text-white tracking-tighter">+7</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Anos de XP</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-4xl font-black text-white tracking-tighter">20+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Projetos</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-4xl font-black text-white tracking-tighter">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Certificados</div>
            </div>
          </div>
        </div>

        {/* Direita: Foto com Elementos Visuais */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative group">
            {/* Brilho atrás da foto */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[4rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] p-3 bg-[#0d0d0f] rounded-[4rem] shadow-2xl border border-white/10">
              {/* Background Grid clipped to container shape */}
              <div className="absolute inset-0 overflow-hidden rounded-[4rem] pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
              </div>
              
              <div className="w-full h-full overflow-hidden rounded-[3.2rem] relative z-10">
                <img 
                  src="https://avatars.githubusercontent.com/u/61254239?v=4" 
                  alt="Foto de perfil de Bruno Salzani - Especialista em Automação (SDET)" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  loading="eager"
                />
              </div>
              
              {/* Badges Flutuantes - Technical Style */}
              <div className="absolute -right-8 top-1/4 glass px-4 py-3 rounded-xl border border-white/10 shadow-2xl animate-bounce hidden md:flex items-center gap-3 z-20" style={{animationDuration: '4s'}} aria-hidden="true">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <i className="ph ph-bug text-xl text-purple-400"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Expertise</span>
                  <span className="text-[10px] text-white font-black">QA AUTOMATION</span>
                </div>
              </div>

              <div className="absolute -left-8 bottom-1/4 glass px-4 py-3 rounded-xl border border-white/10 shadow-2xl animate-bounce hidden md:flex items-center gap-3 z-20" style={{animationDuration: '5s'}} aria-hidden="true">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <i className="ph ph-shield-check text-xl text-blue-400"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Foco</span>
                  <span className="text-[10px] text-white font-black">QUALITY ASSURANCE</span>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 glass px-6 py-3 rounded-2xl border border-cyan-500/30 shadow-2xl hidden md:flex items-center gap-3 z-30 group-hover:scale-105 transition-transform" aria-hidden="true">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <i className="ph ph-brain text-2xl text-cyan-400"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-500 font-black">AI-DRIVEN DEVELOPMENT</span>
                  <span className="text-[11px] text-white font-black">DOMÍNIO EM IA GENERATIVA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-500 opacity-40" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};


import { Project, Certification, Experience } from './types';

export const PROJECTS: Project[] = [
  // AI (Categorized as Other per user request)
  { title: "OpenClaw Assistant: AI Autonomous Operating System", date: "02/2026", link: "https://github.com/bruno-salzani/openclaw-assistant", category: "Other" },
  { title: "LangGraph Assistant: AI Operating System (AI-OS)", date: "01/2026", link: "https://github.com/bruno-salzani/langgraph-assistant", category: "Other" },

  // QA
  { 
    title: "OmniMobile Automation Framework (Appium + Java)", 
    date: "03/2026", 
    link: "https://github.com/bruno-salzani/test-automation-appium-saucelabs", 
    category: "QA",
    description: "Plataforma mobile Enterprise de alta performance e máxima resiliência. Utiliza Java 21 e Appium sob arquitetura limpa para mitigar flakiness e garantir escalabilidade na automação de fluxos críticos de negócio."
  },
  { 
    title: "Test Automation – Booking.com (Selenium & Resilience4j)", 
    date: "01/2026", 
    link: "https://github.com/bruno-salzani/booking-resilience-selenium-java", 
    category: "QA",
    description: "Automação E2E resiliente para fluxos críticos de busca e reserva. Integra Selenium 4 com Resilience4j para mitigar flakiness e instabilidade. Utiliza Testcontainers para infra efêmera e técnicas avançadas de anti-bot."
  },
  { 
    title: "Test Automation - Ecommerce Playground (Selenium Java)", 
    date: "12/2025", 
    link: "https://github.com/bruno-salzani/ecommerce-selenium-java", 
    category: "QA",
    description: "Suíte E2E de nível elite com arquitetura híbrida (API + UI) e Selenium 4. Implementa Self-Healing e API Seeding para reduzir o tempo de execução em 40% e garantir resiliência total contra seletores instáveis e flakiness na UI."
  },
  { 
    title: "Test Automation - Dashboard Engine (Selenium + Java)", 
    date: "10/2025", 
    link: "https://github.com/bruno-salzani/dashboard-selenium-java", 
    category: "QA",
    description: "Automação E2E híbrida para sistemas corporativos complexos (Selenium + API). Otimiza o setup de dados via REST, reduzindo o tempo de execução em até 70% com infraestrutura efêmera em Docker via Testcontainers e JUnit 5."
  },
  { 
    title: "API Test Automation – ServeRest (Playwright + TypeScript)", 
    date: "07/2025", 
    link: "https://github.com/bruno-salzani/serverest-api-playwright-automation", 
    category: "QA",
    description: "Automação de APIs híbrida (Playwright/TypeScript + RestAssured/Java). Validação rigorosa de contratos via JSON Schema com Drift Detection, fail-fast de ambiente via Zod e pipeline integrado com Allure e k6."
  },
  { 
    title: "API Test – Trello Management (Playwright)", 
    date: "06/2025", 
    link: "https://github.com/bruno-salzani/trello-management-api-playwright", 
    category: "QA",
    description: "Automação de API de alto nível com Playwright, focada em SLAs e Resiliência. Possui injeção de caos, monitoramento de métricas (p95) via InfluxDB/CSV e Drift Detection para garantir paridade total com o contrato do Trello."
  },
  { 
    title: "Test Automation – Petstore API (Rest Assured)", 
    date: "03/2025", 
    link: "https://github.com/bruno-salzani/petstore-api-playwright-automation", 
    category: "QA",
    description: "Automação de API robusta (RestAssured) com arquitetura em camadas e Clean Code. Integra testes de contrato (WireMock), performance (Gatling) e mutação (PITest) em um pipeline CI/CD avançado com Quality Gates (SonarCloud) e CodeQL."
  },
  { 
    title: "Test Automation - SPA Auctions Platform (Selenium)", 
    date: "01/2025", 
    link: "https://github.com/bruno-salzani/automation-selenium-leiloes", 
    category: "QA",
    description: "Automação E2E para plataforma de leilões utilizando Selenium e JUnit 5. Implementa o padrão Page Objects para isolar a lógica de UI e garantir alta manutenibilidade em fluxos críticos de autenticação e cadastro de itens."
  },
  { 
    title: "Test Automation - Adopet SPA (Cypress)", 
    date: "12/2024", 
    link: "https://github.com/bruno-salzani/automation-cypress-adopet", 
    category: "QA",
    description: "Automação E2E híbrida (UI + API) para SPA utilizando Cypress e JavaScript. Implementa comandos customizados e Page Objects com seletores estáveis, garantindo feedback rápido e relatórios detalhados via Mochawesome."
  },
  { 
    title: "QA Strategy & Testing - Neolude LMS (Web & Mobile)", 
    date: "05/2024", 
    link: "https://github.com/bruno-salzani/neolude-lms-web-app-qa", 
    category: "QA",
    description: "Estratégia de QA multiplataforma (Web, Mobile e API) para sistema de LMS. Validação de fluxos complexos de gamificação e integridade de dados entre camadas com Postman e SoapUI, utilizando Jira e Redmine para gestão de defeitos."
  },
  { 
    title: "QA Testing - Natura Gamification Platform (Web)", 
    date: "03/2024", 
    link: "https://github.com/bruno-salzani/natura-gamification-web-qa", 
    category: "QA",
    description: "Garantia de qualidade para plataforma de gamificação multiplataforma (Web/Mobile). Validação de integridade de dados entre LMS e Frontend, com testes de API focados em performance e fidelidade dos elementos de gamificação via Postman."
  },
  { 
    title: "Test Automation - Neolude LMS Platform (Cypress)", 
    date: "02/2024", 
    link: "https://github.com/bruno-salzani/neolude-lms-e2e-cypress", 
    category: "QA",
    description: "Automação RPA baseada em Cypress para provisionamento em massa de dados no LMS. Realiza a conversão Excel-to-JSON para criação automatizada de cursos em lote, eliminando erros manuais e reduzindo o tempo de implantação operacional."
  },
  { 
    title: "Mobile QA Testing - Prudential LMS App", 
    date: "12/2023", 
    link: "https://github.com/bruno-salzani/prudential-lms-mobile-qa", 
    category: "QA",
    description: "Estratégia de QA Mobile para aplicativo educacional nativo (iOS/Android). Validação cross-platform focada em fragmentação Android e sincronização de dados, com aplicação de Matriz de Rastreabilidade (RTM) e redução de 40% de bugs críticos."
  },

  // Web Development
  { title: "AeroMaintain Pro (React + Node.js + Clean Architecture)", date: "01/2026", link: "https://github.com/bruno-salzani/aeromaintain-pro", category: "Web" },
  { title: "Borges Captações - (HTML5 + CSS3)", date: "06/2025", link: "https://github.com/bruno-salzani/borges-captacoes", category: "Web" },
  { title: "Stargames Informática (Vite + Web Components)", date: "05/2025", link: "https://github.com/bruno-salzani/stargames-informatica", category: "Web" },
  { title: "Clínica Nova Vida - Modern Web Platform", date: "04/2025", link: "https://github.com/bruno-salzani/clinica-novavida/", category: "Web" },
  { title: "MinifyCSS (Staff Engineer Edition)", date: "03/2023", link: "https://github.com/bruno-salzani/minifycss", category: "Web" },
  { title: "Binary to Decimal (Staff Engineer Review Edition)", date: "01/2023", link: "https://github.com/bruno-salzani/bin2dec", category: "Web" },
  { title: "Blog Terceira Idade (Vue.js + TailwindCSS)", date: "08/2021", link: "https://github.com/bruno-salzani/blog-terceira-idade", category: "Web" },
  { title: "Projeto Terceira Idade", date: "06/2021", link: "https://github.com/bruno-salzani/terceira-idade", category: "Web" },
  { title: "HTML Presentation / Portfolio (HTML5 + CSS3)", date: "04/2021", link: "https://github.com/bruno-salzani/html-presentation", category: "Web" },
  { title: "Barbershop Alura - Elite Frontend Architecture", date: "03/2021", link: "https://github.com/bruno-salzani/html-barbershop", category: "Web" },

  // Other
  { title: "SentinelKit - Cibersegurança", date: "12/2025", link: "https://github.com/bruno-salzani/SentinelKit/tree/main", category: "Other" },
];

export const CERTIFICATIONS: Certification[] = [
  // Qualidade de Software
  { title: "Testes em .NET: integração e entrega contínua com Azure DevOps", date: "01/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/dbf97068-5a4b-424f-8b22-e475ea61cf72?lang", category: "Qualidade de Software" },
  { title: "Carreira QA: processos e automação de testes", date: "12/2022", issuer: "Alura", link: "https://cursos.alura.com.br/degree/certificate/0395f251-befa-43e4-b7f7-3c0158554247", category: "Qualidade de Software" },
  { title: "Quality Assurance: plano de testes e gestão de bugs", date: "11/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/2c8eaa73-b5c0-413c-93de-5457fbab3ef6", category: "Qualidade de Software" },
  { title: "BDD e Java: Behavior Driven Development com Cucumber", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/b1956ef4-ba40-e2d1163e9068", category: "Qualidade de Software" },
  { title: "Gerenciamento de qualidade de software parte 1: o documento MDS", date: "09/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/9e370fee-fc12-4a07-917a-302b048019b3", category: "Qualidade de Software" },
  { title: "Fundamentos Quality Assurance: TestPlan e boas práticas", date: "06/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/48e29980-9af3-4ba1-b2fa-0a7bbae60793", category: "Qualidade de Software" },

  // Automação de Testes
  { title: "Appium: compreenda e aplique testes de interface", date: "08/2025", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/appium-compreenda-e-aplique-testes-interface/certificate", category: "Automação de Testes" },
  { title: "Selenium: testes automatizados de aceitação em Java", date: "12/2024", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/0367c0df-4ac4-44d3-bee8-c15bfa2d257d?lang", category: "Automação de Testes" },
  { title: "Cypress: automatizando testes E2E", date: "12/2024", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/5c3f390b-eb84-46db-abf6-300bfd1adb33?lang=pt_BR", category: "Automação de Testes" },
  { title: "Cypress: automação de testes E2E", date: "11/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/d6e6ce51-7660-40b5-8981-85d952c6ef1c", category: "Automação de Testes" },
  { title: "Testes em .NET: testes de interface usando Selenium", date: "09/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/342ad3d1-def3-4213-aadf-3d909371112d", category: "Automação de Testes" },
  { title: "Selenium WebDriver e C# parte 1: testes da sua web app", date: "12/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/14289510-7e48-4794-9473-10c18004a68b", category: "Automação de Testes" },
  { title: "Selenium: Testes automatizados de aceitação em .NET", date: "08/2018", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/e2ec4168-3554-441f-a714-aa4438510503", category: "Automação de Testes" },

  // CI/CD
  { title: "Integração Contínua: mais qualidade e menos risco", date: "02/2025", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/desenvolvimento-software-integracao-continua/certificate", category: "CI/CD" },
  { title: "Testes em .NET: entrega contínua com Azure DevOps", date: "01/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/dbf97068-5a4b-424f-8b22-e475ea61cf72?lang", category: "CI/CD" },

  // HTML/CSS
  { title: "Layouts Responsivos: layouts mobile", date: "05/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/b7400ec7-b6a0-48e3-a3cb-9b690b39be60", category: "HTML/CSS" },
  { title: "Web Design Responsivo", date: "02/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/4bda398d-2d2d-42ed-a9b9-cf12bcd17e1c", category: "HTML/CSS" },
  { title: "Flexbox: posicione elementos", date: "01/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/1e25c3b2-d4e9-4e0b-aaa6-8033fa1afb0c", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 4: avançando", date: "01/2021", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/ad012211-a9d6-4b3c-a8b8-c80a6f08b63d", category: "HTML/CSS" },
  { title: "Arquitetura CSS", date: "11/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/15188794-4aab-4a32-9b5f-4a1d3de8b23d", category: "HTML/CSS" },
  { title: "Bootstrap 4: landing page responsiva", date: "11/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/aff894c5-b2ae-4f98-a84f-22270488cf79", category: "HTML/CSS" },
  { title: "Bootstrap: single-page responsiva", date: "11/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/2a0adb8a-fa81-4e18-ae24-e5edb390cd5b", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 II: Turbinando páginas", date: "10/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/b97424a9-97bc-4077-8091-8d0bd1ff247c", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 I: Primeiras páginas", date: "10/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/6ac2fe58-1b2c-436c-bdbc-0824b9ccc1a5", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 3: formulários", date: "09/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/4e143324-cf13-4bdf-b8e9-822825686c4d", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 2: posicionamento", date: "09/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/00979dc6-15ba-43f9-bc5a-23c0ee7be7a7", category: "HTML/CSS" },
  { title: "HTML5 e CSS3 parte 1: crie uma página", date: "09/2019", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/1209abd4-85e0-4562-a32c-10ecb7fc886f", category: "HTML/CSS" },

  // Programação
  { title: "ChatGPT e programação: produtividade", date: "08/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/bruno-salzani/chatgpt-programacao-aumente-produtividade", category: "Programação" },
  { title: "JavaScript e HTML: lógica de programação", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/c3abd570-36ac-4f45-adb9-8a79744dc5bd", category: "Programação" },
  { title: "Formação Vue.js", date: "03/2021", issuer: "Alura", link: "https://cursos.alura.com.br/degree/certificate/b27389b5-9622-4515-b751-810c5b540e30", category: "Programação" },
  { title: "Node.js Parte 1: Inovando backend", date: "06/2020", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/a235a5a5-ffb8-4fd7-9a85-a2c784d784c7", category: "Programação" },
  { title: "Python: começando com a linguagem", date: "05/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/python-introducao-a-linguagem/certificate", category: "Programação" },
  { title: "JavaScript: programando na web", date: "02/2020", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/ce4fce5e-5654-4d9e-ae48-66f7c9a4d779", category: "Programação" },
  { title: "Formação C# e orientação a objetos", date: "12/2018", issuer: "Alura", link: "https://cursos.alura.com.br/degree/certificate/ca8bf1a4-bf4d-47ab-8826-d4de8b0f06d5", category: "Programação" },
  { title: "JavaScript: Browser e padrões de projeto", date: "08/2018", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/334e425b-c8a1-49ed-8e29-ee64be9a8ce9", category: "Programação" },
  { title: "Programador de Sistemas", date: "06/2018", issuer: "Senac", link: "https://www1.intranet.sp.senac.br/senac_solution/pss/relatorios/certificados/NBASVIARAPIDA/mod29.cfm?CRYPTALGID=8a7656e2-cd47-11eb-9977-f7340aa3fd80&dt=2021-06-14-16.34.31.000000", category: "Programação" },
  { title: "Programador C#", date: "08/2014", issuer: "Microcenter", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/Certificado%20Programador.png", category: "Programação" },

  // Habilidades Interpessoais
  { title: "Equipes ágeis: papéis em uma equipe", date: "04/2024", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/equipes-ageis-organizando-papeis-equipe/certificate", category: "Habilidades Interpessoais" },
  { title: "Formação Líderes Comunicação e Feedback", date: "02/2024", issuer: "Inspand", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/Forma%C3%A7%C3%A3o%20L%C3%ADderes%20Inspand%20Comunica%C3%A7%C3%A3o%20e%20Feedback.pdf", category: "Habilidades Interpessoais" },
  { title: "Organização de Equipes Ágeis", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/organizando-equipes-ageis/certificate", category: "Habilidades Interpessoais" },
  { title: "Liderança: missão e propósito", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/primeira-lideranca-aprendendo-liderar-pessoas/certificate", category: "Habilidades Interpessoais" },
  { title: "Liderança: práticas de gestão", date: "01/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/lideranca-pratica-gestao-melhorias/certificate", category: "Habilidades Interpessoais" },
  { title: "Delegação de tarefas: melhor do time", date: "11/2021", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/delegacao-de-tarefas/certificate", category: "Habilidades Interpessoais" },
  { title: "Relacionamento interpessoal", date: "10/2021", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/relacionamento-pessoal/certificate", category: "Habilidades Interpessoais" },
  { title: "Scrum: agilidade em seu projeto", date: "12/2019", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/agile-scrum/certificate", category: "Habilidades Interpessoais" },

  // Outros
  { title: "SEO: otimização de sites", date: "06/2025", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/bruno-salzani/seo-otimizacao-de-sites", category: "Outros" },
  { title: "Git e GitHub: colaborando em projetos", date: "03/2024", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/git-github-compartilhando-colaborando-projetos/certificate", category: "Outros" },
  { title: "Git e Github: controle de versão", date: "10/2022", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/git-github-controle-de-versao/certificate", category: "Outros" },
  { title: "Funções com Excel: filtros e matemática", date: "08/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/excel-funcoes/certificate", category: "Outros" },
  { title: "Excel procv: lógica booleana", date: "08/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/excel-procv/certificate", category: "Outros" },
  { title: "Excel: domine o editor de planilhas", date: "07/2020", issuer: "Alura", link: "https://cursos.alura.com.br/user/bruno-salzani/course/excel-introducao/certificate", category: "Outros" },
  { title: "Hackaton Isat Edtechs", date: "02/2020", issuer: "Inspand", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/certificado%20hackaton.png", category: "Outros" },
  { title: "HTTP: Entendendo a web", date: "08/2018", issuer: "Alura", link: "https://cursos.alura.com.br/certificate/bruno-salzani/http-fundamentos", category: "Outros" },
  { title: "Web Designer", date: "12/2014", issuer: "Microcenter", link: "https://github.com/bruno-salzani/bruno-salzani/blob/main/Certificados/certificado%20web%20designer.png", category: "Outros" },
];

export const TECH_STACK = {
  languages: ["TypeScript", "JavaScript", "Java", "C# / .NET", "Python", "Node.js", "Vue.js", "SQL", "HTML5 / CSS3"],
  automation: ["Selenium", "Cypress", "Playwright", "Appium", "BDD / Cucumber", "Gherkin", "Rest Assured", "Resilience4j"],
  tools: ["Postman / Insomnia", "JMeter", "Allure Reports", "SonarQube", "Jira / Redmine", "SEO", "HTTP Fundamentals", "Bootstrap", "Excel Avançado"],
  devops: ["Azure DevOps", "GitHub Actions", "GitLab CI", "Git / GitHub", "Docker", "CI/CD Pipelines"],
  agile: ["Scrum / Kanban", "Liderança & Feedback", "Gestão de Bugs", "MDS / Documentação", "QA Strategy", "Shift-left Testing"],
  ai: ["Desenvolvimento Orientado a IA", "Engenharia de Prompt Avançada", "IA Generativa (LLMs)", "GitHub Copilot Mastery", "ChatGPT & Claude", "Automação de Workflow com IA"]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Analista de teste/QA",
    company: "AUREA PHIGITAL",
    type: "Tempo integral",
    period: "fev de 2025 - o momento",
    duration: "1 ano 1 mês",
    location: "Belém, Pará, Brasil · Remota",
    description: [
      "Arquitetura de Automação Mobile (Projeto Helios): Liderei o desenvolvimento do framework de automação mobile utilizando Appium, estruturando testes funcionais e de regressão para garantir a estabilidade das entregas em dispositivos Android e iOS.",
      "Engenharia de Testes E2E (Projeto Uranus): Desenvolvi e mantive uma robusta suíte de testes ponta a ponta utilizando Cypress com JavaScript e Cucumber (BDD). Implementei padrões de design como Page Objects (POM) para aumentar a manutenibilidade do código e reduzir o flakiness dos testes.",
      "Otimização de Cobertura e Qualidade (Artemis & Uranus): Expandi a cobertura de testes unitários nos projetos Uranus e Artemis em mais de 70%, reduzindo drasticamente a incidência de bugs em produção e acelerando o ciclo de feedback para o time de desenvolvimento.",
      "Integração Contínua (CI/CD): Responsável pela integração dos testes automatizados nas pipelines de GitLab CI e GitHub Actions. Configurei relatórios dinâmicos com Allure Reports para fornecer visibilidade em tempo real sobre a saúde dos projetos para os stakeholders.",
      "Gestão de Processos de Qualidade: Atuei no planejamento estratégico de testes, definindo métricas de qualidade e KPIs orientados a dados para impulsionar a maturidade do processo de desenvolvimento (Shift-left testing)."
    ]
  },
  {
    role: "Analista de teste/QA",
    company: "INSPAND",
    type: "Tempo integral",
    period: "jun de 2018 - mai de 2024",
    duration: "6 anos",
    location: "Campinas, São Paulo, Brasil · Híbrida",
    description: [
      "Testes Funcionais: Desenvolvi e executei planos de testes abrangentes para aplicações Web e Mobile, aplicando metodologias como Testes Baseados em Requisitos e BDD.",
      "Testes de Integração: Realizei testes de integração com ferramentas como Postman e SoapUI, garantindo a perfeita interação entre os componentes do sistema.",
      "Automação de Testes: Criei e executei testes automatizados para aplicações Web utilizando Cypress e Selenium, com versionamento de código via Git.",
      "Testes de Desempenho: Conduzi testes de desempenho utilizando JMeter e Google Lighthouse, otimizando a estabilidade e eficiência das aplicações.",
      "Gerenciamento de Defeitos: Reportei e gerenciei defeitos utilizando Jira e Redmine, assegurando uma resolução eficiente e contribuindo para a melhoria contínua dos processos de qualidade.",
      "Analise de Requisitos: Colaborei com o Product Owner e Analista de Requisitos para refinar escopos de projeto, garantindo que todos os requisitos fossem compreendidos e corretamente implementados, identificando possíveis bugs e inconsistências.",
      "Liderança de Equipe: Recrutei e treinei novos membros da equipe de Qualidade, delegando tarefas e acompanhando o progresso das demandas para garantir entregas dentro do prazo e com alta qualidade."
    ]
  }
];

const Features = () => {
  const features = [
    {
      title: "Centralização Omnichannel",
      description: "Unifique WhatsApp, Instagram, Facebook, Email, Chat e outras plataformas em uma única interface intuitiva.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      ),
    },
    {
      title: "Automação por IA",
      description: "Automatize respostas repetitivas e use nossa IA para entender contextos e resolver problemas sem intervenção humana.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5v2M12 17v2M5 12H3M21 12h-2M18.5 5.5l-1.4 1.4M6.9 5.5l1.4 1.4M18.5 18.5l-1.4-1.4M6.9 18.5l1.4-1.4" />
          <rect width="8" height="8" x="8" y="8" rx="2" />
        </svg>
      ),
    },
    {
      title: "Dashboards e Relatórios",
      description: "Dados em tempo real e análises profundas para melhorar o desempenho e identificar oportunidades de otimização.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <path d="m14 15-2.5 2.5L10 16" />
          <path d="M18.5 15.5c-.83.83-2.17.83-3 0-.83-.83-.83-2.17 0-3 .83-.83 2.17-.83 3 0 .83.83.83 2.17 0 3Z" />
        </svg>
      ),
    },
    {
      title: "Segurança e Controle de Acesso",
      description: "Proteção de dados em nível enterprise, criptografia e gerenciamento granular de permissões para sua equipe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M12 15a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1z" />
        </svg>
      ),
    },
    {
      title: "Agentes Virtuais e Memória",
      description: "Bots inteligentes com memória contextual que aprendem continuamente e se integram perfeitamente ao atendimento humano.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <path d="M16 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.5" />
          <path d="M8 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4z" />
          <path d="M2 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7z" />
          <path d="M6 10V6" />
          <path d="M18 10V6" />
          <path d="M12 22v-7" />
        </svg>
      ),
    },
    {
      title: "Integrações Empresariais",
      description: "Conecte-se facilmente com SAP, Oracle, Salesforce e outras plataformas enterprise com nossos conectores prontos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="4" cy="4" r="2" />
          <circle cx="20" cy="4" r="2" />
          <circle cx="4" cy="20" r="2" />
          <circle cx="20" cy="20" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Funcionalidades Avançadas
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Uma plataforma completa com recursos pensados para operações enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-[#25D366] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Atendimento 360º em todos os canais",
      description: "Gerencie WhatsApp, Instagram, Facebook e outros canais em uma única interface fácil e intuitiva.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      ),
    },
    {
      title: "Análise de sentimento com IA",
      description: "Entenda o humor dos seus clientes e antecipe-se a problemas com nossa tecnologia avançada de IA.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 7h.01" />
          <path d="M15.5 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
        </svg>
      ),
    },
    {
      title: "Integração com CRM e ERP",
      description: "Conecte-se facilmente com seus sistemas existentes e mantenha todos os dados sincronizados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
          <rect width="8" height="8" x="3" y="3" rx="2" />
          <rect width="8" height="8" x="13" y="3" rx="2" />
          <rect width="8" height="8" x="3" y="13" rx="2" />
          <rect width="8" height="8" x="13" y="13" rx="2" />
        </svg>
      ),
    },
    {
      title: "Equipe capacitada, com suporte contínuo",
      description: "Oferecemos treinamento completo e suporte técnico 24/7 para garantir o máximo desempenho.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Benefícios que transformam seu atendimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções projetadas para elevar a experiência do cliente e otimizar as operações da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366]/10 mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 
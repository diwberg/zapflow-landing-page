const ForWho = () => {
  const profiles = [
    {
      title: "Grandes empresas de e-commerce",
      description: "Com alto volume de atendimentos e múltiplos canais de venda."
    },
    {
      title: "Empresas de telecomunicações",
      description: "Que necessitam gerenciar milhares de interações diárias com clientes."
    },
    {
      title: "Instituições financeiras",
      description: "Que demandam segurança, conformidade e atendimento personalizado."
    },
    {
      title: "Operações de saúde e seguros",
      description: "Com processos complexos e necessidade de acompanhamento contínuo."
    },
    {
      title: "Empresas com operações globais",
      description: "Que precisam de atendimento em múltiplos idiomas e fusos horários."
    },
    {
      title: "Varejistas com multicanais",
      description: "Integrando experiências online e offline para seus clientes."
    }
  ];

  return (
    <section id="for-who" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-700">
            Feito para operações que não podem parar
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Soluções enterprise para empresas que valorizam qualidade, segurança 
            e precisão em seus atendimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="mt-1 bg-[#25D366] rounded-full p-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{profile.title}</h3>
                <p className="text-gray-600 mt-1">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho; 
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silveira",
      position: "Diretora de Operações",
      company: "TechGroup Brasil",
      quote: "O Zapflow transformou completamente o nosso SAC. Reduzimos o tempo médio de resposta em 67% e aumentamos a satisfação dos clientes para 92%.",
    },
    {
      name: "Roberto Mendes",
      position: "CTO",
      company: "GlobalConnect",
      quote: "A inteligência artificial do Zapflow consegue resolver 78% das interações sem intervenção humana, liberando nosso time para casos mais complexos.",
    },
    {
      name: "Carla Moreira",
      position: "Head de Atendimento",
      company: "Fintech Solutions",
      quote: "A segurança e conformidade da plataforma nos permitiu implementar atendimento digital em um setor altamente regulado sem preocupações.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-700 font-bold tracking-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Empresas que transformaram seu atendimento com o Zapflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]/30">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  
                  <p className="text-lg leading-relaxed text-gray-700">{testimonial.quote}</p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-600">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
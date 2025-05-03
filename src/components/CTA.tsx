"use client";

import { Button } from "./ui/button";
import { useDemoModalStore } from "@/store/useDemoModalStore";

const CTA = () => {
  const { openModal } = useDemoModalStore();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zapflow-primary/90 to-zapflow-secondary/90 z-0"></div>
      
      {/* Visual elements */}
      <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter dark:text-white">
            Transforme seu atendimento em um ativo estratégico.
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Junte-se às empresas que já elevaram sua experiência de atendimento 
            ao cliente a um novo patamar com a tecnologia Zapflow.
          </p>
          
          <Button 
            size="lg" 
            variant="zapflowPrimary"
            className="text-lg px-8 py-2 h-auto font-medium"
            onClick={() => openModal('Empresarial')}
          >
            Solicitar Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA; 
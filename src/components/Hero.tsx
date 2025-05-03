"use client";

import { Button } from "./ui/button";
import { useDemoModalStore } from "@/store/useDemoModalStore";
import Image from "next/image";

const Hero = () => {
  const { openModal } = useDemoModalStore();

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Sistema de Atendimento Omnichannel com <span className="text-[#25D366]">Inteligência Artificial</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Centralize todos os seus canais de atendimento em uma única plataforma omnichannel. 
              Integre WhatsApp, Instagram, Facebook, YouTube, OLX, E-mail e mais — com automações inteligentes, 
              análise de sentimento por IA e visibilidade total da sua operação.
            </p>
            
            <Button 
              size="lg" 
              variant="zapflowPrimary"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => openModal()}
            >
              Fale com um especialista
            </Button>
          </div>
          
          <div className="flex-1 relative" aria-labelledby="hero-image-label">
            <h2 id="hero-image-label" className="sr-only">Dashboard do Zapflow Atendimento omnichannel</h2>
            <div className="aspect-video bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/dashboard-preview.png" 
                alt="Dashboard do Zapflow mostrando centralização de canais de atendimento como WhatsApp e Instagram"
                width={650}
                height={366}
                priority
                className="w-full h-auto object-cover rounded-lg"
                onError={(e) => {
                  // Fallback to SVG if image doesn't exist yet
                  e.currentTarget.style.display = 'none';
                  document.getElementById('fallback-svg')?.removeAttribute('style');
                }}
              />
              <svg
                id="fallback-svg"
                style={{display: 'none'}}
                className="w-3/4 h-3/4 text-gray-400 dark:text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                role="img"
                aria-label="Dashboard do Zapflow mostrando centralização de canais de atendimento"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M8 12h8" />
                <path d="M12 16V8" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-900/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-zapflow-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20" />
    </section>
  );
};

export default Hero; 
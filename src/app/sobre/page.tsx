"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Sobre a Zapflow
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Missão e Visão */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossa Missão
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Na Zapflow, nossa missão é transformar a experiência de atendimento ao cliente para empresas de todos os tamanhos. 
                  Acreditamos que um atendimento excepcional é a chave para o sucesso nos negócios modernos, e estamos comprometidos 
                  em fornecer as ferramentas mais avançadas e intuitivas para tornar isso possível.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Buscamos democratizar o acesso à tecnologia de ponta em atendimento omnichannel, permitindo que empresas de todos 
                  os segmentos ofereçam experiências personalizadas e eficientes aos seus clientes, impulsionando vendas e fortalecendo 
                  relacionamentos duradouros.
                </p>
              </section>

              {/* História */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossa História
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  A Zapflow nasceu da observação de uma lacuna crítica no mercado: a dificuldade das empresas em gerenciar múltiplos canais 
                  de comunicação de forma eficiente e personalizada. Fundada em 2020 por um grupo de especialistas em tecnologia e 
                  experiência do cliente, nossa empresa rapidamente se destacou pela abordagem inovadora e foco em resultados reais.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Desde então, temos crescido consistentemente, aprimorando nossa plataforma com recursos de inteligência artificial 
                  e automação que redefinem o que é possível no atendimento ao cliente. Hoje, atendemos empresas em todo o Brasil, 
                  de startups a grandes corporações, ajudando-as a elevar seus padrões de atendimento.
                </p>
              </section>

              {/* O que oferecemos */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  O Que Oferecemos
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  O Zapflow Atendimento é uma plataforma omnichannel completa que integra todos os canais de comunicação em uma única 
                  interface intuitiva. Nossa solução permite que você:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Centralize mensagens de WhatsApp, Instagram, Facebook, e-mail e chat em um único lugar</li>
                  <li>Automatize respostas e processos com nossa avançada inteligência artificial</li>
                  <li>Personalize o atendimento com base no histórico e comportamento do cliente</li>
                  <li>Acompanhe métricas e indicadores importantes em tempo real</li>
                  <li>Otimize a distribuição de atendimentos entre sua equipe</li>
                  <li>Garanta segurança e conformidade em todas as interações</li>
                </ul>
              </section>

              {/* Valores */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossos Valores
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inovação Constante</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Buscamos continuamente novas tecnologias e abordagens para melhorar nossa plataforma e oferecer soluções de ponta.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Orientação ao Cliente</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Colocamos as necessidades de nossos clientes no centro de tudo o que fazemos, garantindo que nossas soluções 
                      resolvam problemas reais.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excelência</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Comprometemo-nos com os mais altos padrões de qualidade em nossos produtos, serviços e suporte ao cliente.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparência</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Mantemos comunicação clara e honesta com nossos clientes, parceiros e colaboradores em todas as situações.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="bg-zapflow-primary/10 dark:bg-zapflow-primary/20 p-8 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Faça Parte da Revolução em Atendimento
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Junte-se a centenas de empresas que já transformaram seu atendimento ao cliente com o Zapflow Atendimento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/"
                    className="bg-[#25D366] hover:bg-[#25d36584] inline-flex items-center justify-center rounded-md bg-zapflow-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zapflow-primary/90 focus:outline-none focus:ring-2 focus:ring-zapflow-primary focus:ring-offset-2"
                  >
                    Agende uma Demonstração
                  </Link>
                  <a 
                    href="/precos" 
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-zapflow-primary focus:ring-offset-2"
                  >
                    Conhecer Planos
                  </a>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs; 
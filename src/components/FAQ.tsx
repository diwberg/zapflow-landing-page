"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-5">
      <button
        onClick={toggleOpen}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        <span className="ml-6 flex-shrink-0 text-gray-500 dark:text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-3 pr-12 text-base text-gray-600 dark:text-gray-300">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "O que é o Zapflow Atendimento?",
      answer: "O Zapflow Atendimento é uma plataforma omnichannel com IA que centraliza todos os seus canais de comunicação em um único lugar. Ele permite gerenciar conversas de WhatsApp, Instagram, Facebook, e-mail e outros canais de forma unificada, com recursos de automação e análise de dados."
    },
    {
      question: "Como funciona o teste gratuito de 7 dias?",
      answer: "Você pode experimentar o Zapflow por 7 dias sem compromisso. Durante este período, você terá acesso a todas as funcionalidades do plano escolhido. Se não estiver satisfeito, basta cancelar dentro dos 7 dias para receber um reembolso. O que te impede de começar a testar hoje?"
    },
    {
      question: "Quais canais são suportados pela plataforma?",
      answer: "O Zapflow suporta WhatsApp, Instagram, Facebook, YouTube, Mercado Livre, Telegram, OLX, LinkedIn, E-mail e Webchat, chat no site, e pode ser integrado com outros canais através de nossa API aberta."
    },
    {
      question: "As conversas são criptografadas?",
      answer: "Sim, utilizamos criptografia de ponta a ponta para garantir a segurança de todas as conversas. Também implementamos controles de acesso rigorosos e estamos em conformidade com a LGPD e outras regulamentações de privacidade."
    },
    {
      question: "Posso integrar o Zapflow com meu CRM ou ERP?",
      answer: "Sim, o Zapflow oferece integrações nativas com os principais sistemas de CRM e ERP do mercado, como Salesforce, HubSpot, SAP, entre outros. Também disponibilizamos uma API robusta para integrações personalizadas."
    },
    {
      question: "Como funciona o atendimento com IA?",
      answer: "Nossos agentes utilizam inteligência artificial avançada para entender as intenções dos clientes e fornecer respostas contextualizadas. Ele pode ser treinado com as informações da sua empresa e integrado ao seu conhecimento de negócios para oferecer um atendimento automatizado de alta qualidade."
    },
    {
      question: "É possível usar o Zapflow com meus números de WhatsApp existentes?",
      answer: "Sim, podemos migrar seus números de WhatsApp existentes para nossa plataforma. O processo é simples e nossa equipe de suporte te ajuda em toda a transição."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tudo o que você precisa saber sobre o Zapflow Atendimento
            </motion.p>
          </div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Não encontrou o que procurava?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-zapflow-primary hover:text-zapflow-secondary font-medium"
            >
              Fale com nossa equipe
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
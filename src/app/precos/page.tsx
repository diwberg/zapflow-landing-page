"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  Plus, 
  MessageCircle, 
  Instagram as InstagramIcon, 
  Facebook as FacebookIcon, 
  Youtube, 
  ShoppingCart, 
  Send, 
  ShoppingBag, 
  Linkedin, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import { useDemoModalStore } from '@/store/useDemoModalStore';
import { ANALYTICS_EVENTS } from '@/lib/analytics';
import useAnalytics from '@/hooks/useAnalytics';

const pricingPlans = [
  {
    name: 'Start',
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    borderColor: 'border-green-500',
    lightBg: 'bg-green-50 dark:bg-green-950/20',
    price: 'R$ 199',
    billing: '/mês',
    description: 'Para quem está estruturando o atendimento digital com qualidade e baixo custo.',
    features: [
      '1 canal incluso (WhatsApp)',
      'Caixa de entrada unificada',
      'Histórico completo por cliente',
      'Painel básico de atendimentos',
      'Até 3 usuários incluídos',
    ],
    extraInfo: [
      { icon: 'plus', text: 'Canais extras: R$60/canal/mês' }
    ],
    idealFor: 'Ideal para pequenas empresas ou operações em fase inicial.',
    cta: 'Começar agora',
    popular: false,
  },
  {
    name: 'Pro',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
    borderColor: 'border-blue-500',
    lightBg: 'bg-blue-50 dark:bg-blue-950/20',
    price: 'R$ 599',
    billing: '/mês',
    description: 'Para equipes que atuam em vários canais e precisam de automação e visibilidade.',
    features: [
      'Até 10 canais integrados (à escolha)',
      'Análise de sentimento com IA',
      'Até 10 usuários incluídos (sem custo adicional)',
      'Relatórios e métricas por canal, atendente e sentimento',
      'Automações personalizáveis e classificação automática',
      'Suporte técnico prioritário incluso',
    ],
    extraInfo: [
      { icon: 'plus', text: 'Canais extras: R$45/canal/mês' }
    ],
    idealFor: 'Ideal para empresas com operação multicanal já consolidada.',
    cta: 'Experimentar 7 dias grátis',
    popular: true,
  },
  {
    name: 'Enterprise',
    color: 'text-gray-900 dark:text-white',
    bgColor: 'bg-gray-900 dark:bg-white',
    borderColor: 'border-gray-900 dark:border-white',
    lightBg: 'bg-gray-100 dark:bg-gray-800',
    price: 'R$ --,-',
    billing: '/mês',
    description: 'Para grandes empresas com múltiplas equipes, canais e processos críticos.',
    features: [
      'Canais ilimitados (inclusive múltiplas contas por plataforma)',
      'Integração com ERP/CRM e sistemas internos',
      'Dashboards customizáveis por operação',
      'Agentes virtuais com memória e automações sob demanda',
      'Governança de mudança com RDM/GMUD',
      'Suporte dedicado com SLA técnico personalizado',
      'Usuários ilimitados conforme contrato',
    ],
    idealFor: 'Para operações complexas que exigem rastreabilidade, controle e escala.',
    cta: 'Falar com consultor',
    popular: false,
  },
];

const availableChannels = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500' },
  { name: 'Instagram', icon: InstagramIcon, color: 'text-pink-500' },
  { name: 'Facebook', icon: FacebookIcon, color: 'text-blue-600' },
  { name: 'YouTube', icon: Youtube, color: 'text-red-600' },
  { name: 'Mercado Livre', icon: ShoppingCart, color: 'text-yellow-500' },
  { name: 'Telegram', icon: Send, color: 'text-blue-500' },
  { name: 'OLX', icon: ShoppingBag, color: 'text-purple-500' },
  { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700' },
  { name: 'E-mail', icon: Mail, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'Webchat', icon: MessageSquare, color: 'text-teal-500' }
];

const PricingSection = () => {
  const { openModal } = useDemoModalStore();
  const { trackEvent } = useAnalytics();

  // Track pricing page view - only once when the page loads
  useEffect(() => {
    // Track pricing page viewed event
    trackEvent(ANALYTICS_EVENTS.PRICING_PAGE_VIEW);
  }, [trackEvent]);

  // Handle the purchase button click
  const handlePurchaseClick = (planName: string, planPrice: string) => {
    // Track the purchase intent with the plan name
    trackEvent({
      action: 'purchase_click',
      category: 'Conversion',
      label: `Purchase: ${planName}`,
      plan_name: planName,
      plan_price: planPrice,
      currency: 'BRL'
    });
    
    // If the plan is Enterprise, track that specific event
    if (planName === 'Enterprise') {
      trackEvent({
        action: 'enterprise_plan_click',
        category: 'Conversion',
        label: 'Enterprise Plan Selected'
      });
    }
    
    // Open the modal
    openModal(planName);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-4">
        <motion.div 
          className="container mx-auto max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Planos feitos para escalar seu atendimento
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Com o Zapflow, você começa pequeno, cresce com segurança e conta com uma plataforma que 
              acompanha a complexidade da sua operação — com suporte, inteligência e governança desde o primeiro dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-xl border ${
                  plan.popular 
                    ? `${plan.borderColor} shadow-lg` 
                    : 'border-gray-200 dark:border-gray-700'
                } bg-white dark:bg-gray-800 p-6 transition-all hover:shadow-md`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                    Mais popular
                  </span>
                )}
                
                <div className="mb-6">
                  <div className={`inline-flex items-center mb-3 ${plan.color}`}>
                    <div className={`w-3 h-3 rounded-full ${plan.bgColor} mr-2`}></div>
                    <h3 className="text-lg font-semibold">
                      Plano {plan.name}
                    </h3>
                  </div>
                  
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {plan.billing}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>
                
                <div className={`p-4 rounded-lg ${plan.lightBg} mb-5`}>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-zapflow-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                    
                    {plan.extraInfo && plan.extraInfo.map((info, i) => (
                      <li key={`extra-${i}`} className="flex items-start mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <Plus className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{info.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.idealFor && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-6">
                    💡 {plan.idealFor}
                  </p>
                )}
                
                <Button
                  className="w-full"
                  variant={plan.name === "Pro" ? "zapflowPrimary" : plan.name === "Enterprise" ? "default" : "outline"}
                  onClick={() => handlePurchaseClick(plan.name, plan.price)}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/30 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🌐 Canais disponíveis:
            </h2>
            <div className="flex flex-wrap gap-3">
              {availableChannels.map(channel => {
                const IconComponent = channel.icon;
                return (
                  <span 
                    key={channel.name}
                    className="inline-flex items-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm"
                  >
                    <IconComponent size={16} className={`mr-2 ${channel.color}`} />
                    <span className="text-gray-700 dark:text-gray-300">{channel.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
          
          <div className="bg-zapflow-primary/10 dark:bg-zapflow-primary/5 p-8 rounded-xl border border-zapflow-primary/20 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ✅ Garantia Zapflow
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-xl">
              Ao contratar qualquer plano, você será cobrado imediatamente — mas tem até 7 dias para testar a plataforma sem compromisso.
              <br />Se decidir cancelar dentro desse período, 100% do valor será estornado para o seu cartão, sem perguntas.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ⚙️ Dúvidas? Quer ajuda para definir o melhor plano?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Fale agora com um especialista Zapflow e receba uma recomendação personalizada.
            </p>
            <Button 
              variant="zapflowPrimary"
              size="lg"
              onClick={() => handlePurchaseClick("Consultoria", "Personalizado")}
            >
              Agendar demonstração
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default PricingSection; 
"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos no cliente
    setIsClient(true);
    
    // Verificar se o usuário já aceitou os cookies - apenas no cliente
    const cookieConsent = Cookies.get('cookie-consent');
    if (!cookieConsent) {
      // Mostrar banner após pequeno delay para melhor UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Salvar consentimento por 30 dias
    Cookies.set('cookie-consent', 'accepted', { expires: 30 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    // Salvar decisão por 7 dias para não ficar aparecendo sempre
    Cookies.set('cookie-consent', 'declined', { expires: 7 });
    setShowBanner(false);
  };

  // Se não estivermos no cliente, não renderiza nada até a hidratação
  if (!isClient) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-medium">Utilizamos cookies para melhorar sua experiência</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Este site utiliza cookies para personalizar conteúdo, analisar o tráfego e melhorar sua experiência.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={declineCookies}
                className="border-gray-300 dark:border-gray-600"
              >
                Recusar
              </Button>
              <Button 
                size="sm" 
                onClick={acceptCookies}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                Aceitar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner; 
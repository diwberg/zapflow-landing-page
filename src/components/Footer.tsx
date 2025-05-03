"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 inline-block">
              Zapflow
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4 max-w-sm">
              Centralize todos os seus canais de atendimento com inteligência artificial para automação, segurança e processos de alto nível.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/zapflowoficial" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/zapflowoficial/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/precos" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-gray-600 dark:text-gray-400 hover:text-zapflow-primary dark:hover:text-zapflow-primary">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            &copy; {currentYear} Zapflow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
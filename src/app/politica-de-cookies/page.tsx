"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-4">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Última atualização: 01 de Julho de 2023
            </p>

            <h2>1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem ou funcionem de maneira mais eficiente, além de fornecer informações aos proprietários do site.
            </p>

            <h2>2. Como utilizamos os cookies</h2>
            <p>
              O Zapflow utiliza cookies para diversas finalidades, incluindo:
            </p>
            <ul>
              <li>
                <strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site. Eles permitem navegar pelo site e utilizar seus recursos, como acessar áreas seguras. Sem esses cookies, não podemos fornecer os serviços solicitados.
              </li>
              <li>
                <strong>Cookies de desempenho:</strong> Coletam informações sobre como os visitantes usam o site, por exemplo, quais páginas os visitantes acessam com mais frequência e se recebem mensagens de erro. Esses cookies não coletam informações que identifiquem o visitante.
              </li>
              <li>
                <strong>Cookies de funcionalidade:</strong> Permitem que o site se lembre das escolhas que você faz (como seu nome de usuário, idioma ou região) e forneça recursos aprimorados e mais personalizados.
              </li>
              <li>
                <strong>Cookies de publicidade:</strong> Utilizados para entregar anúncios mais relevantes para você e seus interesses. Também são usados para limitar o número de vezes que você vê um anúncio e medir a eficácia das campanhas publicitárias.
              </li>
              <li>
                <strong>Cookies de análise:</strong> Nos ajudam a entender como os visitantes interagem com o site, coletando e relatando informações anonimamente.
              </li>
            </ul>

            <h2>3. Cookies de terceiros</h2>
            <p>
              Além dos cookies que definimos, também utilizamos serviços de terceiros que podem definir cookies em seu dispositivo quando você visita nosso site. Esses serviços incluem:
            </p>
            <ul>
              <li>Google Analytics (análise de uso do site)</li>
              <li>Google Tag Manager (gerenciamento de tags)</li>
              <li>Facebook Pixel (análise e direcionamento de anúncios)</li>
              <li>Microsoft Clarity (análise do comportamento do usuário)</li>
            </ul>
            <p>
              Esses serviços nos ajudam a analisar como os usuários utilizam nosso site, personalizar conteúdo e fornecer recursos de marketing relevantes.
            </p>

            <h2>4. Gerenciamento de cookies</h2>
            <p>
              A maioria dos navegadores permite que você controle os cookies através das configurações de preferências. Você pode:
            </p>
            <ul>
              <li>Aceitar ou recusar cookies através do banner de consentimento exibido quando você acessa nosso site pela primeira vez</li>
              <li>Configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado</li>
              <li>Excluir cookies já armazenados em seu dispositivo</li>
            </ul>
            <p>
              Observe que a restrição de cookies pode impactar sua experiência e impedir que você aproveite integralmente os recursos de nosso site.
            </p>

            <h2>5. Como desativar cookies</h2>
            <p>
              Você pode desativar cookies através das configurações do seu navegador:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Menu &gt; Configurações &gt; Avançado &gt; Privacidade e segurança &gt; Configurações de conteúdo &gt; Cookies
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Menu &gt; Opções &gt; Privacidade e Segurança &gt; seção Cookies e dados do site
              </li>
              <li>
                <strong>Safari:</strong> Preferências &gt; Privacidade
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Menu &gt; Configurações &gt; Privacidade e serviços
              </li>
            </ul>
            <p>
              Além disso, você pode visitar <a href="https://www.youronlinechoices.com" className="text-zapflow-primary hover:text-zapflow-secondary">www.youronlinechoices.com</a> para obter informações sobre como recusar cookies utilizados para publicidade.
            </p>

            <h2>6. Duração dos cookies</h2>
            <p>
              Os cookies utilizados em nosso site podem ser:
            </p>
            <ul>
              <li>
                <strong>Cookies de sessão:</strong> Temporários, que expiram quando você fecha o navegador
              </li>
              <li>
                <strong>Cookies persistentes:</strong> Permanecem em seu dispositivo até expirarem ou serem excluídos manualmente
              </li>
            </ul>
            <p>
              O período de retenção específico para cada cookie varia de acordo com sua finalidade e o serviço que o utiliza.
            </p>

            <h2>7. Atualizações na Política de Cookies</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente para refletir alterações em nossos serviços ou na legislação aplicável. Recomendamos que você revise esta política regularmente para se manter informado sobre como utilizamos cookies.
            </p>

            <h2>8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
            </p>
            <p>
              E-mail: privacidade@zapflow.com.br<br />
              Endereço: Av. Paulista, 1000, São Paulo, SP, Brasil
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy; 
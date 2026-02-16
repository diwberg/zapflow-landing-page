"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            Política de Privacidade
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Última atualização: 01 de Julho de 2023
            </p>

            <h2>1. Introdução</h2>
            <p>
              A Zapflow (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as informações pessoais dos usuários de nosso site e serviço Zapflow Atendimento (coletivamente, o &quot;Serviço&quot;).
            </p>

            <h2>2. Informações que coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações quando você utiliza nosso Serviço:
            </p>
            <ul>
              <li>
                <strong>Informações de conta:</strong> Nome, endereço de e-mail, número de telefone, nome da empresa, cargo, e informações de pagamento.
              </li>
              <li>
                <strong>Informações de uso:</strong> Como você interage com nosso Serviço, incluindo funcionalidades utilizadas, tempo de uso, e ações realizadas.
              </li>
              <li>
                <strong>Informações de dispositivo:</strong> Informações sobre seu computador ou dispositivo móvel, incluindo sistema operacional, tipo de navegador, e endereço IP.
              </li>
              <li>
                <strong>Informações de comunicação:</strong> Mensagens, e-mails e outras comunicações trocadas através do uso do Serviço.
              </li>
              <li>
                <strong>Cookies e tecnologias similares:</strong> Utilizamos cookies e tecnologias similares para coletar informações sobre como você usa nosso Serviço.
              </li>
            </ul>

            <h2>3. Como usamos suas informações</h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul>
              <li>Fornecer, manter e melhorar nosso Serviço;</li>
              <li>Processar transações e enviar notificações relacionadas;</li>
              <li>Responder a seus comentários, perguntas e solicitações;</li>
              <li>Enviar informações técnicas, atualizações, alertas de segurança e mensagens de suporte;</li>
              <li>Monitorar e analisar tendências, uso e atividades relacionadas ao nosso Serviço;</li>
              <li>Detectar, prevenir e solucionar problemas técnicos e de segurança;</li>
              <li>Personalizar e melhorar sua experiência com o Serviço;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>

            <h2>4. Compartilhamento de informações</h2>
            <p>
              Podemos compartilhar suas informações nas seguintes circunstâncias:
            </p>
            <ul>
              <li>
                <strong>Com provedores de serviços:</strong> Compartilhamos informações com terceiros que nos ajudam a operar, fornecer, melhorar, integrar, personalizar e comercializar nosso Serviço.
              </li>
              <li>
                <strong>Para conformidade legal:</strong> Podemos divulgar informações quando obrigados por lei ou quando acreditarmos, de boa fé, que tal ação é necessária para proteger nossos direitos, proteger sua segurança ou a segurança de outros, investigar fraudes ou responder a uma solicitação governamental.
              </li>
              <li>
                <strong>Em caso de fusão ou aquisição:</strong> Se a Zapflow estiver envolvida em uma fusão, aquisição ou venda de todos ou parte de seus ativos, você será notificado por e-mail e/ou um aviso em destaque em nosso site sobre qualquer mudança de propriedade ou uso de suas informações pessoais.
              </li>
            </ul>

            <h2>5. Segurança de dados</h2>
            <p>
              Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não podemos garantir sua segurança absoluta.
            </p>

            <h2>6. Seus direitos e escolhas</h2>
            <p>
              Você tem certos direitos relacionados às suas informações pessoais, incluindo:
            </p>
            <ul>
              <li>Acessar, corrigir ou excluir suas informações;</li>
              <li>Retirar seu consentimento a qualquer momento;</li>
              <li>Opor-se ao processamento de suas informações;</li>
              <li>Solicitar a portabilidade de seus dados;</li>
              <li>Optar por não receber comunicações de marketing.</li>
            </ul>
            <p>
              Para exercer estes direitos, entre em contato conosco através das informações de contato fornecidas abaixo.
            </p>

            <h2>7. Retenção de dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para fornecer nosso Serviço e cumprir nossas obrigações legais. Quando não tivermos mais um propósito legítimo para processar suas informações pessoais, as excluiremos ou anonimizaremos.
            </p>

            <h2>8. Transferências internacionais</h2>
            <p>
              Suas informações podem ser transferidas e processadas em países diferentes daquele em que você reside. Tomaremos medidas para garantir que suas informações pessoais recebam um nível adequado de proteção nessas jurisdições.
            </p>

            <h2>9. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Se fizermos alterações materiais, notificaremos você através de um aviso em nosso site ou por e-mail. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer alterações.
            </p>

            <h2>10. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco em:
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

export default PrivacyPolicy; 
"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
            Termos de Uso
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Última atualização: 01 de Julho de 2023
            </p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Bem-vindo ao Zapflow Atendimento. Estes Termos de Uso regem seu acesso e uso do site Zapflow.com.br e do serviço de atendimento omnichannel Zapflow Atendimento (coletivamente, o "Serviço"). Ao acessar ou usar o Serviço, você concorda em ficar vinculado a estes Termos de Uso.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
              O Zapflow Atendimento é uma plataforma de atendimento omnichannel que permite centralizar e gerenciar interações com clientes através de diversos canais de comunicação, incluindo WhatsApp, Facebook Messenger, Instagram, e-mail, e outros.
            </p>

            <h2>3. Contas de Usuário</h2>
            <p>
              Para usar o Serviço, você precisa criar uma conta. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem sob sua conta. Você concorda em:
            </p>
            <ul>
              <li>Fornecer informações precisas, atuais e completas durante o processo de registro;</li>
              <li>Manter e atualizar prontamente suas informações de conta;</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança;</li>
              <li>Ser responsável por todas as atividades que ocorrem em sua conta.</li>
            </ul>

            <h2>4. Uso do Serviço</h2>
            <p>
              Você concorda em não:
            </p>
            <ul>
              <li>Usar o Serviço para fins ilegais ou não autorizados;</li>
              <li>Violar quaisquer leis aplicáveis em sua jurisdição;</li>
              <li>Interferir ou interromper a integridade ou o desempenho do Serviço;</li>
              <li>Tentar obter acesso não autorizado ao Serviço, contas de outros usuários ou sistemas de computador;</li>
              <li>Coletar ou armazenar dados pessoais de outros usuários sem seu consentimento;</li>
              <li>Transmitir qualquer material que contenha vírus, cavalos de Troia, worms ou qualquer outro código malicioso;</li>
              <li>Enviar comunicações comerciais não solicitadas (spam).</li>
            </ul>

            <h2>5. Licença de Uso</h2>
            <p>
              Sujeito ao cumprimento destes Termos de Uso, concedemos a você uma licença limitada, não exclusiva, não transferível e revogável para usar o Serviço de acordo com as funcionalidades fornecidas e o plano contratado.
            </p>

            <h2>6. Propriedade Intelectual</h2>
            <p>
              O Serviço e seu conteúdo, recursos e funcionalidades são e permanecerão propriedade exclusiva da Zapflow e de seus licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e outras leis de propriedade intelectual. Nosso nome, logo e nomes de produtos relacionados são marcas comerciais da Zapflow.
            </p>

            <h2>7. Conteúdo do Usuário</h2>
            <p>
              Você mantém todos os direitos sobre o conteúdo que você envia, publica ou exibe através do Serviço. Ao fornecer conteúdo ao Serviço, você nos concede uma licença mundial, não exclusiva, isenta de royalties para usar, reproduzir, processar, adaptar, modificar, publicar, transmitir, exibir e distribuir tal conteúdo em qualquer meio ou método de distribuição.
            </p>

            <h2>8. Privacidade</h2>
            <p>
              Nossa Política de Privacidade descreve como coletamos, usamos e compartilhamos informações sobre você quando você usa nosso Serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com nossa Política de Privacidade.
            </p>

            <h2>9. Período de Teste e Garantia de Cancelamento</h2>
            <p>
              Oferecemos um período de teste gratuito de 7 (sete) dias para novos usuários, durante o qual você pode explorar todas as funcionalidades do plano selecionado sem custo. Além disso, mesmo após a contratação, garantimos um período de 7 (sete) dias para desistência sem custo, durante o qual você poderá cancelar a assinatura e obter reembolso integral.
            </p>
            <p>
              Para exercer esse direito, entre em contato com nosso suporte dentro do prazo estabelecido. Após este período, os cancelamentos estarão sujeitos à política regular de cancelamento descrita nestes Termos.
            </p>

            <h2>10. Pagamento e Faturamento</h2>
            <p>
              Os planos de assinatura são faturados em base mensal ou anual, dependendo da opção selecionada. O pagamento será cobrado automaticamente no início de cada período de faturamento. Você pode cancelar sua assinatura a qualquer momento, mas não haverá reembolsos para períodos parciais de serviço.
            </p>
            <p>
              Reservamo-nos o direito de alterar nossas taxas mediante notificação prévia. Se você não concordar com a alteração de preços, poderá cancelar sua assinatura antes que o novo preço entre em vigor.
            </p>

            <h2>11. Rescisão</h2>
            <p>
              Podemos encerrar ou suspender sua conta e acesso ao Serviço imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, violação destes Termos de Uso. Após a rescisão, seu direito de usar o Serviço cessará imediatamente.
            </p>

            <h2>12. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a Zapflow, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de seu acesso ou uso (ou incapacidade de acessar ou usar) o Serviço.
            </p>

            <h2>13. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar ou substituir estes Termos de Uso a qualquer momento. Se uma revisão for material, procuraremos fornecer aviso com pelo menos 30 dias de antecedência antes que os novos termos entrem em vigor. O uso continuado do Serviço após essas alterações constitui sua aceitação dos novos termos.
            </p>

            <h2>14. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.
            </p>

            <h2>15. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco em:
            </p>
            <p>
              E-mail: suporte@zapflow.com.br<br />
              Endereço: Av. Paulista, 1000, São Paulo, SP, Brasil
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService; 
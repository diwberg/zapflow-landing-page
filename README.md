# Zapflow Atendimento Landing Page

Landing page altamente conversiva para o Zapflow Atendimento, um sistema omnichannel com inteligência artificial e foco em empresas enterprise.

## 📋 Descrição do Projeto

Esta landing page foi construída com Next.js (App Router), Tailwind CSS e componentes do shadcn/ui. O design é inspirado na estética limpa e minimalista da Apple, com foco em tipografia, espaçamento e hierarquia visual clara.

## 🎯 Funcionalidades Implementadas

- Header fixo com navegação responsiva
- Hero section com chamada para ação destacada
- Seção de benefícios com cards visuais
- Seção "Para quem é" com perfis de empresas ideais
- Lista de funcionalidades avançadas com ícones
- Seção de depoimentos em estilo elegante
- CTA final com destaque visual
- Footer completo com links e informações
- Integrações com ferramentas de marketing (Google Analytics, GTM, Meta Pixel, Clarity)
- Design responsivo mobile-first
- Otimizado para conversão e SEO

## 🚀 Funcionalidades Previstas

- Formulário de contato com validação via Zod
- Integração com CRM para gerenciamento de leads
- Blog para geração de conteúdo e SEO
- Área de recursos/materiais para download
- Página de cases de sucesso detalhados
- Suporte para múltiplos idiomas
- Melhorias de desempenho e otimizações

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) para componentes de UI
- [Zod](https://zod.dev/) para validação de formulários

## 🚀 Como Iniciar o Projeto

### Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

### Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/zapflow-landing.git
cd zapflow-landing
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione:
```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
META_API_ACCESS_TOKEN=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_WEBHOOK_FORM=
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Para build de produção:
```bash
npm run build
# ou
yarn build
```

## 🔑 Variáveis de Ambiente

As seguintes variáveis de ambiente são necessárias para as integrações de marketing:

- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics (GA4)
- `NEXT_PUBLIC_GTM_ID`: ID do Google Tag Manager
- `NEXT_PUBLIC_META_PIXEL_ID`: ID do Meta Pixel (Facebook/Instagram)
- `META_API_ACCESS_TOKEN`: Token de acesso para Meta Conversion API
- `NEXT_PUBLIC_CLARITY_ID`: ID do Microsoft Clarity
- `NEXT_PUBLIC_WEBHOOK_FORM`: URL do webhook para envio dos dados do formulário

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Para mais informações ou dúvidas sobre o projeto, entre em contato.

---

Desenvolvido com ❤️ para Zapflow

import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | Zapflow Atendimento | Dicas e Insights sobre Atendimento Omnichannel",
  description: "Confira nosso blog com dicas, estratégias e insights sobre atendimento omnichannel, centralização de canais e automação com IA para empresas enterprise.",
  keywords: "blog atendimento omnichannel, dicas centralização canais, estratégias atendimento empresarial, automação atendimento, inteligência artificial whatsapp instagram",
  openGraph: {
    title: "Blog | Zapflow Atendimento | Dicas e Insights sobre Atendimento Omnichannel",
    description: "Confira nosso blog com dicas, estratégias e insights sobre atendimento omnichannel, centralização de canais e automação com IA para empresas enterprise.",
    type: "website",
    url: "https://zapflow.com.br/blog",
  }
};

// Lista de posts do blog (simulada - futuramente pode ser carregada via CMS ou API)
const blogPosts = [
  {
    slug: "como-resolver-atendimento-desorganizado-multicanal",
    title: "Como Resolver o Atendimento Desorganizado Multicanal em 5 Passos",
    description: "Descubra como solucionar o caos no atendimento digital e centralizar canais como WhatsApp e Instagram. Guia completo para empresas enterprise.",
    image: "/images/blog/atendimento-desorganizado.jpg",
    date: "2023-07-15",
    category: "Estratégia",
    readTime: "8 min"
  },
  {
    slug: "centralizacao-canais-atendimento-digital-beneficios",
    title: "Centralização de Canais de Atendimento: 7 Benefícios para Empresas",
    description: "Entenda como a centralização de canais como WhatsApp, Instagram e email em uma única plataforma omnichannel transforma o atendimento empresarial.",
    image: "/images/blog/centralizacao-canais.jpg",
    date: "2023-07-22",
    category: "Tecnologia",
    readTime: "7 min"
  },
  {
    slug: "visibilidade-performance-equipe-atendimento-metricas",
    title: "Visibilidade de Performance no Atendimento: Métricas Essenciais",
    description: "Conheça as métricas essenciais para medir a performance de equipes de atendimento multicanal e como implementar dashboards eficientes com o Zapflow.",
    image: "/images/blog/visibilidade-performance.jpg",
    date: "2023-07-29", 
    category: "Métricas",
    readTime: "6 min"
  }
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <Breadcrumbs />
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Blog Zapflow
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Insights, dicas e estratégias para transformar seu atendimento multicanal
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.slug} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="sr-only">{post.title}</span>
                  <svg 
                    className="w-16 h-16 text-gray-400 dark:text-gray-500" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <rect width="18" height="14" x="3" y="5" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
                  <span className="text-zapflow-primary font-medium">Ler mais</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
} 
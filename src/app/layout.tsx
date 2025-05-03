import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/marketing/GoogleAnalytics";
import GTM, { GTMNoScript } from "@/components/marketing/GTM";
import FacebookPixel, { FacebookPixelNoScript } from "@/components/marketing/FacebookPixel";
import Clarity from "@/components/marketing/Clarity";
import CookieBanner from "@/components/CookieBanner";
import DemoModalProvider from "@/providers/DemoModalProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zapflow Atendimento | Sistema Omnichannel com IA para Empresas",
  description: "Centralize WhatsApp, Instagram e mais 8 canais com o Zapflow, plataforma omnichannel com IA para empresas. Reduza tempo de resposta e elimine retrabalho. Solicite demonstração.",
  keywords: "sistema de atendimento omnichannel, atendimento multicanal com IA, automação de atendimento empresarial, centralização de canais de atendimento, análise de sentimento por IA, plataforma de atendimento WhatsApp e Instagram, software para atendimento em vários canais",
  openGraph: {
    title: "Zapflow Atendimento | Sistema Omnichannel com IA para Empresas",
    description: "Centralize WhatsApp, Instagram e mais 8 canais com o Zapflow, plataforma omnichannel com IA para empresas. Reduza tempo de resposta e elimine retrabalho.",
    url: "https://zapflow.com.br",
    siteName: "Zapflow Atendimento",
    images: [
      {
        url: "https://zapflow.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zapflow - Plataforma omnichannel com IA para empresas"
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapflow Atendimento | Sistema Omnichannel com IA para Empresas",
    description: "Centralize WhatsApp, Instagram e mais 8 canais com o Zapflow, plataforma omnichannel com IA para empresas.",
    images: ["https://zapflow.com.br/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://zapflow.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <GTM />
        <FacebookPixel />
        <Clarity />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zapflow Atendimento",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "199.00",
                "priceCurrency": "BRL"
              },
              "description": "Sistema de atendimento omnichannel com inteligência artificial que centraliza WhatsApp, Instagram e mais 8 canais para empresas enterprise.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "156"
              },
              "featureList": "Centralização de canais, Inteligência artificial, Análise de sentimento, Automatização de atendimento, Dashboards personalizáveis",
              "publisher": {
                "@type": "Organization",
                "name": "Zapflow",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://zapflow.com.br/logo.png"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} transition-colors duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <GTMNoScript />
        <FacebookPixelNoScript />
        <DemoModalProvider>
          {children}
          <CookieBanner />
        </DemoModalProvider>
      </body>
    </html>
  );
}

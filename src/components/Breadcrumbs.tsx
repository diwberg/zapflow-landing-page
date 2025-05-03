"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import Script from "next/script";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent: boolean;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const breadcrumbs = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    
    const items: BreadcrumbItem[] = [
      { label: 'Home', href: '/', isCurrent: pathname === '/' }
    ];
    
    // Build up breadcrumb items based on URL segments
    if (segments.length > 0) {
      let path = '';
      segments.forEach((segment, i) => {
        path += `/${segment}`;
        const isLast = i === segments.length - 1;
        
        // Format label (replace hyphens with spaces and capitalize)
        let label = segment.replace(/-/g, ' ');
        
        // Special case for common paths
        if (segment === 'blog' && !isLast) {
          label = 'Blog';
        } else if (segment === 'blog' && isLast) {
          label = 'Blog';
        } else if (segment === 'beneficios') {
          label = 'Benefícios';
        } else if (segment === 'para-quem-e') {
          label = 'Para Quem É';
        } else if (segment === 'funcionalidades') {
          label = 'Funcionalidades';
        } else if (segment === 'precos') {
          label = 'Preços';
        } else if (segment === 'perguntas-frequentes') {
          label = 'Perguntas Frequentes';
        } else if (path === '/blog/como-resolver-atendimento-desorganizado-multicanal') {
          label = 'Como Resolver o Atendimento Desorganizado Multicanal';
        }
        
        // Capitalize first letter of each word
        if (!['Para Quem É', 'Preços', 'Benefícios', 'Funcionalidades', 'Perguntas Frequentes', 'Blog'].includes(label)) {
          label = label.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        
        items.push({
          label,
          href: path,
          isCurrent: isLast
        });
      });
    }
    
    return items;
  }, [pathname]);
  
  // Generate JSON-LD schema
  const breadcrumbsSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://zapflow.com.br${item.href}`
      }))
    };
  }, [breadcrumbs]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      <Script
        id="breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <nav aria-label="Breadcrumbs" className="py-3 px-4 text-sm">
        <ol className="flex flex-wrap items-center gap-1">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-gray-400" aria-hidden="true" />}
              
              {item.isCurrent ? (
                <span aria-current="page" className="text-gray-600 dark:text-gray-300 font-medium">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-zapflow-primary hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
} 
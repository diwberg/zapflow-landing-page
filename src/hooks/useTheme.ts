"use client";

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isClient, setIsClient] = useState(false);
  
  // Efeito para marcar quando estamos no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    // Só executa no cliente, após o primeiro render
    if (isClient) {
      // Verificar tema salvo no localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      
      // Verificar preferência do usuário
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Definir tema inicial
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
      
      // Aplicar classe no html
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isClient]);
  
  const toggleTheme = () => {
    setTheme((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      
      if (isClient) {
        // Salvar no localStorage
        localStorage.setItem('theme', newTheme);
        
        // Atualizar classe no html
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      
      return newTheme;
    });
  };
  
  return { theme, toggleTheme, isClient };
} 
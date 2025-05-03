/**
 * Funções para gerenciar chamadas de API externas
 */

import { z } from 'zod';

// Schema para validação do formulário
export const demoFormSchema = z.object({
  nome: z.string().min(3, { message: "Nome precisa ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(10, { message: "Telefone inválido" }),
  empresa: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
  segmento: z.string().min(1, { message: "Selecione um segmento" }),
  funcionarios: z.string().min(1, { message: "Selecione uma opção" }),
  mensagem: z.string().optional(),
  plano: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;

/**
 * Envia dados do formulário para o webhook configurado
 * @param formData Dados do formulário validados pelo Zod
 * @returns Resposta da requisição
 */
export async function submitFormToWebhook(formData: DemoFormData) {
  try {
    // Verifica se a variável de ambiente está configurada
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_FORM;
    
    if (!webhookUrl) {
      console.error("URL do webhook não configurada em .env (NEXT_PUBLIC_WEBHOOK_FORM)");
      throw new Error("URL do webhook não configurada");
    }

    // Adiciona timestamp à submissão
    const dataToSubmit = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Envia dados para o webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar dados: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    throw error;
  }
} 
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Check, X } from 'lucide-react';
import { z } from 'zod';
import { useDemoModalStore } from '@/store/useDemoModalStore';
import { submitFormToWebhook, demoFormSchema, DemoFormData } from '@/lib/api';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const { selectedPlan } = useDemoModalStore();
  const [formData, setFormData] = useState<Partial<DemoFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Atualiza o plano selecionado quando o modal é aberto
  useEffect(() => {
    if (isOpen && selectedPlan) {
      setFormData(prev => ({ ...prev, plano: selectedPlan }));
    }
  }, [isOpen, selectedPlan]);

  // Reset do formulário quando o modal fecha
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setErrors({});
        setIsSuccess(false);
        setSubmitError(null);
      }, 300);
    }
  }, [isOpen]);

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (currentStep === 1) {
      const fields = ['nome', 'email', 'telefone', 'empresa'] as const;
      fields.forEach(field => {
        try {
          demoFormSchema.shape[field].parse(formData[field]);
        } catch (error) {
          if (error instanceof z.ZodError) {
            newErrors[field] = error.errors[0].message;
            isValid = false;
          }
        }
      });
    } else if (currentStep === 2) {
      const fields = ['segmento', 'funcionarios'] as const;
      fields.forEach(field => {
        try {
          demoFormSchema.shape[field].parse(formData[field]);
        } catch (error) {
          if (error instanceof z.ZodError) {
            newErrors[field] = error.errors[0].message;
            isValid = false;
          }
        }
      });
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(1)) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
    setSubmitError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Remove o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Remove o erro quando o usuário seleciona uma opção
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2)) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Valida todo o formulário antes de enviar
      const validatedForm = demoFormSchema.parse(formData);
      
      // Envia dados do formulário para o webhook configurado no .env
      await submitFormToWebhook(validatedForm);
      
      setIsSuccess(true);
      
      // Após 5 segundos, fecha o modal e reseta o estado
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setStep(1);
        setFormData({ plano: selectedPlan });
      }, 5000);
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      if (error instanceof z.ZodError) {
        // Caso seja erro de validação do Zod
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        // Se for erro do servidor ou de comunicação
        setSubmitError("Falha ao enviar o formulário. Por favor, tente novamente mais tarde.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isSuccess ? "Solicitação Enviada!" : "Solicitar Demonstração"}
                  {selectedPlan && !isSuccess && (
                    <span className="ml-2 text-base font-normal text-zapflow-primary">
                      | Plano {selectedPlan}
                    </span>
                  )}
                </h2>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    Agradecemos seu interesse!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Nossa equipe entrará em contato em até 24 horas úteis para agendar sua demonstração personalizada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-md text-red-800 text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  {step === 1 ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="nome">Nome completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome || ""}
                          onChange={handleChange}
                          className={errors.nome ? "border-red-500" : ""}
                          placeholder="Seu nome completo"
                        />
                        {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="email">E-mail corporativo *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email || ""}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                          placeholder="seu@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone || ""}
                          onChange={handleChange}
                          className={errors.telefone ? "border-red-500" : ""}
                          placeholder="(00) 00000-0000"
                        />
                        {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="empresa">Empresa *</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa || ""}
                          onChange={handleChange}
                          className={errors.empresa ? "border-red-500" : ""}
                          placeholder="Nome da sua empresa"
                        />
                        {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
                      </div>
                      
                      <Button
                        type="button"
                        onClick={handleNext}
                        variant="zapflowPrimary"
                        className="w-full"
                      >
                        Próximo
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <Label className="mb-2 block">Segmento da empresa *</Label>
                        <RadioGroup 
                          value={formData.segmento || ""} 
                          onValueChange={(value) => handleRadioChange('segmento', value)}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="e-commerce" id="e-commerce" />
                            <Label htmlFor="e-commerce">E-commerce</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="saude" id="saude" />
                            <Label htmlFor="saude">Saúde</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="educacao" id="educacao" />
                            <Label htmlFor="educacao">Educação</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="tecnologia" id="tecnologia" />
                            <Label htmlFor="tecnologia">Tecnologia</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="outro" id="outro" />
                            <Label htmlFor="outro">Outro</Label>
                          </div>
                        </RadioGroup>
                        {errors.segmento && <p className="text-red-500 text-sm mt-1">{errors.segmento}</p>}
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">Número de funcionários *</Label>
                        <RadioGroup 
                          value={formData.funcionarios || ""} 
                          onValueChange={(value) => handleRadioChange('funcionarios', value)}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="1-10" id="1-10" />
                            <Label htmlFor="1-10">1-10</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="11-50" id="11-50" />
                            <Label htmlFor="11-50">11-50</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="51-200" id="51-200" />
                            <Label htmlFor="51-200">51-200</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="201+" id="201+" />
                            <Label htmlFor="201+">201+</Label>
                          </div>
                        </RadioGroup>
                        {errors.funcionarios && <p className="text-red-500 text-sm mt-1">{errors.funcionarios}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="mensagem">Como podemos ajudar sua empresa?</Label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          value={formData.mensagem || ""}
                          onChange={handleChange}
                          placeholder="Descreva suas necessidades, desafios ou perguntas"
                          rows={3}
                        />
                      </div>
                      
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={handleBack}
                          variant="outline"
                          className="flex-1"
                        >
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          variant="zapflowPrimary"
                          className="flex-1"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "Solicitar"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal; 
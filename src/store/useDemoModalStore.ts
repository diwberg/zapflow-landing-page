import { create } from 'zustand';

interface DemoModalState {
  isOpen: boolean;
  selectedPlan: string;
  openModal: (plan?: string) => void;
  closeModal: () => void;
}

export const useDemoModalStore = create<DemoModalState>((set) => ({
  isOpen: false,
  selectedPlan: '',
  openModal: (plan = '') => set({ isOpen: true, selectedPlan: plan }),
  closeModal: () => set({ isOpen: false }),
})); 
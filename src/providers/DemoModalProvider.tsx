"use client";

import { ReactNode } from 'react';
import DemoModal from '@/components/DemoModal';
import { useDemoModalStore } from '@/store/useDemoModalStore';

interface DemoModalProviderProps {
  children: ReactNode;
}

const DemoModalProvider = ({ children }: DemoModalProviderProps) => {
  const { isOpen, closeModal } = useDemoModalStore();

  return (
    <>
      {children}
      <DemoModal 
        isOpen={isOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default DemoModalProvider; 
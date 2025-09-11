'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface IUserData {
  id: string;
  name: string;
  cpf: string;
  email: string;
  positionIds: string[];
}

interface IPaymentData {
  method: 'pix' | 'credit_card' | 'debit_card';
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvv?: string;
  pixKey?: string;
}

interface IInscriptionModalContextData {
  userData: IUserData | null;
  paymentData: IPaymentData | null;
  setUserData: (user: IUserData | null) => void;
  setPaymentData: (payment: IPaymentData | null) => void;
  resetData: () => void;
}

const InscriptionModalContext = createContext<IInscriptionModalContextData | undefined>(undefined);

interface IInscriptionModalProviderProps {
  children: ReactNode;
}

export function InscriptionModalProvider({ children }: Readonly<IInscriptionModalProviderProps>) {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [paymentData, setPaymentData] = useState<IPaymentData | null>(null);

  const resetData = () => {
    setUserData(null);
    setPaymentData(null);
  };

  const contextValue = useMemo(
    () => ({
      userData,
      paymentData,
      setUserData,
      setPaymentData,
      resetData,
    }),
    [userData, paymentData]
  );

  return (
    <InscriptionModalContext.Provider value={contextValue}>
      {children}
    </InscriptionModalContext.Provider>
  );
}

export function useInscriptionModal() {
  const context = useContext(InscriptionModalContext);
  if (context === undefined) {
    throw new Error('useInscriptionModal must be used within an InscriptionModalProvider');
  }
  return context;
}

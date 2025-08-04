import { useCallback } from 'react';

export const useFooterModel = () => {
  const currentYear = new Date().getFullYear();
  const organizationName = 'Assembléia de Deus CDMAD-MOR';

  const contactInfo = {
    phone: '(11) 99999-9999',
    email: 'contato@cdmadmor.org.br',
  };

  const handlePhoneClick = useCallback(() => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  }, [contactInfo.phone]);

  const handleEmailClick = useCallback(() => {
    window.open(`mailto:${contactInfo.email}`, '_self');
  }, [contactInfo.email]);

  return {
    currentYear,
    organizationName,
    contactInfo,
    handlePhoneClick,
    handleEmailClick,
  };
};

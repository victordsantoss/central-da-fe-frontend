import { useCallback } from 'react';

export const useFooterModel = () => {
  const currentYear = new Date().getFullYear();
  const organizationName = 'Assembléia de Deus CDMAD-MOR';

  const contactInfo = {
    phone: '(11) 99999-9999',
    email: 'sec.centraldafe@gmail.com',
  };

  const handlePhoneClick = useCallback(() => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  }, [contactInfo.phone]);

  const handleEmailClick = useCallback(() => {
    window.open(`mailto:${contactInfo.email}`, '_self');
  }, [contactInfo.email]);

  const handleSocialClick = useCallback((platform: 'facebook' | 'instagram' | 'whatsapp') => {
    if (platform === 'facebook') {
      window.open('https://www.facebook.com/centraldafe', '_self');
    } else if (platform === 'instagram') {
      window.open('https://www.instagram.com/centraldafe', '_self');
    } else if (platform === 'whatsapp') {
      window.open('https://wa.me/5511999999999', '_self');
    }
  }, []);

  return {
    currentYear,
    organizationName,
    contactInfo,
    handlePhoneClick,
    handleEmailClick,
    handleSocialClick,
  };
};

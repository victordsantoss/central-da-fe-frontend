import { Option } from '@/components/filter/filter.types';
import { useState } from 'react';

export const useSupplierDashboardModel = () => {
  const [showCreateSupplierModal, setShowCreateSupplierModal] = useState<boolean>(false);

  const onRegisterClick = () => setShowCreateSupplierModal(true);
  const closeCreateSupplierModal = () => setShowCreateSupplierModal(false);

  const orderOptions: Option[] = [
    { value: 'name', label: 'Nome' },
    { value: 'email', label: 'Email' },
  ];

  return {
    showCreateSupplierModal,
    onRegisterClick,
    closeCreateSupplierModal,
    orderOptions,
  };
};

import { Option } from '@/components/filter/filter.types';
import { useState } from 'react';

export const useProductDashboardModel = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const [showCreateProductModal, setShowCreateProductModal] = useState<boolean>(false);

  const orderOptions: Option[] = [
    { value: 'price', label: 'Preço' },
    { value: 'quantity', label: 'Quantidade' },
    { value: 'name', label: 'Nome' },
  ];

  const onRegisterClick = () => setShowCreateProductModal(true);
  const closeCreateProductModal = () => setShowCreateProductModal(false);

  return {
    orderOptions,
    onRegisterClick,
    showAlert,
    setShowAlert,
    showCreateProductModal,
    setShowCreateProductModal,
    closeCreateProductModal,
  };
};

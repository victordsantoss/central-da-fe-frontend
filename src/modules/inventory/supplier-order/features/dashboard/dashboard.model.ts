import { IConfirmationModalProps } from '@/components/confirmation-modal/confirmation-modal.types';
import { Option } from '@/components/filter/filter.types';
import {
  SupplierOrderDeliveryStatus,
  SupplierOrderPaymentStatus,
} from '@/common/enums/order-status.enum';
import { useState } from 'react';
import { SupplierOrderService } from '../../services/supplier-order.types';
import { useMutation } from '@tanstack/react-query';
import { revalidateSupplierOrderDashboard } from '../../actions/revalidate-dashboard.action';
import { useAlert } from '@/contexts/alert.context';
import { isAxiosError } from 'axios';

export const useSupplierOrderDashboardModel = () => {
  const { showAlert } = useAlert();
  const [showCreateSupplierOrderModal, setShowCreateSupplierOrderModal] = useState<boolean>(false);
  const [confirmationModal, setConfirmationModal] = useState<IConfirmationModalProps>({
    open: false,
    onClose: () => {},
    title: '',
    message: '',
    onConfirm: () => {},
  });
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');

  const onRegisterClick = () => setShowCreateSupplierOrderModal(true);
  const closeCreateSupplierOrderModal = () => setShowCreateSupplierOrderModal(false);

  const resetConfirmationModal = () => {
    setConfirmationModal({
      open: false,
      onClose: resetConfirmationModal,
      title: '',
      message: '',
      onConfirm: () => {},
    });
  };

  const handleReceiveOrder = (id: string) => {
    setSelectedOrderId(id);
    setConfirmationModal({
      open: true,
      onClose: resetConfirmationModal,
      title: 'Confirmar Recebimento',
      message:
        'Tem certeza que deseja confirmar o recebimento deste pedido? Esta ação não pode ser desfeita. O pedido será recebido e o estoque será atualizado.',
      onConfirm: handleConfirmReceive,
    });
  };

  const { mutate: updateOrder } = useMutation({
    mutationFn: SupplierOrderService.update,
    onSuccess: () => {
      revalidateSupplierOrderDashboard();
      showAlert('Pedido recebido com sucesso!', 'success');
    },
    onError: error => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      } else {
        showAlert('Erro desconhecido', 'error');
      }
    },
  });

  const handleConfirmReceive = () => {
    updateOrder({
      id: selectedOrderId,
      paymentStatus: SupplierOrderPaymentStatus.PAID,
      deliveryStatus: SupplierOrderDeliveryStatus.DELIVERED,
    });
    resetConfirmationModal();
    setSelectedOrderId('');
  };

  const handleCancelOrder = (id: string) => {
    setSelectedOrderId(id);
    setConfirmationModal({
      open: true,
      onClose: resetConfirmationModal,
      title: 'Cancelar Pedido',
      message:
        'Tem certeza que deseja cancelar este pedido? Esta ação não pode ser desfeita. O pedido será cancelado e o estoque não será atualizado.',
      onConfirm: handleConfirmCancel,
    });
  };

  const handleConfirmCancel = () => {
    resetConfirmationModal();
    setSelectedOrderId('');
  };

  const orderOptions: Option[] = [
    { value: 'supplierName', label: 'Fornecedor' },
    { value: 'orderDate', label: 'Data do Pedido' },
    { value: 'paymentStatus', label: 'Status de Pagamento' },
    { value: 'deliveryStatus', label: 'Status de Entrega' },
    { value: 'totalAmount', label: 'Valor Total' },
  ];

  return {
    showCreateSupplierOrderModal,
    setShowCreateSupplierOrderModal,
    onRegisterClick,
    closeCreateSupplierOrderModal,
    confirmationModal,
    handleReceiveOrder,
    handleCancelOrder,
    orderOptions,
  };
};

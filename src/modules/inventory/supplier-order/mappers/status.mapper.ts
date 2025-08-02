import {
  SupplierOrderPaymentStatus,
  SupplierOrderDeliveryStatus,
} from '@/common/enums/order-status.enum';

export const mapPaymentStatusToPtBr = (status: string): string => {
  const statusMap: Record<string, string> = {
    [SupplierOrderPaymentStatus.PENDING]: 'Pendente',
    [SupplierOrderPaymentStatus.PAID]: 'Pago',
    [SupplierOrderPaymentStatus.PARTIALLY_PAID]: 'Parcialmente Pago',
    [SupplierOrderPaymentStatus.REFUNDED]: 'Reembolsado',
    [SupplierOrderPaymentStatus.FAILED]: 'Falhou',
  };
  return statusMap[status];
};

export const mapDeliveryStatusToPtBr = (status: string): string => {
  const statusMap: Record<string, string> = {
    [SupplierOrderDeliveryStatus.PENDING]: 'Pendente',
    [SupplierOrderDeliveryStatus.PENDING_SHIPMENT]: 'Aguardando Envio',
    [SupplierOrderDeliveryStatus.SHIPPED]: 'Enviado',
    [SupplierOrderDeliveryStatus.IN_TRANSIT]: 'Em Trânsito',
    [SupplierOrderDeliveryStatus.DELIVERED]: 'Entregue',
    [SupplierOrderDeliveryStatus.PARTIALLY_DELIVERED]: 'Entregue Parcialmente',
    [SupplierOrderDeliveryStatus.DELIVERY_FAILED]: 'Falha na Entrega',
    [SupplierOrderDeliveryStatus.RETURNED]: 'Devolvido',
  };
  return statusMap[status];
};

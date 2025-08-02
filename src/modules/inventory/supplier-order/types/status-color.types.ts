import {
  SupplierOrderDeliveryStatus,
  SupplierOrderPaymentStatus,
} from '@/common/enums/order-status.enum';

export const PAYMENT_STATUS_COLORS: Record<SupplierOrderPaymentStatus, string> = {
  [SupplierOrderPaymentStatus.PENDING]: 'warning',
  [SupplierOrderPaymentStatus.PAID]: 'success',
  [SupplierOrderPaymentStatus.PARTIALLY_PAID]: 'info',
  [SupplierOrderPaymentStatus.REFUNDED]: 'secondary',
  [SupplierOrderPaymentStatus.FAILED]: 'error',
};

export const DELIVERY_STATUS_COLORS: Record<SupplierOrderDeliveryStatus, string> = {
  [SupplierOrderDeliveryStatus.PENDING]: 'warning',
  [SupplierOrderDeliveryStatus.PENDING_SHIPMENT]: 'warning',
  [SupplierOrderDeliveryStatus.SHIPPED]: 'primary',
  [SupplierOrderDeliveryStatus.IN_TRANSIT]: 'primary',
  [SupplierOrderDeliveryStatus.DELIVERED]: 'success',
  [SupplierOrderDeliveryStatus.PARTIALLY_DELIVERED]: 'info',
  [SupplierOrderDeliveryStatus.DELIVERY_FAILED]: 'error',
  [SupplierOrderDeliveryStatus.RETURNED]: 'error',
};

export const STATUS_COLORS = {
  PAYMENT: PAYMENT_STATUS_COLORS,
  DELIVERY: DELIVERY_STATUS_COLORS,
};

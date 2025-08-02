import {
  SupplierOrderDeliveryStatus,
  SupplierOrderPaymentStatus,
} from '@/common/enums/order-status.enum';

export namespace SupplierOrder {
  export type IUpdateOrderRequest = {
    id: string;
    paymentStatus: SupplierOrderPaymentStatus;
    deliveryStatus: SupplierOrderDeliveryStatus;
  };
}

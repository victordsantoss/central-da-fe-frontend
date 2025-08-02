import {
  SupplierOrderPaymentStatus,
  SupplierOrderDeliveryStatus,
} from '../enums/order-status.enum';
import { SupplierOrderProductModel } from './supplier-order-product.model';

export type SupplierOrderModel = {
  id: string;
  description?: string;
  paymentStatus: SupplierOrderPaymentStatus;
  deliveryStatus: SupplierOrderDeliveryStatus;
  orderDate: Date;
  sequencialCode: number;
  expectedDeliveryDate?: Date;
  totalAmount?: number;
  supplierId: string;
  supplierName: string;
  products: SupplierOrderProductModel[];
  createdAt: Date;
  updatedAt: Date;
};

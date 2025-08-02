import { SupplierOrderModel } from '@/common/models/supplier-order.model';

export namespace SupplierOrder {
  export type IRegisterRequest = {
    supplierId: string;
    description: string;
    expectedDeliveryDate: string;
    products: {
      productId: string;
      quantity: number;
      unitPrice: number;
    }[];
  };
  export type IRegisterResponse = SupplierOrderModel;
}

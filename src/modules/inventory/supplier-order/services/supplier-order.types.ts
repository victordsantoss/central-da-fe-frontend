import { api } from '@/configs/api';
import { SupplierOrder } from './index';

export const SupplierOrderService = {
  update: async (payload: SupplierOrder.IUpdateOrderRequest): Promise<void> => {
    await api.put(`/supplier-order/status/${payload.id}`, payload);
  },
};

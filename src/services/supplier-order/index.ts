import { api } from '@/configs/api';
import { SupplierOrder } from './supplier-order.types';

export const SupplierOrderService = {
  register: async (
    payload: SupplierOrder.IRegisterRequest
  ): Promise<SupplierOrder.IRegisterResponse> => {
    const { data } = await api.post('/supplier-order', payload);
    return data;
  },
};

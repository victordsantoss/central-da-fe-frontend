import { api } from '@/configs/api';
import { Supplier } from './supplier.types';

export const SupplierService = {
  register: async (payload: Supplier.IRegisterRequest): Promise<Supplier.IRegisterResponse> => {
    const { data } = await api.post('/supplier', payload);
    return data;
  },
  list: async (
    payload: Supplier.IListSuppliersRequest
  ): Promise<Supplier.IListSuppliersResponse> => {
    const { data } = await api.get('/supplier', { params: payload });
    return data;
  },
};

import { api } from '@/configs/api';
import { Product } from './product.types';

export const ProductService = {
  register: async (payload: Product.IRegisterRequest): Promise<Product.IRegisterResponse> => {
    const { data } = await api.post('/product', payload);
    return data;
  },
  list: async (payload: Product.IListProductsRequest): Promise<Product.IListProductsResponse> => {
    const { data } = await api.get('/product', { params: payload });
    return data;
  },
};

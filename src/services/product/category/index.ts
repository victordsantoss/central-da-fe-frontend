import { api } from '@/configs/api';
import { Category } from './category.types';

export const ProductCategoryService = {
  list: async (payload: Category.IListRequest): Promise<Category.IListResponse> => {
    const { data } = await api.get('/category', { params: payload });
    return data;
  },
};

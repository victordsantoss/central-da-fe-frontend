import { api } from '@/configs/api';
import { Church } from '../domain/church.types';

export const ChurchService = {
  list: async (payload: Church.IListChurchesRequest): Promise<Church.IListChurchesResponse> => {
    const { data } = await api.post('/church', payload);
    return data;
  },
};

import { api } from '@/configs/api';
import { Position } from '../domain/position.types';

export const PositionService = {
  list: async (
    payload: Position.IListPositionsRequest
  ): Promise<Position.IListPositionsResponse> => {
    const { data } = await api.get('/position', { params: payload });
    return data;
  },
};

'use server';

import { apiFetch } from '@/configs/api/ssr-fetch';

import { IFetchSuccessResponse } from '@/common/types/fetch.types';
import { Position } from '../domain/position.types';

export async function listPositions(filters: Position.IListPositionsRequest) {
  return await apiFetch<IFetchSuccessResponse<Position.IListPositionsResponse>>(
    '/position',
    {
      method: 'GET',
      next: {
        tags: ['list-positions'],
      },
      cache: 'no-cache',
    },
    filters
  );
}

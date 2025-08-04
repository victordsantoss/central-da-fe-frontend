'use server';

import { apiFetch } from '@/configs/api/ssr-fetch';
import { Church } from '../domain/church.types';
import { IFetchSuccessResponse } from '@/common/types/fetch.types';

export async function listChurches(filters: Church.IListChurchesRequest) {
  return await apiFetch<IFetchSuccessResponse<Church.IListChurchesResponse>>(
    '/church',
    {
      method: 'GET',
      next: {
        tags: ['list-churches'],
      },
      cache: 'no-cache',
    },
    filters
  );
}

'use server';

import { apiFetch } from '@/configs/api/ssr-fetch';
import { Event } from '../domain/event.types';
import { IFetchSuccessResponse } from '@/common/types/fetch.types';

export async function listEvents(filters: Event.IListEventsRequest) {
  return await apiFetch<IFetchSuccessResponse<Event.IListEventsResponse>>(
    '/event',
    {
      method: 'GET',
      next: {
        tags: ['list-events'],
      },
      cache: 'no-cache',
    },
    filters
  );
}

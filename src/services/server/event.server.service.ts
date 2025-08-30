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
<<<<<<< Updated upstream
}

export async function getEventById(id: string) {
  return await apiFetch<IFetchSuccessResponse<Event.IGetEventResponse>>(
    `/event/${id}`,
    {
      method: 'GET',
      next: {
        tags: ['get-event', id],
      },
      cache: 'no-cache',
    }
  );
}
=======
}
>>>>>>> Stashed changes

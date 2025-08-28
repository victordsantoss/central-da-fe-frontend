'use server';

import { ICommonSearchParams } from '@/common/types/common.types';
import EventDashboardViewModel from '../../ui/dashboard';
import { listEvents } from '@/services/server/event.server.service';
import { handleApiError } from '@/configs/api/ssr-fetch';
import { Event } from '@/services/domain/event.types';

export default async function EventDashboardPage(searchParams: Readonly<ICommonSearchParams>) {
  const events = await listEvents({
    limit: 1000,
    page: 1,
    search: searchParams.search as string,
  });

  const eventsData = handleApiError<Event.IListEventsResponse>(events);

  return <EventDashboardViewModel eventsData={eventsData} />;
}

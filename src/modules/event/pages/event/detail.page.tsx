'use server';

import { getEventById } from '@/services/server/event.server.service';
import { handleApiError } from '@/configs/api/ssr-fetch';
import { Event } from '@/services/domain/event.types';
import EventDetailViewModel from '../../ui/detail';

interface IEventDetailPageProps {
  params: {
    id: string;
  };
}

export default async function EventDetailPage({ params }: IEventDetailPageProps) {
  const event = await getEventById(params.id);
  const eventData = handleApiError<Event.IGetEventResponse>(event);

  return <EventDetailViewModel eventData={eventData} />;
}

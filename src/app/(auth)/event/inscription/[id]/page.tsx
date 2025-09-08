import EventInscriptionPage from '@/modules/event/pages/event/inscription.page';
import { getEventById } from '@/services/server/event.server.service';
import { handleApiError } from '@/configs/api/ssr-fetch';
import { Event } from '@/services/domain/event.types';

interface IPageProps {
  readonly params: Promise<{ id: string }>;
}

export default async function Page({ params }: IPageProps) {
  const { id } = await params;
  const event = await getEventById(id);
  const eventData = handleApiError<Event.IGetEventResponse>(event);

  return <EventInscriptionPage eventData={eventData} />;
}

'use server';

import EventInscriptionViewModel from '../../ui/inscription';
import { Event } from '@/services/domain/event.types';

interface IEventInscriptionPageProps {
  readonly eventData: Event.IGetEventResponse;
}

export default async function EventInscriptionPage({ eventData }: IEventInscriptionPageProps) {
  return <EventInscriptionViewModel eventData={eventData} />;
}

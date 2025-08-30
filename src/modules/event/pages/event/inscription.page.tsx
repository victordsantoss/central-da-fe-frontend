'use server';

import EventInscriptionViewModel from '../../ui/inscription'
import { Event } from '@/services/domain/event.types'

interface IEventInscriptionPageProps {
  readonly id: string
  readonly eventData: Event.IGetEventResponse
}

export default async function EventInscriptionPage({ id, eventData }: IEventInscriptionPageProps) {
  return <EventInscriptionViewModel id={id} eventData={eventData} />
}


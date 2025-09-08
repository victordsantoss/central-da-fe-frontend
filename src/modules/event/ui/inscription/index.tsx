'use client';

import { EventInscriptionView } from './inscription.view';
import { Event } from '@/services/domain/event.types';

interface IEventInscriptionViewModelProps {
  readonly eventData: Event.IGetEventResponse;
}

const EventInscriptionViewModel = ({ eventData }: IEventInscriptionViewModelProps) => {
  return <EventInscriptionView eventData={eventData} />;
};

export default EventInscriptionViewModel;

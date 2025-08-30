'use client';

import { useEventDetailModel } from './detail.model';
import { EventDetailView } from './detail.view';
import { Event } from '@/services/domain/event.types';

interface IEventDetailViewModelProps {
  eventData: Event.IGetEventResponse;
}

const EventDetailViewModel = ({ eventData }: IEventDetailViewModelProps) => {
  const methods = useEventDetailModel();

  return <EventDetailView eventData={eventData} {...methods} />;
};

export default EventDetailViewModel; 
'use client';

import { useEventDashboardModel } from './dashboard.model';
import { EventDashboardView } from './dashboard.view';
import { Event } from '@/services/domain/event.types';

interface IEventDashboardViewModelProps {
  eventsData: Event.IListEventsResponse;
}

const EventDashboardViewModel = ({ eventsData }: IEventDashboardViewModelProps) => {
  const methods = useEventDashboardModel();

  return <EventDashboardView eventsData={eventsData} {...methods} />;
};

export default EventDashboardViewModel;

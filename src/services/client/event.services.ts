import { api } from '@/configs/api';
import { Event } from '../domain/event.types';

export const EventService = {
  registerEvent: async (
    payload: Event.IRegisterEventRequest
  ): Promise<Event.IRegisterEventResponse> => {
    const { data } = await api.post('/event', payload);
    return data;
  },
  subscribeEvent: async (
    eventId: string,
    payload: Event.ISubscribeEventRequest
  ): Promise<Event.ISubscribeEventResponse> => {
    const { data } = await api.post(`/event/${eventId}/subscribe`, payload);
    return data;
  },
};

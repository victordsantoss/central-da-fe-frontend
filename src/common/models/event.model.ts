import { EventCategory, EventStatus, EventType } from '@/common/enums/event.enum';

export type EventModel = {
  id: string;
  name: string;
  description: string;
  content?: string;
  image: string;
  startDate: Date;
  endDate: Date;
  time: string;
  status: EventStatus;
  type: EventType;
  category: EventCategory;
  price?: number;
  churchId: string;
  churchName: string;
  addressName: string;
  customLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  youtubeLink?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

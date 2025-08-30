import { EventCategory } from '@/common/enums/event.enum';
import { EventModel } from '@/common/models/event.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';
import { AddressModel } from '@/common/models/address.model';
import { Dayjs } from 'dayjs';

export namespace Event {
  export type IListEventsRequest = IPaginatedRequest;
  export type IListEventsResponse = IPaginatedResponse<EventModel>;
  export type IGetEventResponse = EventModel;
  export type IRegisterEventRequest = {
    name: string;
    description: string;
    category: EventCategory;
    isPaid?: boolean | undefined;
    price?: number | undefined;
    startDate: Date | Dayjs;
    endDate?: Date | Dayjs;
    address: AddressModel;
    availableTickets: number;
    churchId: string;
  };
  export type IRegisterEventResponse = {
    id: string;
    name: string;
    description: string;
  };
}

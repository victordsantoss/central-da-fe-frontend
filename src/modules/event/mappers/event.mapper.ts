import { EventCategory, EventStatus, EventType } from '@/common/enums/event.enum';

export const getEventStatusColor = (
  status: EventStatus
): 'success' | 'error' | 'warning' | 'default' => {
  switch (status) {
    case EventStatus.ACTIVE:
      return 'success';
    case EventStatus.INACTIVE:
      return 'error';
    case EventStatus.CANCELLED:
      return 'warning';
    case EventStatus.COMPLETED:
      return 'default';
    default:
      return 'default';
  }
};

export const getEventCategoryColor = (
  category: EventCategory
): 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' => {
  switch (category) {
    case EventCategory.CONFERENCE:
      return 'info';
    case EventCategory.WORKSHOP:
      return 'secondary';
    case EventCategory.CONGRESS:
      return 'success';
    case EventCategory.MEETING:
      return 'warning';
    case EventCategory.EVENT:
    default:
      return 'info';
  }
};

export const getEventTypeColor = (type: EventType): 'success' | 'warning' | 'info' => {
  switch (type) {
    case EventType.FREE:
      return 'success';
    case EventType.PAID:
      return 'warning';
    default:
      return 'success';
  }
};

export const getEventTypeIcon = (type: EventType): string => {
  switch (type) {
    case EventType.FREE:
      return '🎉';
    case EventType.PAID:
      return '💰';
    default:
      return '🎉';
  }
};

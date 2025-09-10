import { EventCategory, EventStatus, EventType } from '@/common/enums/event.enum';

export const getEventStatusColor = (
  status: EventStatus
): 'success' | 'error' | 'warning' | 'default' | 'info' => {
  switch (status) {
    case EventStatus.ACTIVE:
      return 'success'; // verde → ativo
    case EventStatus.INACTIVE:
      return 'default'; // cinza → inativo
    case EventStatus.CANCELLED:
      return 'error'; // vermelho → cancelado
    case EventStatus.COMPLETED:
      return 'info'; // azul → concluído
    default:
      return 'default';
  }
};

export const getEventCategoryColor = (
  category: EventCategory
): 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' => {
  switch (category) {
    case EventCategory.CONFERENCE:
      return 'primary'; // azul principal
    case EventCategory.WORKSHOP:
      return 'secondary'; // roxo
    case EventCategory.CONGRESS:
      return 'warning'; // amarelo
    case EventCategory.MEETING:
      return 'success'; // verde
    case EventCategory.EVENT:
    default:
      return 'info'; // azul claro
  }
};

export const getEventTypeColor = (type: EventType): 'success' | 'warning' | 'info' => {
  switch (type) {
    case EventType.FREE:
      return 'success'; // verde → gratuito
    case EventType.PAID:
      return 'warning'; // vermelho → pago
    default:
      return 'info';
  }
};

export const getEventTypeIcon = (type: EventType): string => {
  switch (type) {
    case EventType.FREE:
      return '🎉'; // evento gratuito
    case EventType.PAID:
      return '💰'; // evento pago
    default:
      return '🎉';
  }
};

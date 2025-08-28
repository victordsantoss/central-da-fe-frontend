import { useEventTableCardModel } from './table-card.model';
import EventTableCardView from './table-card.view';
import { EventModel } from '@/common/models/event.model';

interface IEventCardViewModelProps {
  item: EventModel;
}

const EventTableCardViewModel = ({ item }: IEventCardViewModelProps) => {
  const methods = useEventTableCardModel();
  return <EventTableCardView item={item} {...methods} />;
};

export default EventTableCardViewModel;

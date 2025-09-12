import { Box } from '@mui/material';
import { Event } from '@/services/domain/event.types';
import { Option } from '@/components/filter/filter.types';
import FilterViewModel from '@/components/filter';
import TableViewModel from '@/components/table';
import EventTableCardViewModel from './components/table-card';
import { EventModel } from '@/common/models/event.model';
import { useMetadata } from '@/contexts/metadata.context';
import { useEffect } from 'react';

interface IEventDashboardViewProps {
  eventsData: Event.IListEventsResponse;
  onRegisterClick: () => void;
  orderOptions: Option[];
}

export const EventDashboardView = ({
  eventsData,
  onRegisterClick,
  orderOptions,
}: IEventDashboardViewProps) => {
  const { updateMetadata } = useMetadata();

  useEffect(() => {
    updateMetadata('Dashboard de Eventos - CDMOR', 'Eventos');
  }, [eventsData, updateMetadata]);

  return (
    <Box display={'flex'} flexDirection={'column'} gap={{ xs: 2, md: 3 }}>
      <Box display={'flex'} width={'100%'} gap={{ xs: 2, md: 3 }}>
        <FilterViewModel
          searchPlaceholder="Pesquisar Nome ou Descrição"
          onRegisterClick={onRegisterClick}
          orderOptions={orderOptions}
        />
      </Box>

      <TableViewModel
        renderItem={(item: EventModel) => <EventTableCardViewModel item={item} />}
        content={eventsData}
        itemSize={{
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
        }}
      />
    </Box>
  );
};

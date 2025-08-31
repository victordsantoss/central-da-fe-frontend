import {
  Box,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
  Chip,
  Divider,
  Card,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChurchIcon from '@mui/icons-material/Church';
import { EventModel } from '@/common/models/event.model';

import { EventTableCardPopover } from './popover';
import { formatDateAndTime } from '@/common/utils/date.util';
import {
  getEventCategoryColor,
  getEventStatusColor,
  getEventTypeColor,
} from '@/modules/event/mappers/event.mapper';
import { EventCategory, EventType } from '@/common/enums/event.enum';

interface IEventTableCardViewProps {
  item: EventModel;
  anchorEl: HTMLButtonElement | null;
  handleOpenPopover: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClosePopover: () => void;
  open: boolean;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EventTableCardView = ({
  item,
  anchorEl,
  handleOpenPopover,
  handleClosePopover,
  open,
  onView,
  onEdit,
  onDelete,
}: IEventTableCardViewProps) => {
  return (
    <Card>
      <CardContent>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          alignItems="flex-start"
        >
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" fontWeight={700}>
                  {item.name}
                </Typography>
              </Box>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          </Box>
          <Box sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <IconButton
                color="inherit"
                aria-label="opções"
                onClick={handleOpenPopover}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <MoreVertIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <EventIcon sx={{ color: 'text.secondary' }} />
              <Typography variant="body2">{formatDateAndTime(new Date(item.startDate))}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <ChurchIcon sx={{ color: 'text.secondary' }} />
              <Typography variant="body2">{item.churchName}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon sx={{ color: 'text.secondary' }} />
              <Typography variant="body2">{item.addressName}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Chip
              label={item.category || EventCategory.EVENT}
              color={getEventCategoryColor(item.category || EventCategory.EVENT)}
              variant="outlined"
              size="small"
            />
            <Chip
              label={item.type || EventType.FREE}
              color={getEventTypeColor(item.type || EventType.FREE)}
              variant="outlined"
              size="small"
            />
            <Chip
              label={item.status}
              color={getEventStatusColor(item.status)}
              size="small"
              variant="outlined"
            />
          </Stack>
        </Stack>
      </CardContent>
      <EventTableCardPopover
        item={item}
        open={open}
        anchorEl={anchorEl}
        handleClosePopover={handleClosePopover}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Card>
  );
};

export default EventTableCardView;

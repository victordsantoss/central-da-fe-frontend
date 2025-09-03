import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChurchIcon from '@mui/icons-material/Church';
import DescriptionIcon from '@mui/icons-material/Description';
import { Event } from '@/services/domain/event.types';
import { formatDateAndTime } from '@/common/utils/date.util';
import {
  getEventCategoryColor,
  getEventStatusColor,
  getEventTypeColor,
} from '@/modules/event/mappers/event.mapper';
import { EventCategory, EventType } from '@/common/enums/event.enum';
import { formStyles } from '@/common/utils/styles';

interface IEventDetailViewProps {
  eventData: Event.IGetEventResponse;
  onBackClick: () => void;
  onEditClick: (id: string) => void;
}

export const EventDetailView = ({ eventData, onBackClick, onEditClick }: IEventDetailViewProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        gap={2}
      >
        <IconButton onClick={onBackClick} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowBackIcon sx={theme => ({ color: theme.palette.primary.main })} />
          <Typography
            variant="body1"
            sx={{ ...formStyles.title, textAlign: 'left', display: { xs: 'block', sm: 'none' } }}
          >
            Voltar
          </Typography>
        </IconButton>
        <Typography variant="h3" sx={{ ...formStyles.title, textAlign: 'left' }}>
          Detalhes do Evento
        </Typography>
        <Box sx={{ ml: 'auto' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<EditIcon />}
            onClick={() => onEditClick(eventData.id)}
          >
            Editar
          </Button>
        </Box>
      </Stack>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 2 }}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={2}
            mb={2}
            alignItems="center"
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          >
            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              <Typography variant="h5" fontWeight={600}>
                {eventData.name}
              </Typography>
              <Chip
                label={eventData.category || EventCategory.EVENT}
                color={getEventCategoryColor(eventData.category || EventCategory.EVENT)}
                variant="outlined"
                size="small"
              />
              <Chip
                label={eventData.type || EventType.FREE}
                color={getEventTypeColor(eventData.type || EventType.FREE)}
                variant="filled"
                size="small"
              />
              <Chip
                label={eventData.status}
                color={getEventStatusColor(eventData.status)}
                variant="filled"
                size="small"
              />
            </Box>

            <Box>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Typography variant="h6" fontWeight={600}>
                  Valor do ingresso
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="text.primary"
                textAlign={{ xs: 'left', md: 'center' }}
              >
                {eventData.price && eventData.price > 0
                  ? `R$ ${eventData.price.toFixed(2)}`
                  : 'Gratuito'}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
            <Box flex={1}>
              <Stack spacing={3}>
                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <DescriptionIcon sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" fontWeight={600}>
                      Descrição
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    {eventData.description}
                  </Typography>
                </Box>

                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <EventIcon sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" fontWeight={600}>
                      Data e Hora
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    <strong>Início:</strong> {formatDateAndTime(new Date(eventData.startDate))}
                  </Typography>
                  {eventData.endDate && (
                    <Typography variant="body1" color="text.primary">
                      <strong>Fim:</strong> {formatDateAndTime(new Date(eventData.endDate))}
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Box>

            <Box flex={1}>
              <Stack spacing={3}>
                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <ChurchIcon sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" fontWeight={600}>
                      Igreja
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    {eventData.churchName}
                  </Typography>
                </Box>

                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" fontWeight={600}>
                      Localização
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    {eventData.addressName}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

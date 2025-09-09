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
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChurchIcon from '@mui/icons-material/Church';
import DescriptionIcon from '@mui/icons-material/Description';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCopyLink = async (link: string | undefined, platform: string) => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);
      setSnackbarMessage(`${platform} copiado para a área de transferência!`);
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage('Erro ao copiar link');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
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
        <Box sx={{ ml: 'auto', width: { xs: '100%', md: 'auto' } }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<EditIcon />}
            onClick={() => onEditClick(eventData.id)}
            fullWidth
            sx={{ width: { xs: '100%', md: 'auto' } }}
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

            <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
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
                    <DescriptionIcon sx={{ color: 'text.primary' }} />
                    <Typography variant="h6" fontWeight={600}>
                      Descrição
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    {eventData.description}
                  </Typography>
                </Box>

                {eventData.content && (
                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <DescriptionIcon sx={{ color: 'text.primary' }} />
                      <Typography variant="h6" fontWeight={600}>
                        Conteúdo ou Mais Informações
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.primary">
                      {eventData.content}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Box>

            <Box flex={1}>
              <Stack spacing={3}>
                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <ChurchIcon sx={{ color: 'text.primary' }} />
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
                    <LocationOnIcon sx={{ color: 'text.primary' }} />
                    <Typography variant="h6" fontWeight={600}>
                      Localização
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    {eventData.addressName}
                  </Typography>
                </Box>

                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <EventIcon sx={{ color: 'text.primary' }} />
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
          </Box>
        </CardContent>
      </Card>

      {/* Social Media and Links Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" mb={3} sx={{ ...formStyles.title, textAlign: 'left' }}>
            Redes Sociais e Links
          </Typography>
          {(eventData.customLink ||
            eventData.facebookLink ||
            eventData.instagramLink ||
            eventData.youtubeLink) ? (
            <Stack spacing={{ xs: 1, md: 2 }} direction={{ xs: 'column', md: 'row' }} divider={<Divider orientation="vertical" flexItem />}>
              {eventData.customLink && (
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                    <LinkIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                      Link Personalizado
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: 'action.hover',
                      border: '1px solid',
                      borderColor: 'divider',
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'primary.main',
                        flex: 1,
                        wordBreak: 'break-all',
                        fontSize: '0.875rem',
                      }}
                    >
                      {eventData.customLink}
                    </Typography>
                    <Tooltip title="Copiar link" placement="top" arrow>
                      <IconButton
                        size="small"
                        onClick={() => handleCopyLink(eventData.customLink, 'Link personalizado')}
                        sx={{
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                          },
                        }}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              )}
              {eventData.facebookLink && (
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                    <FacebookIcon sx={{ color: '#1877F2', fontSize: 24 }} />
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                      Facebook
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: 'rgba(24, 119, 242, 0.08)',
                      border: '1px solid',
                      borderColor: 'rgba(24, 119, 242, 0.2)',
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#1877F2',
                        flex: 1,
                        wordBreak: 'break-all',
                        fontSize: '0.875rem',
                      }}
                    >
                      {eventData.facebookLink}
                    </Typography>
                    <Tooltip title="Copiar link" placement="top" arrow>
                      <IconButton
                        size="small"
                        onClick={() => handleCopyLink(eventData.facebookLink, 'Facebook')}
                        sx={{
                          color: '#1877F2',
                          '&:hover': {
                            backgroundColor: '#1877F2',
                            color: 'white',
                          },
                        }}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              )}
              {eventData.instagramLink && (
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                    <InstagramIcon sx={{ color: '#E4405F', fontSize: 24 }} />
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                      Instagram
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: 'rgba(228, 64, 95, 0.08)',
                      border: '1px solid',
                      borderColor: 'rgba(228, 64, 95, 0.2)',
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#E4405F',
                        flex: 1,
                        wordBreak: 'break-all',
                        fontSize: '0.875rem',
                      }}
                    >
                      {eventData.instagramLink}
                    </Typography>
                    <Tooltip title="Copiar link" placement="top" arrow>
                      <IconButton
                        size="small"
                        onClick={() => handleCopyLink(eventData.instagramLink, 'Instagram')}
                        sx={{
                          color: '#E4405F',
                          '&:hover': {
                            backgroundColor: '#E4405F',
                            color: 'white',
                          },
                        }}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              )}
              {eventData.youtubeLink && (
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                    <YouTubeIcon sx={{ color: '#FF0000', fontSize: 24 }} />
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                      YouTube
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: 'rgba(255, 0, 0, 0.08)',
                      border: '1px solid',
                      borderColor: 'rgba(255, 0, 0, 0.2)',
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#FF0000',
                        flex: 1,
                        wordBreak: 'break-all',
                        fontSize: '0.875rem',
                      }}
                    >
                      {eventData.youtubeLink}
                    </Typography>
                    <Tooltip title="Copiar link" placement="top" arrow>
                      <IconButton
                        size="small"
                        onClick={() => handleCopyLink(eventData.youtubeLink, 'YouTube')}
                        sx={{
                          color: '#FF0000',
                          '&:hover': {
                            backgroundColor: '#FF0000',
                            color: 'white',
                          },
                        }}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              )}
            </Stack>
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
                px: 2,
                backgroundColor: 'action.hover',
                borderRadius: 1,
                border: '1px dashed',
                borderColor: 'divider',
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Não registrado
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

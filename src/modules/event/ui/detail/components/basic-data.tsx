import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  TextField,
  Switch,
  FormControlLabel,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ShareIcon from '@mui/icons-material/Share';
import { Event } from '@/services/domain/event.types';
import { formatDateAndTime } from '@/common/utils/date.util';
import { EventCategory, EventType } from '@/common/enums/event.enum';
import { formStyles } from '@/common/utils/styles';

interface IBasicDataProps {
  eventData: Event.IGetEventResponse;
  onCopyLink: (link: string | undefined, platform: string) => void;
}

export const BasicData = ({ eventData, onCopyLink }: IBasicDataProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Basic Data Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            mb={3}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DescriptionIcon fontSize="small" />
            </Box>
            Dados Básicos
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Nome do Evento"
              value={eventData.name || ''}
              fullWidth
              disabled
              slotProps={{ input: { readOnly: true } }}
            />

            <TextField
              label="Descrição"
              value={eventData.description || ''}
              fullWidth
              multiline
              rows={4}
              disabled
              slotProps={{ input: { readOnly: true } }}
            />

            <TextField
              label="Conteúdo ou Mais Informações"
              value={eventData.content || ''}
              fullWidth
              multiline
              rows={4}
              disabled
              slotProps={{ input: { readOnly: true } }}
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
              <TextField
                label="Categoria"
                value={eventData.category || EventCategory.EVENT}
                fullWidth
                disabled
                slotProps={{ input: { readOnly: true } }}
              />
              <TextField
                label="Tipo do Evento"
                value={eventData.type || EventType.FREE}
                fullWidth
                disabled
                slotProps={{ input: { readOnly: true } }}
              />
              <TextField
                label="Igreja"
                value={eventData.churchName || ''}
                fullWidth
                disabled
                slotProps={{ input: { readOnly: true } }}
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* Financial Details Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            mb={3}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: 'success.light',
                color: 'success.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AttachMoneyIcon fontSize="small" />
            </Box>
            Detalhes Financeiros
          </Typography>

          <Stack spacing={3}>
            <FormControlLabel
              control={<Switch checked={Boolean(eventData.price && eventData.price > 0)} />}
              label={`Evento ${eventData.price && eventData.price > 0 ? 'Pago' : 'Gratuito'}`}
            />

            <TextField
              label="Preço do Ingresso"
              value={`R$ ${eventData.price?.toFixed(2) || 0}`}
              fullWidth
              disabled
            />

            <TextField
              label="Quantidade de vagas Disponíveis"
              value={eventData.availableTickets || 'Não informado'}
              fullWidth
              disabled
            />
          </Stack>
        </CardContent>
      </Card>

      {/* Schedules and Location Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            mb={3}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: 'secondary.light',
                color: 'secondary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ScheduleIcon fontSize="small" />
            </Box>
            Horários e Localização
          </Typography>

          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
              <TextField
                label="Data de Início"
                value={formatDateAndTime(new Date(eventData.startDate))}
                fullWidth
                disabled
                slotProps={{ input: { readOnly: true } }}
              />
              <TextField
                label="Data de Término"
                value={
                  eventData.endDate
                    ? formatDateAndTime(new Date(eventData.endDate))
                    : 'Não informado'
                }
                fullWidth
                disabled
                slotProps={{ input: { readOnly: true } }}
              />
            </Stack>

            <TextField
              label="Endereço"
              value={eventData.addressName || 'Não informado'}
              fullWidth
              disabled
              slotProps={{ input: { readOnly: true } }}
            />
          </Stack>
        </CardContent>
      </Card>

      {/* Social Media and Links Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            mb={3}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShareIcon fontSize="small" />
            </Box>
            Divulgação e Compartilhamento
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Link Personalizado"
              value={eventData.customLink || 'Não informado'}
              fullWidth
              disabled
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'action.hover',
                  borderColor: 'divider',
                },
              }}
              slotProps={{
                input: {
                  readOnly: true,
                  startAdornment: <LinkIcon sx={{ mr: 1, color: 'primary.main' }} />,
                  endAdornment: (
                    <Tooltip title="Copiar link" placement="top" arrow>
                      <IconButton
                        size="small"
                        onClick={() => onCopyLink(eventData.customLink, 'Link personalizado')}
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
                  ),
                },
              }}
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
              <TextField
                label="Facebook"
                value={eventData.facebookLink || 'Não informado'}
                fullWidth
                disabled
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(24, 119, 242, 0.08)',
                    borderColor: 'rgba(24, 119, 242, 0.2)',
                  },
                }}
                slotProps={{
                  input: {
                    readOnly: true,
                    startAdornment: <FacebookIcon sx={{ mr: 1, color: '#1877F2' }} />,
                    endAdornment: (
                      <Tooltip title="Copiar link" placement="top" arrow>
                        <IconButton
                          size="small"
                          onClick={() => onCopyLink(eventData.facebookLink, 'Facebook')}
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
                    ),
                  },
                }}
              />

              <TextField
                label="Instagram"
                value={eventData.instagramLink || 'Não informado'}
                fullWidth
                disabled
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(228, 64, 95, 0.08)',
                    borderColor: 'rgba(228, 64, 95, 0.2)',
                  },
                }}
                slotProps={{
                  input: {
                    readOnly: true,
                    startAdornment: <InstagramIcon sx={{ mr: 1, color: '#E4405F' }} />,
                    endAdornment: (
                      <Tooltip title="Copiar link" placement="top" arrow>
                        <IconButton
                          size="small"
                          onClick={() => onCopyLink(eventData.instagramLink, 'Instagram')}
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
                    ),
                  },
                }}
              />
            </Stack>

            <TextField
              label="YouTube"
              value={eventData.youtubeLink || 'Não informado'}
              fullWidth
              disabled
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 0, 0, 0.08)',
                  borderColor: 'rgba(255, 0, 0, 0.2)',
                },
              }}
              slotProps={{
                input: {
                  readOnly: true,
                  startAdornment: <YouTubeIcon sx={{ mr: 1, color: '#FF0000' }} />,
                  endAdornment: (
                    <Tooltip title="Copiar link" placement="top" arrow>
                      <IconButton
                        size="small"
                        onClick={() => onCopyLink(eventData.youtubeLink, 'YouTube')}
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
                  ),
                },
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

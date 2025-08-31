import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import { Event } from '@/services/domain/event.types';
import { formatDateAndTime } from '@/common/utils/date.util';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChurchIcon from '@mui/icons-material/Church';

interface IEventInscriptionViewProps {
  id: string;
  eventData: Event.IGetEventResponse;
}

export function EventInscriptionView({ id, eventData }: IEventInscriptionViewProps) {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            backgroundImage: `url(${eventData.image || '/assets/event-banner-mock.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(12px) brightness(0.2)',
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            width: '100%',
            px: 3,
            position: 'relative',
            zIndex: 1,
            margin: 0,
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'center',
              gap: 4,
              py: 4,
            }}
          >
            <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  lineHeight: 1.2,
                  color: theme.palette.background.paper,
                }}
              >
                {eventData.name}
              </Typography>

              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  justifyContent={{ xs: 'center', lg: 'flex-start' }}
                >
                  <EventIcon
                    sx={{
                      fontSize: 24,
                      color: theme.palette.background.paper,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                        color: theme.palette.background.paper,
                      }}
                    >
                      {formatDateAndTime(new Date(eventData.startDate))}
                    </Typography>
                    {eventData.endDate && (
                      <Typography
                        variant="body2"
                        sx={{
                          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                          color: theme.palette.background.paper,
                        }}
                      >
                        até {formatDateAndTime(new Date(eventData.endDate))}
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={{ xs: 1, md: 2 }}
                  justifyContent={{ xs: 'center', lg: 'flex-start' }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: 24,
                      color: theme.palette.background.paper,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      color: theme.palette.background.paper,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      flex: 1,
                      wordBreak: 'break-word',
                    }}
                  >
                    {eventData.addressName}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  justifyContent={{ xs: 'center', lg: 'flex-start' }}
                >
                  <ChurchIcon
                    sx={{
                      fontSize: 24,
                      color: theme.palette.background.paper,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      color: theme.palette.background.paper,
                    }}
                  >
                    {eventData.churchName}
                  </Typography>
                </Box>
              </Stack>

              <Box display="flex" justifyContent={{ xs: 'center', lg: 'flex-start' }} mb={3}>
                <Chip
                  label={
                    eventData.price && eventData.price > 0
                      ? `R$ ${eventData.price.toFixed(2)}`
                      : 'Gratuito'
                  }
                  color={eventData.price && eventData.price > 0 ? 'success' : 'primary'}
                  variant="filled"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    py: 1.5,
                    px: 2,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '200px', md: '250px', lg: '300px' },
                  height: { xs: '200px', md: '250px', lg: '300px' },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
                  border: '3px solid rgba(255,255,255,0.2)',
                }}
              >
                <Image
                  src={eventData.image || '/assets/event-banner-mock.jpg'}
                  alt={`Imagem do evento ${eventData.name}`}
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  priority
                  quality={90}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Container sx={{ py: 6, marginTop: { xs: '550px', lg: '100px' } }}>
        <Box sx={{ px: 3 }}>
          <Box display="flex" alignItems="center" gap={2} mb={4}>
            <Typography variant="h4" fontWeight={700} color="text.primary">
              Descrição do Evento
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 4,
            }}
          >
            {eventData.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              const formElement = document.getElementById('inscription-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{
              py: 1,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              maxWidth: '1200px',
              borderRadius: 3,
              textTransform: 'none',
            }}
          >
            Inscrever-se Agora
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

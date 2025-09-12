'use client';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import Image from 'next/image';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChurchIcon from '@mui/icons-material/Church';
import { formatDateAndTime } from '@/common/utils/date.util';
import { Event } from '@/services/domain/event.types';

interface IBannerProps {
  readonly eventData: Event.IGetEventResponse;
}

export function Banner({ eventData }: IBannerProps) {
  return (
    <>
      {/* Banner para Desktop */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: { xs: 0, sm: '320px', md: '400px' },
          display: { xs: 'none', sm: 'flex' },
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
            backgroundImage: `url(${eventData.image || '/assets/church-background-image.jpeg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px) brightness(0.9)',
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
              flexDirection: { sm: 'column', lg: 'row' },
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
              py: { xs: 1, md: 2 },
            }}
          >
            <Box sx={{ flex: 1, textAlign: { sm: 'center', lg: 'left' } }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  color: theme => theme.palette.background.paper,
                }}
              >
                {eventData.name}
              </Typography>

              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={{ xs: 1, md: 2 }}
                  justifyContent={{ sm: 'center', lg: 'flex-start' }}
                >
                  <EventIcon
                    sx={{
                      fontSize: 24,
                      color: theme => theme.palette.background.paper,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                        color: theme => theme.palette.background.paper,
                      }}
                    >
                      {formatDateAndTime(new Date(eventData.startDate))}
                    </Typography>
                    {eventData.endDate && (
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{
                          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                          color: theme => theme.palette.background.paper,
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
                  gap={{ sm: 1, md: 2 }}
                  justifyContent={{ sm: 'center', lg: 'flex-start' }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: 24,
                      color: theme => theme.palette.background.paper,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      color: theme => theme.palette.background.paper,
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
                  gap={{ xs: 1, md: 2 }}
                  justifyContent={{ sm: 'center', lg: 'flex-start' }}
                >
                  <ChurchIcon
                    sx={{
                      fontSize: 24,
                      color: theme => theme.palette.background.paper,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      color: theme => theme.palette.background.paper,
                    }}
                  >
                    {eventData.churchName}
                  </Typography>
                </Box>
              </Stack>

              <Box display="flex" justifyContent={{ sm: 'center', lg: 'flex-start' }} mb={3}>
                <Chip
                  label={
                    eventData.price && eventData.price > 0
                      ? `R$ ${eventData.price.toFixed(2)}`
                      : 'Gratuito'
                  }
                  variant="filled"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    p: { xs: 1, md: 2 },
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                    backgroundColor:
                      eventData.price && eventData.price > 0
                        ? 'success'
                        : theme => theme.palette.auxiliares.free,
                    color: 'white',
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: { sm: '200px', md: '350px', lg: '500px' },
                  height: { sm: '200px', md: '250px', lg: '300px' },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
                  border: '3px solid #FFFFFF',
                }}
              >
                <Image
                  src={eventData.image || '/assets/default-event-banner.jpg'}
                  alt={`Imagem do evento ${eventData.name}`}
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '3px',
                  }}
                  priority
                  quality={90}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Banner para Mobile */}
      <Box
        sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: { xs: 1, md: 2 } }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '95%',
              height: '250px',
              borderRadius: 3,
              overflow: 'hidden',
              marginBottom: { xs: 1, md: 2 },
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            <Image
              src={eventData.image || '/assets/default-event-banner.jpg'}
              alt={`Imagem do evento ${eventData.name}`}
              width={400}
              height={250}
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

        <Container sx={{ py: { xs: 1, md: 2 } }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'text.primary',
              }}
            >
              {eventData.name}
            </Typography>

            <Stack spacing={1} sx={{ mb: 2 }}>
              <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }}>
                <EventIcon sx={{ fontSize: 24, color: 'text.primary' }} />
                <Box>
                  <Typography variant="body1" fontWeight={600} color="text.primary">
                    {formatDateAndTime(new Date(eventData.startDate))}
                  </Typography>
                  {eventData.endDate && (
                    <Typography variant="body1" fontWeight={600} color="text.primary">
                      até {formatDateAndTime(new Date(eventData.endDate))}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }}>
                <LocationOnIcon sx={{ fontSize: 24, color: 'text.primary' }} />
                <Typography
                  variant="body1"
                  fontWeight={500}
                  color="text.primary"
                  sx={{
                    fontSize: '0.875rem',
                    flex: 1,
                    wordBreak: 'break-word',
                  }}
                >
                  {eventData.addressName}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }}>
                <ChurchIcon sx={{ fontSize: 24, color: 'text.primary' }} />
                <Typography variant="body1" fontWeight={500} color="text.primary">
                  {eventData.churchName}
                </Typography>
              </Box>
            </Stack>

            <Box display="flex" justifyContent="flex-start" mb={{ xs: 1, md: 2 }}>
              <Chip
                label={
                  eventData.price && eventData.price > 0
                    ? `R$ ${eventData.price.toFixed(2)}`
                    : 'Gratuito'
                }
                variant="filled"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  p: { xs: 1, md: 2 },
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  backgroundColor:
                    eventData.price && eventData.price > 0
                      ? 'success'
                      : theme => theme.palette.auxiliares.free,
                  color: 'white',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

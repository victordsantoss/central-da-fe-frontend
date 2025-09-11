import { Box, Typography, Button, Stack, IconButton, Tooltip, Divider } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MessageIcon from '@mui/icons-material/Message';
import { Event } from '@/services/domain/event.types';

interface ILinksProps {
  readonly eventData: Event.IGetEventResponse;
}

export function Links({ eventData }: ILinksProps) {
  const hasSocialLinks =
    eventData.customLink ||
    eventData.facebookLink ||
    eventData.instagramLink ||
    eventData.youtubeLink;

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 3 }}
        alignItems="flex-start"
        gap={{ xs: 1, md: 2 }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
        }
      >
        <Box sx={{ textAlign: 'left', flex: 1 }}>
          <Typography variant="h6" fontWeight={600} color="text.primary" mb={2}>
            Meios de Pagamento
          </Typography>
          <Tooltip title="PIX" placement="top" arrow>
            <Image
              src="/pix.png"
              alt="PIX"
              width={96}
              height={34.4}
              style={{
                borderRadius: '4px',
                objectFit: 'contain',
              }}
            />
          </Tooltip>
        </Box>

        {hasSocialLinks && (
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="h6" fontWeight={600} color="text.primary" mb={1}>
              Acompanhe nas Redes Sociais
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
              {eventData.facebookLink && (
                <Tooltip title="Facebook" placement="top" arrow>
                  <IconButton
                    component="a"
                    href={eventData.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#1877F2',
                      '&:hover': {
                        backgroundColor: 'rgba(24, 119, 242, 0.1)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <FacebookIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Tooltip>
              )}

              {eventData.instagramLink && (
                <Tooltip title="Instagram" placement="top" arrow>
                  <IconButton
                    component="a"
                    href={eventData.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#E4405F',
                      '&:hover': {
                        backgroundColor: 'rgba(228, 64, 95, 0.1)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Tooltip>
              )}

              {eventData.youtubeLink && (
                <Tooltip title="YouTube" placement="top" arrow>
                  <IconButton
                    component="a"
                    href={eventData.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FF0000',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          </Box>
        )}

        <Box sx={{ textAlign: 'left', flex: 1 }}>
          <Typography variant="h6" fontWeight={600} color="text.primary" mb={2}>
            Precisando de Ajuda?
          </Typography>
          <Typography variant="body2" color="text.primary" mb={2}>
            Tem alguma dúvida sobre o evento? Entre em contato conosco!
          </Typography>
          <Button
            variant="outlined"
            startIcon={<MessageIcon />}
            color="primary"
            onClick={() => console.log('OnClick')}
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Falar no WhatsApp
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

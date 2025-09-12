'use client';

import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import { Event } from '@/services/domain/event.types';

interface ISuccessStepProps {
  eventData: Event.IGetEventResponse;
  onClose?: () => void;
}

const SOCIAL_MEDIA_STYLES = {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 1, sm: 2 },
    p: { xs: 1, sm: 2 },
    backgroundColor: 'white',
    borderRadius: 2,
    border: 1,
    borderColor: 'grey.100',
    transition: 'all 0.2s ease',
  },
  instagram: {
    '&:hover': {
      borderColor: '#E4405F',
      boxShadow: '0 2px 8px rgba(228, 64, 95, 0.1)',
    },
  },
  facebook: {
    '&:hover': {
      borderColor: '#1877F2',
      boxShadow: '0 2px 8px rgba(24, 119, 242, 0.1)',
    },
  },
  youtube: {
    '&:hover': {
      borderColor: '#FF0000',
      boxShadow: '0 2px 8px rgba(255, 0, 0, 0.1)',
    },
  },
} as const;

export function SuccessStep({ eventData }: Readonly<ISuccessStepProps>) {
  const hasSocialMedia = eventData.instagramLink || eventData.facebookLink || eventData.youtubeLink;

  return (
    <Box>
      <Stack spacing={{ xs: 1, sm: 2 }} alignItems="center">
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={{ xs: 1, sm: 2 }}
        >
          <Typography variant="h4" fontWeight={600} color="info.main">
            Inscrição Confirmada!
          </Typography>

          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            Sua participação no evento <strong>{eventData.name}</strong> foi confirmada com sucesso.
          </Typography>
        </Box>

        {hasSocialMedia && (
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'grey.50',
              borderRadius: 3,
              p: { xs: 1, sm: 2 },
            }}
          >
            <Stack spacing={{ xs: 1, sm: 2 }}>
              <Box textAlign="center">
                <Typography variant="h6" color="text.primary" fontWeight={600}>
                  📱 Acompanhe nossas redes
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Fique por dentro de todas as atualizações do evento
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Stack spacing={{ xs: 1, sm: 2 }}>
                {eventData.instagramLink && (
                  <Box
                    sx={{
                      ...SOCIAL_MEDIA_STYLES.base,
                      ...SOCIAL_MEDIA_STYLES.instagram,
                    }}
                  >
                    <InstagramIcon sx={{ color: '#E4405F', fontSize: 24 }} />
                    <Typography variant="body2" color="text.primary" fontWeight={500}>
                      @{eventData.instagramLink.split('/').pop()}
                    </Typography>
                  </Box>
                )}

                {eventData.facebookLink && (
                  <Box
                    sx={{
                      ...SOCIAL_MEDIA_STYLES.base,
                      ...SOCIAL_MEDIA_STYLES.facebook,
                    }}
                  >
                    <FacebookIcon sx={{ color: '#1877F2', fontSize: 24 }} />
                    <Typography variant="body2" color="text.primary" fontWeight={500}>
                      {eventData.facebookLink.split('/').pop()}
                    </Typography>
                  </Box>
                )}

                {eventData.youtubeLink && (
                  <Box
                    sx={{
                      ...SOCIAL_MEDIA_STYLES.base,
                      ...SOCIAL_MEDIA_STYLES.youtube,
                    }}
                  >
                    <YouTubeIcon sx={{ color: '#FF0000', fontSize: 24 }} />
                    <Typography variant="body2" color="text.primary" fontWeight={500}>
                      {eventData.youtubeLink.split('/').pop()}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Stack>
          </Box>
        )}

        <Box
          display="flex"
          alignItems="center"
          gap={{ xs: 1, sm: 2 }}
          sx={{
            p: { xs: 1, sm: 2 },
            backgroundColor: 'primary.50',
            borderRadius: 2,
            border: 1,
            borderColor: 'primary.200',
          }}
        >
          <MessageIcon sx={{ color: 'primary.main', fontSize: 20 }} />
          <Typography variant="body2" color="primary.main" fontWeight={500}>
            Dúvidas? Entre em contato via WhatsApp ou e-mail da igreja
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

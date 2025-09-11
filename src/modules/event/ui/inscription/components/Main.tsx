import { Box, Typography, Button, useTheme } from '@mui/material';
import { useState } from 'react';
import { Event } from '@/services/domain/event.types';
import { InscriptionModal } from './inscription-modal';

interface IMainProps {
  readonly eventData: Event.IGetEventResponse;
}

export function Main({ eventData }: IMainProps) {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: 1, md: 2 }}
        marginTop={{ xs: 1, md: 2 }}
      >
        <Typography variant="h4" fontWeight={700} color="text.primary">
          Descrição
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            textAlign: 'justify',
          }}
        >
          {eventData.description}
        </Typography>
      </Box>

      {eventData.content && (
        <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 2 }}>
          <Typography variant="h4" fontWeight={700} color="text.primary">
            Mais Detalhes
          </Typography>
          <Box
            sx={{
              overflow: 'hidden',
              transition: 'max-height 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-in-out',
              maxHeight: '5.4em',
              opacity: 0.95,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                textAlign: 'justify',
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {eventData.content}
            </Typography>
          </Box>
        </Box>
      )}

      <Box display={{ xs: 'none', md: 'flex' }} justifyContent="flex-start">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ width: { xs: '100%', md: 'auto' } }}
          onClick={() => setModalOpen(true)}
        >
          Inscrever-se Agora
        </Button>
      </Box>

      <InscriptionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        eventData={eventData}
      />
    </>
  );
}

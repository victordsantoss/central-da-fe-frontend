import { Box, Container, Stack, Divider, Button } from '@mui/material';
import { useState } from 'react';
import { Event } from '@/services/domain/event.types';
import { Banner } from './components/Banner';
import { Main } from './components/Main';
import { Links } from './components/Links';
import { InscriptionModal } from './components/inscription-modal';

interface IEventInscriptionViewProps {
  readonly eventData: Event.IGetEventResponse;
}

export function EventInscriptionView({ eventData }: IEventInscriptionViewProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Banner eventData={eventData} />

      <Container
        sx={{
          py: { xs: 2, md: 3 },
          marginTop: { xs: 0, sm: '320px', md: '380px' },
        }}
      >
        <Stack flexDirection="column" gap={{ xs: 1, md: 2 }}>
          <Main eventData={eventData} />
          <Divider sx={{ my: 2, width: '100%', marginX: 'auto' }} />
          <Box sx={{ mt: { xs: 2, md: 3 } }}>
            <Links eventData={eventData} />
          </Box>
        </Stack>
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            display: { xs: 'block', sm: 'none' },
            zIndex: 1000,
            backgroundColor: 'background.default',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
            p: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={() => setModalOpen(true)}
          >
            Inscrever-se Agora
          </Button>
        </Box>
      </Container>

      <InscriptionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        eventData={eventData}
      />
    </Box>
  );
}

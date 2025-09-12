'use client';

import React, { useState } from 'react';
import { Box, Typography, Stack, Button, CircularProgress, Alert } from '@mui/material';
import { CalendarToday, LocationOn, Event as EventIcon } from '@mui/icons-material';
import { Event } from '@/services/domain/event.types';
import { formatDate } from '@/common/utils/date.util';
import { EventService } from '@/services/client/event.services';
import { useInscriptionModal } from '../inscription-modal.context';
import { getErrorMessage } from '@/common/utils/error.util';
import dayjs from 'dayjs';

interface IConfirmationStepProps {
  onNext: () => void;
  onBack: () => void;
  eventData: Event.IGetEventResponse;
  onSuccess?: () => void;
}

export function ConfirmationStep({
  onNext,
  onBack,
  eventData,
  onSuccess,
}: Readonly<IConfirmationStepProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { userData } = useInscriptionModal();
  const isPaidEvent = eventData.price && eventData.price > 0;

  const formatDateRange = () => {
    const startDate = formatDate(dayjs(eventData.startDate).toDate());
    if (eventData.endDate) {
      const endDate = formatDate(dayjs(eventData.endDate).toDate());
      return `${startDate} - ${endDate}`;
    }
    return startDate;
  };

  const handleSubscribeToEvent = async () => {
    if (!userData?.id) {
      setError('Dados do usuário não encontrados. Por favor, volte e preencha os dados novamente.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await EventService.subscribeEvent(eventData.id, {
        userId: userData.id,
        eventId: eventData.id,
      });

      if (onSuccess) {
        onSuccess();
      } else {
        onNext();
      }
    } catch (err: unknown) {
      console.error('Erro ao inscrever no evento:', err);
      setError(getErrorMessage(err, 'Erro ao realizar a inscrição. Tente novamente.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Stack spacing={{ xs: 1, sm: 2 }}>
        <Box
          sx={{
            backgroundColor: 'grey.50',
            borderRadius: 3,
            p: 2,
          }}
        >
          <Stack spacing={{ xs: 1, sm: 2 }}>
            <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 2 }}>
              <EventIcon color="primary" sx={{ fontSize: 28 }} />
              <Typography variant="h6" fontWeight={600} color="text.primary">
                {eventData.name}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="text.primary"
              sx={{
                lineHeight: 1.6,
                backgroundColor: 'white',
                p: 2,
                borderRadius: 2,
                border: 1,
                borderColor: 'grey.200',
              }}
            >
              {eventData.description}
            </Typography>

            <Stack spacing={{ xs: 1, sm: 2 }}>
              <Box
                display="flex"
                alignItems="center"
                gap={{ xs: 1, sm: 2 }}
                sx={{
                  p: 1.5,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'grey.100',
                }}
              >
                <CalendarToday color="primary" sx={{ fontSize: 20 }} />
                <Typography variant="body1" color="text.primary" fontWeight={500}>
                  <strong>Data:</strong> {formatDateRange()}
                </Typography>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                gap={{ xs: 1, sm: 2 }}
                sx={{
                  p: 1.5,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'grey.100',
                }}
              >
                <LocationOn color="primary" sx={{ fontSize: 20 }} />
                <Typography variant="body1" color="text.primary" fontWeight={500}>
                  <strong>Local:</strong> {eventData.addressName}
                </Typography>
              </Box>

              {!!eventData.availableTickets && (
                <Box
                  display="flex"
                  alignItems="center"
                  gap={{ xs: 1, sm: 2 }}
                  sx={{
                    p: 1.5,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    border: 1,
                    borderColor: 'grey.100',
                  }}
                >
                  <EventIcon color="primary" sx={{ fontSize: 20 }} />
                  <Typography variant="body1" color="text.primary" fontWeight={500}>
                    <strong>Vagas Disponíveis:</strong> {eventData.availableTickets}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Stack>
        </Box>

        {isPaidEvent ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: 'primary.50',
              borderRadius: 2,
              p: 2,
              border: 1,
              borderColor: 'primary.200',
            }}
          >
            <Typography
              variant="h6"
              color="primary.main"
              fontWeight={600}
              sx={{ textAlign: 'center' }}
            >
              R$ {eventData.price?.toFixed(2).replace('.', ',')}
            </Typography>
          </Box>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={{ xs: 1, sm: 2 }}
            sx={{
              backgroundColor: 'grey.50',
              borderRadius: 3,
              p: 1,
            }}
          >
            <Typography variant="body1" color="success.main" fontWeight={500}>
              ✓ Gratuito
            </Typography>
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: 'column-reverse', sm: 'row' }}
          gap={1}
        >
          <Button variant="outlined" color="primary" onClick={onBack} disabled={isLoading}>
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={isPaidEvent ? onNext : handleSubscribeToEvent}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : undefined}
          >
            {isLoading
              ? 'Processando...'
              : isPaidEvent
                ? 'Ir para Pagamento'
                : 'Confirmar Inscrição'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

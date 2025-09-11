'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import {
  CalendarToday,
  LocationOn,
  Event as EventIcon,
} from '@mui/icons-material';
import { Event } from '@/services/domain/event.types';
import { formatDate } from '@/common/utils/date.util';
import dayjs from 'dayjs';

interface IConfirmationStepProps {
  onNext: () => void;
  onBack: () => void;
  eventData: Event.IGetEventResponse;
}

export function ConfirmationStep({ onNext, onBack, eventData }: IConfirmationStepProps) {
  const isPaidEvent = eventData.price && eventData.price > 0;

  const formatDateRange = () => {
    const startDate = formatDate(dayjs(eventData.startDate).toDate());
    if (eventData.endDate) {
      const endDate = formatDate(dayjs(eventData.endDate).toDate());
      return `${startDate} - ${endDate}`;
    }
    return startDate;
  };

  return (
    <Box>
      <Stack spacing={3}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
            Confirmar Inscrição
          </Typography>
        </Box>

        <Stack spacing={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <EventIcon color="primary" />
            <Typography variant="h6" fontWeight={600} color="text.primary">
              {eventData.name}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.6 }}>
            {eventData.description}
          </Typography>

          <Stack spacing={1.5}>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarToday color="action" fontSize="small" />
              <Typography variant="body2" color="text.primary">
                <strong>Data:</strong> {formatDateRange()}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <LocationOn color="action" fontSize="small" />
              <Typography variant="body2" color="text.primary">
                <strong>Local:</strong> {eventData.addressName}
              </Typography>
            </Box>

            {eventData.availableTickets && (
              <Box display="flex" alignItems="center" gap={1}>
                <EventIcon color="action" fontSize="small" />
                <Typography variant="body2" color="text.primary">
                  <strong>Vagas Disponíveis:</strong> {eventData.availableTickets}
                </Typography>
              </Box>
            )}
          </Stack>
        </Stack>

        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          sx={{ 
            backgroundColor: isPaidEvent ? 'primary.50' : 'success.50',
            borderRadius: 2,
            p: 2,
            border: 1,
            borderColor: isPaidEvent ? 'primary.200' : 'success.200'
          }}
        >
          <Typography 
            variant="h6" 
            color={isPaidEvent ? 'primary.main' : 'success.main'}
            fontWeight={600}
            sx={{ textAlign: 'center' }}
          >
            {isPaidEvent ? (
              `R$ ${eventData.price?.toFixed(2).replace('.', ',')}`
            ) : (
              'Evento Gratuito'
            )}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" gap={2} mt={3}>
          <Button
            variant="outlined"
            color="primary"
            onClick={onBack}
            sx={{ minWidth: 120 }}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onNext}
            sx={{ minWidth: 120 }}
          >
            {isPaidEvent ? 'Ir para Pagamento' : 'Confirmar Inscrição'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

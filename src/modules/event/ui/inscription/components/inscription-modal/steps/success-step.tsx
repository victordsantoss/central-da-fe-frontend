'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Event } from '@/services/domain/event.types';

interface ISuccessStepProps {
  onClose: () => void;
  eventData: Event.IGetEventResponse;
}

export function SuccessStep({ onClose, eventData }: ISuccessStepProps) {
  return (
    <Box>
      <Stack spacing={4} alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <CheckCircleIcon 
            sx={{ 
              fontSize: 80, 
              color: 'success.main' 
            }} 
          />
        </Box>

        <Box textAlign="center">
          <Typography variant="h4" fontWeight={600} color="text.primary" gutterBottom>
            Inscrição realizada com sucesso!
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ maxWidth: 400, mx: 'auto' }}>
            Sua inscrição no evento {eventData.name} foi confirmada. Você receberá um e-mail com todas as informações do evento em breve.
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          size="large"
          sx={{ 
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: 300 },
            py: 1,
            fontSize: '1.1rem',
            fontWeight: 600
          }}
        >
          Finalizar
        </Button>
      </Stack>
    </Box>
  );
}

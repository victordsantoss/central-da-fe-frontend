'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import { Event } from '@/services/domain/event.types';

interface IPaymentStepProps {
  eventData: Event.IGetEventResponse;
}

export function PaymentStep({ eventData }: IPaymentStepProps) {
  const [pixCode] = useState('452973-3892345-294784-paroquia.984-0920--274659-3048lowil0-8fk4869g;-038fk;fo');
  const [copied, setCopied] = useState(false);

  const handleCopyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Erro ao copiar código PIX:', err);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de enviar o comprovante de pagamento da inscrição no evento "${eventData.name}".`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box>
      <Stack spacing={2} alignItems="center">
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={600} color="text.primary" gutterBottom>
            Sua inscrição está quase completa!
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ maxWidth: 400, mx: 'auto' }}>
            Efetue o pagamento de <strong>R$ {eventData.price?.toFixed(2).replace('.', ',')}</strong> via PIX para finalizar sua inscrição no evento. Escaneie o QR Code abaixo ou copie a chave PIX para efetuar o pagamento no seu banco.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            p: 2,
            border: 1,
            borderColor: 'grey.300',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/assets/QRCode.svg"
            alt="QR Code PIX"
            width={200}
            height={200}
            style={{
              borderRadius: '8px',
            }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: 2,
            p: 2,
            width: '100%',
            maxWidth: 400,
            border: 1,
            borderColor: 'grey.300',
          }}
        >
          <Typography 
            variant="body2" 
            color="text.primary"
            sx={{ 
              wordBreak: 'break-all',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              lineHeight: 1.4
            }}
          >
            {pixCode}
          </Typography>
        </Box>

        <Button
          variant="text"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopyPixCode}
          color="primary"
          sx={{ 
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '1rem'
          }}
        >
          {copied ? 'Código copiado!' : 'Copiar código'}
        </Button>

        <Box textAlign="center" sx={{ maxWidth: 400 }}>
          <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
            Após o pagamento, envie o comprovante para o WhatsApp da igreja:
          </Typography>
          <Button
            variant="outlined"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsAppClick}
            sx={{
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Enviar comprovante no WhatsApp
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

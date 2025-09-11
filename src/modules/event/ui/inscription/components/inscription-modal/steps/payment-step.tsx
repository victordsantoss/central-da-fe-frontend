'use client';

import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Divider } from '@mui/material';
import {
  ContentCopy as ContentCopyIcon,
  WhatsApp as WhatsAppIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import { Event } from '@/services/domain/event.types';

interface IPaymentStepProps {
  eventData: Event.IGetEventResponse;
}

export function PaymentStep({ eventData }: Readonly<IPaymentStepProps>) {
  const [pixCode] = useState(
    '452973-3892345-294784-paroquia.984-0920--274659-3048lowil0-8fk4869g;-038fk;fo'
  );
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
      <Stack spacing={4} alignItems="center">
        {/* Header Section */}
        <Box textAlign="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'primary.50',
              border: 3,
              borderColor: 'primary.main',
              mb: 2,
            }}
          >
            <PaymentIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Pagamento via PIX
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 500,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Efetue o pagamento de{' '}
            <strong>R$ {eventData.price?.toFixed(2).replace('.', ',')}</strong> para finalizar sua
            inscrição no evento.
          </Typography>
        </Box>

        {/* QR Code Section */}
        <Box
          sx={{
            backgroundColor: 'grey.50',
            borderRadius: 3,
            p: 3,
            border: 1,
            borderColor: 'grey.200',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #1976d2, #42a5f5, #1976d2)',
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite',
            },
            '@keyframes gradient': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Box textAlign="center">
              <Typography variant="h6" color="text.primary" fontWeight={600} sx={{ mb: 0.5 }}>
                📱 Escaneie o QR Code
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use a câmera do seu celular para pagar
              </Typography>
            </Box>

            <Divider sx={{ width: '100%' }} />

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
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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
          </Stack>
        </Box>

        {/* PIX Code Section */}
        <Box
          sx={{
            backgroundColor: 'grey.50',
            borderRadius: 3,
            p: 3,
            width: '100%',
            maxWidth: 500,
            border: 1,
            borderColor: 'grey.200',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #1976d2, #42a5f5, #1976d2)',
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite',
            },
            '@keyframes gradient': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          <Stack spacing={2}>
            <Box textAlign="center">
              <Typography variant="h6" color="text.primary" fontWeight={600} sx={{ mb: 0.5 }}>
                🔑 Código PIX
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Copie e cole no seu aplicativo bancário
              </Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                p: 2,
                border: 1,
                borderColor: 'grey.300',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="body2"
                color="text.primary"
                sx={{
                  wordBreak: 'break-all',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  lineHeight: 1.4,
                }}
              >
                {pixCode}
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Action Buttons */}
        <Stack spacing={2} alignItems="center" sx={{ width: '100%', maxWidth: 500 }}>
          <Button
            variant="contained"
            startIcon={<ContentCopyIcon />}
            onClick={handleCopyPixCode}
            color="primary"
            fullWidth
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              py: 1.5,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {copied ? '✅ Código copiado!' : '📋 Copiar código PIX'}
          </Button>

          <Box
            textAlign="center"
            sx={{
              p: 2,
              backgroundColor: 'success.50',
              borderRadius: 2,
              border: 1,
              borderColor: 'success.200',
              width: '100%',
            }}
          >
            <Typography variant="body2" color="success.main" fontWeight={500} sx={{ mb: 2 }}>
              💬 Após o pagamento, envie o comprovante para o WhatsApp da igreja
            </Typography>
            <Button
              variant="outlined"
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppClick}
              color="success"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                py: 1.5,
                borderRadius: 2,
                borderColor: 'success.main',
                color: 'success.main',
                '&:hover': {
                  backgroundColor: 'success.50',
                  borderColor: 'success.dark',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Enviar comprovante no WhatsApp
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

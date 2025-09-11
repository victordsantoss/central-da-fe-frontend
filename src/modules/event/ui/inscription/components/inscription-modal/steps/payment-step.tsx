'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Stack,
  Divider,
  Alert,
  Chip,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { Event } from '@/services/domain/event.types';
import { useInscriptionModal } from '../inscription-modal.context';

interface IPaymentStepProps {
  eventData: Event.IGetEventResponse;
}

export function PaymentStep({ eventData }: IPaymentStepProps) {
  const { userData, setPaymentData } = useInscriptionModal();
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit_card' | 'debit_card'>('pix');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const method = event.target.value as 'pix' | 'credit_card' | 'debit_card';
    setPaymentMethod(method);
    setPaymentData({
      method,
      ...(method !== 'pix' ? cardData : {}),
    });
  };

  const handleCardDataChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newCardData = { ...cardData, [field]: value };
    setCardData(newCardData);
    setPaymentData({
      method: paymentMethod,
      ...newCardData,
    });
  };

  const isEventFree = !eventData.price || eventData.price <= 0;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Pagamento
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {isEventFree
          ? 'Este evento é gratuito. Confirme os dados para finalizar a inscrição.'
          : 'Escolha a forma de pagamento para finalizar sua inscrição.'}
      </Typography>

      <Stack spacing={3}>
        {/* Resumo do Valor */}
        <Card sx={{ border: '2px solid', borderColor: 'primary.main' }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Valor da Inscrição</Typography>
              <Typography variant="h4" color="primary.main" fontWeight={600}>
                {isEventFree ? 'Gratuito' : `R$ ${eventData.price?.toFixed(2)}`}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Métodos de Pagamento */}
        {!isEventFree && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Forma de Pagamento
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
                  <FormControlLabel
                    value="pix"
                    control={<Radio />}
                    label={
                      <Box display="flex" alignItems="center" gap={2}>
                        <QrCodeIcon color="primary" />
                        <Box>
                          <Typography variant="body1" fontWeight={500}>
                            PIX
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Aprovação instantânea
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />

                  <FormControlLabel
                    value="credit_card"
                    control={<Radio />}
                    label={
                      <Box display="flex" alignItems="center" gap={2}>
                        <CreditCardIcon color="primary" />
                        <Box>
                          <Typography variant="body1" fontWeight={500}>
                            Cartão de Crédito
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Parcelamento em até 12x
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />

                  <FormControlLabel
                    value="debit_card"
                    control={<Radio />}
                    label={
                      <Box display="flex" alignItems="center" gap={2}>
                        <AccountBalanceWalletIcon color="primary" />
                        <Box>
                          <Typography variant="body1" fontWeight={500}>
                            Cartão de Débito
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Débito automático
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        )}

        {/* Dados do Cartão */}
        {!isEventFree && paymentMethod !== 'pix' && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dados do Cartão
              </Typography>

              <Stack spacing={2}>
                <TextField
                  label="Número do Cartão"
                  value={cardData.cardNumber}
                  onChange={handleCardDataChange('cardNumber')}
                  placeholder="0000 0000 0000 0000"
                  fullWidth
                  inputProps={{ maxLength: 19 }}
                />

                <TextField
                  label="Nome no Cartão"
                  value={cardData.cardName}
                  onChange={handleCardDataChange('cardName')}
                  placeholder="Nome como está no cartão"
                  fullWidth
                />

                <Box display="flex" gap={2}>
                  <TextField
                    label="Validade"
                    value={cardData.cardExpiry}
                    onChange={handleCardDataChange('cardExpiry')}
                    placeholder="MM/AA"
                    inputProps={{ maxLength: 5 }}
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    label="CVV"
                    value={cardData.cardCvv}
                    onChange={handleCardDataChange('cardCvv')}
                    placeholder="000"
                    inputProps={{ maxLength: 3 }}
                    sx={{ flex: 1 }}
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )}

        {/* PIX QR Code */}
        {!isEventFree && paymentMethod === 'pix' && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pagamento via PIX
              </Typography>

              <Box textAlign="center" py={2}>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    border: '2px dashed',
                    borderColor: 'primary.main',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <QrCodeIcon sx={{ fontSize: 80, color: 'primary.main' }} />
                </Box>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Escaneie o QR Code com seu app de pagamento
                </Typography>

                <Chip
                  label="Chave PIX: evento@centraldafe.com.br"
                  color="primary"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Dados do Usuário */}
        {userData && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dados para Faturamento
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Stack spacing={1}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Nome Completo
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {userData.name}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    CPF
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {userData.cpf}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    E-mail
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {userData.email}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        )}

        {/* Aviso de Segurança */}
        <Alert severity="info">
          <Typography variant="body2">
            <strong>Seus dados estão seguros:</strong> Utilizamos criptografia de ponta a ponta para
            proteger suas informações de pagamento. Não armazenamos dados do cartão.
          </Typography>
        </Alert>
      </Stack>
    </Box>
  );
}

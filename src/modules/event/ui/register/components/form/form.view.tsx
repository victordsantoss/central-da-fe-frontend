'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Tooltip,
  Typography,
  MenuItem,
  FormControlLabel,
  Stack,
  IconButton,
  Switch,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { RegisterEventFormValues } from './form.schema';
import { EventCategory } from '@/common/enums/event.enum';
import { formStyles } from '@/common/utils/styles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useRouter } from 'next/navigation';
import { Church } from '@/services/domain/church.types';

interface IRegisterEventFormProps {
  onSubmit: (values: RegisterEventFormValues) => void;
  isPending: boolean;
  methods: UseFormReturn<RegisterEventFormValues>;
  churchesData: Church.IListChurchesResponse;
}

const RegisterEventFormView: React.FC<IRegisterEventFormProps> = ({
  onSubmit,
  isPending,
  methods,
  churchesData,
}) => {
  const { push } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (methods.watch('isPaid') && !methods.watch('price')) {
      methods.setError('price', {
        message: 'O preço é obrigatório para eventos pagos',
        type: 'manual',
      });
      return;
    }
    methods.handleSubmit(onSubmit)(e);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={formStyles.container}>
      <FormProvider {...methods}>
        <Box sx={formStyles.formContainer}>
          <Stack spacing={{ xs: 2, md: 3 }} width="100%">
            <Card>
              <CardContent>
                <Typography variant="h6" mb={{ xs: 2, md: 3 }} sx={{ ...formStyles.title, textAlign: 'left' }}>
                  Dados Básicos
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  <Controller
                    name="name"
                    control={methods.control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label="Nome do Evento *"
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="description"
                    control={methods.control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label="Descrição *"
                        fullWidth
                        multiline
                        rows={4}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
                    <Controller
                      name="category"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          select
                          label="Categoria *"
                          fullWidth
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        >
                          {Object.values(EventCategory).map(category => (
                            <MenuItem key={category} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                    <Controller
                      name="churchId"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          select
                          label="Igreja *"
                          fullWidth
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        >
                          {churchesData.data.map(church => (
                            <MenuItem key={church.id} value={church.id}>
                              {church.name}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" mb={3} sx={{ ...formStyles.title, textAlign: 'left' }}>
                  Detalhes Financeiros
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  <Stack spacing={{ xs: 2, md: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Controller
                        name="isPaid"
                        control={methods.control}
                        render={({ field }) => (
                          <FormControlLabel
                            control={<Switch checked={field.value} onChange={field.onChange} />}
                            label="Evento Pago?"
                          />
                        )}
                      />
                      <Tooltip title="Eventos pagos requerem preço." placement="right">
                        <IconButton size="small" color="primary">
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    {methods.watch('isPaid') && (
                      <Stack spacing={{ xs: 2, md: 3 }}>
                        <Controller
                          name="price"
                          control={methods.control}
                          render={({ field, fieldState }) => (
                            <TextField
                              {...field}
                              type="number"
                              label="Preço do Ingresso *"
                              fullWidth
                              error={!!fieldState.error}
                              onChange={e => {
                                const value = e.target.value ? Number(e.target.value) : undefined;
                                field.onChange(value);
                              }}
                              helperText={fieldState.error?.message}
                              slotProps={{
                                input: {
                                  startAdornment: 'R$  ',
                                },
                              }}
                            />
                          )}
                        />
                      </Stack>
                    )}
                    <Controller
                      name="availableTickets"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          type="number"
                          label="Quantidade de vagas Disponíveis *"
                          fullWidth
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                          onChange={e => {
                            const value = e.target.value ? Number(e.target.value) : undefined;
                            field.onChange(value);
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card>
              <CardContent>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  <Typography variant="h6" mb={3} sx={{ ...formStyles.title, textAlign: 'left' }}>
                    Horários e Localização
                  </Typography>
                  <Stack spacing={{ xs: 2, md: 3 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
                      <Controller
                        name="startDate"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <DateTimePicker
                            {...field}
                            label="Data de Início *"
                            format="DD/MM/YYYY HH:mm"
                            ampm={false}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                error: !!fieldState.error,
                                helperText: fieldState.error?.message,
                              },
                            }}
                          />
                        )}
                      />
                      <Controller
                        name="endDate"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <DateTimePicker
                            {...field}
                            label="Data de Término"
                            format="DD/MM/YYYY HH:mm"
                            ampm={false}
                            minDateTime={methods.watch('startDate')}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                error: !!fieldState.error,
                                helperText: fieldState.error?.message,
                              },
                            }}
                          />
                        )}
                      />
                    </Stack>
                  </Stack>
                  <Stack spacing={{ xs: 2, md: 3 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
                      <Box flex={2}>
                        <Controller
                          name="address.street"
                          control={methods.control}
                          render={({ field, fieldState }) => (
                            <TextField
                              {...field}
                              label="Rua *"
                              fullWidth
                              error={!!fieldState.error}
                              helperText={fieldState.error?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box flex={1}>
                        <Controller
                          name="address.number"
                          control={methods.control}
                          render={({ field, fieldState }) => (
                            <TextField
                              {...field}
                              label="Número *"
                              fullWidth
                              error={!!fieldState.error}
                              helperText={fieldState.error?.message}
                            />
                          )}
                        />
                      </Box>
                    </Stack>
                    <Controller
                      name="address.complement"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          label="Complemento"
                          fullWidth
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
                      <Controller
                        name="address.neighborhood"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <TextField
                            {...field}
                            label="Bairro *"
                            fullWidth
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                          />
                        )}
                      />
                      <Controller
                        name="address.city"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <TextField
                            {...field}
                            label="Cidade *"
                            fullWidth
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                          />
                        )}
                      />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
                      <Controller
                        name="address.state"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <TextField
                            {...field}
                            label="Estado *"
                            fullWidth
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                          />
                        )}
                      />
                      <Controller
                        name="address.zipCode"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <TextField
                            {...field}
                            label="CEP *"
                            fullWidth
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                          />
                        )}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }} justifyContent="space-between">
              <Button type="button" variant="outlined" onClick={() => push('/event/dashboard')}>
                Voltar
              </Button>

              <Tooltip title="Cadastrar Evento" placement="top" sx={{ width: '100%' }}>
                <span >
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isPending}
                    sx={{ ml: 'auto', width: { xs: '100%', sm: 'auto' } }}
                  >
                    {isPending ? <CircularProgress size={20} /> : 'Cadastrar Evento'}
                  </Button>
                </span>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default RegisterEventFormView;

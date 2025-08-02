'use client';

import React from 'react';
import { Box, Button, TextField, Tooltip, CircularProgress } from '@mui/material';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { RegistrationSuppluerFormValues } from './form.schema';
import { formStyles } from '@/common/utils/styles';
import InfoIcon from '@mui/icons-material/Info';
import { formatCnpj } from '@/common/utils/document';

interface RegistrationSupplierFormViewProps {
  closeCreateSupplierModal: () => void;
  onSubmit: (values: RegistrationSuppluerFormValues) => void;
  isPending: boolean;
  methods: UseFormReturn<RegistrationSuppluerFormValues>;
}

const RegistrationSupplierFormView: React.FC<RegistrationSupplierFormViewProps> = ({
  closeCreateSupplierModal,
  onSubmit,
  isPending,
  methods,
}) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = methods;

  const registerDisabled = isPending || isSubmitting || !isValid;

  const handleFormSubmit = async (values: RegistrationSuppluerFormValues) => {
    onSubmit(values);
    closeCreateSupplierModal();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={formStyles.container}
      noValidate
    >
      <FormProvider {...methods}>
        <Box sx={formStyles.formContainer}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome *"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="cnpj"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="CNPJ *"
                placeholder="00.000.000/0000-00"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                onChange={e => {
                  const formatted = formatCnpj(e.target.value);
                  field.onChange(formatted);
                }}
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email *"
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
                <TextField
                  {...field}
                  label="Telefone *"
                  placeholder="(00) 00000-0000 / (00) 0000-0000"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  variant="outlined"
                  onBlur={e => field.onChange(e.target.value.trim())}
                />
                <Tooltip title="Insira quantos números desejar, separados por ‘/’">
                  <InfoIcon color="action" />
                </Tooltip>
              </Box>
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Endereço *"
                fullWidth
                error={!!errors.address}
                helperText={errors.address?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
        </Box>
      </FormProvider>

      <Box sx={formStyles.buttonContainer}>
        <Tooltip
          title={registerDisabled && 'Por favor, preencha todos os campos obrigatórios'}
          arrow
        >
          <span style={{ width: '100%' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={registerDisabled}
            >
              {isPending ? <CircularProgress size={20} /> : 'Registrar'}
            </Button>
          </span>
        </Tooltip>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={closeCreateSupplierModal}
          disabled={isPending}
        >
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationSupplierFormView;

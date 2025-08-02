'use client';

import React from 'react';
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  Chip,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { RegistrationProductFormValues } from './form.schema';
import { formStyles } from '@/common/utils/styles';

import { CategoryModel } from '@/common/models/category.model';

interface RegistrationProductFormViewProps {
  closeCreateProductModal: () => void;
  onSubmit: (values: RegistrationProductFormValues) => void;
  isPending: boolean;
  methods: UseFormReturn<RegistrationProductFormValues>;
  categories: CategoryModel[];
  isLoadingCategories: boolean;
}

const RegistrationProductFormView: React.FC<RegistrationProductFormViewProps> = ({
  closeCreateProductModal,
  onSubmit,
  isPending,
  methods,
  categories,
  isLoadingCategories,
}) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = methods;

  const registerDisabled = isPending || isSubmitting || !isValid;

  const handleFormSubmit = async (values: RegistrationProductFormValues) => {
    onSubmit(values);
    closeCreateProductModal();
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
                label="Nome do Produto *"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Código do Produto *"
                placeholder="Ex: BFC500"
                fullWidth
                error={!!errors.code}
                helperText={errors.code?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Descrição"
                placeholder="Descrição detalhada do produto"
                fullWidth
                multiline
                rows={3}
                error={!!errors.description}
                helperText={errors.description?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Box>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  options={categories}
                  getOptionLabel={option => option.name}
                  value={categories.filter(cat => field.value?.includes(String(cat.id)))}
                  onChange={(_, newValue) => {
                    field.onChange(newValue.map(cat => String(cat.id)));
                  }}
                  loading={isLoadingCategories}
                  fullWidth
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Categorias"
                      placeholder="Selecione as categorias"
                      fullWidth
                      error={!!errors.categories}
                      helperText={errors.categories?.message}
                      variant="outlined"
                      sx={{
                        '& .MuiInputBase-input': { color: 'primary.main' },
                        '& .MuiSvgIcon-root': { color: 'primary.main' },
                      }}
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option.name}
                        {...getTagProps({ index })}
                        key={option.id}
                        color="primary"
                        variant="outlined"
                        sx={{
                          '& .MuiChip-label': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    ))
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                      key={option.id}
                      sx={{
                        backgroundColor: 'white',
                        color: 'primary.main',
                      }}
                    >
                      {option.name}
                    </Box>
                  )}
                  sx={{
                    width: '100%',
                    '& .MuiAutocomplete-tag': {
                      backgroundColor: 'background.paper',
                      color: 'primary.main',
                    },
                  }}
                />
              )}
            />
          </Box>
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
          onClick={closeCreateProductModal}
          disabled={isPending}
        >
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationProductFormView;

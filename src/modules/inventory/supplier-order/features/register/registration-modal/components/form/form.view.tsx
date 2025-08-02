import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Card,
  CardContent,
  CircularProgress,
  Autocomplete,
  Tooltip,
} from '@mui/material';
import { Controller, FormProvider, useFieldArray, UseFormReturn } from 'react-hook-form';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { SupplierOrderFormValues } from './form.schema';
import { ProductModel } from '@/common/models/product.model';
import { SupplierModel } from '@/common/models/supplier.model';
import { formStyles } from '@/common/utils/styles';

interface RegistrationSupplierOrderFormViewProps {
  onSubmit: (values: SupplierOrderFormValues) => void;
  isPending: boolean;
  methods: UseFormReturn<SupplierOrderFormValues>;
  products: ProductModel[];
  isLoadingProducts: boolean;
  suppliers: SupplierModel[];
  isLoadingSuppliers: boolean;
  closeCreateSupplierOrderModal: () => void;
}

const RegistrationSupplierOrderFormView: React.FC<RegistrationSupplierOrderFormViewProps> = ({
  onSubmit,
  isPending,
  methods,
  products,
  isLoadingProducts,
  suppliers,
  isLoadingSuppliers,
  closeCreateSupplierOrderModal,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const handleAddProduct = () => {
    append({
      productId: '',
      quantity: 1,
      unitPrice: 0,
    });
  };

  const handleRemoveProduct = (index: number) => {
    remove(index);
  };

  const registerDisabled = isPending || isSubmitting || !isValid;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={formStyles.container} noValidate>
      <FormProvider {...methods}>
        <Box sx={formStyles.formContainer}>
          <Controller
            name="supplierId"
            control={control}
            render={({ field }) => (
              <Autocomplete
                options={suppliers}
                getOptionLabel={option => option.name}
                value={suppliers.find(supplier => supplier.id === field.value) || null}
                onChange={(_, newValue) => {
                  field.onChange(newValue?.id ?? '');
                }}
                loading={isLoadingSuppliers}
                fullWidth
                renderOption={(props, option) => (
                  <li {...props} key={option.id}>
                    <Typography color="primary">{option.name}</Typography>
                  </li>
                )}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Fornecedor*"
                    error={!!errors.supplierId}
                    helperText={errors.supplierId?.message}
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiInputBase-input': { color: 'primary.main' },
                      '& .MuiSvgIcon-root': { color: 'primary.main' },
                    }}
                  />
                )}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            )}
          />
        </Box>

        <Box sx={formStyles.formContainer}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Descrição do Pedido*"
                multiline
                rows={3}
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
        </Box>
        <Box sx={formStyles.formContainer}>
          <Controller
            name="expectedDeliveryDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Data de Entrega Esperada*"
                type="date"
                variant="outlined"
                slotProps={{
                  inputLabel: { shrink: true },
                }}
                error={!!errors.expectedDeliveryDate}
                helperText={errors.expectedDeliveryDate?.message}
              />
            )}
          />
        </Box>

        <Box sx={formStyles.formContainer}>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
          >
            <Button
              startIcon={<AddIcon />}
              onClick={handleAddProduct}
              variant="contained"
              size="small"
            >
              Adicionar Produto
            </Button>
          </Box>

          {fields.map((field, index) => (
            <Card key={field.id} sx={{ mb: 2 }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                    width: '100%',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ width: '100%' }}>
                    <Controller
                      name={`products.${index}.productId`}
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                          options={products}
                          getOptionLabel={option => `${option.name} (${option.code})`}
                          value={products.find(product => product.id === field.value) || null}
                          onChange={(_, newValue) => {
                            field.onChange(newValue?.id ?? '');
                          }}
                          loading={isLoadingProducts}
                          fullWidth
                          renderOption={(props, option) => (
                            <li {...props} key={option.id}>
                              <Typography color="primary">{option.name}</Typography>
                            </li>
                          )}
                          renderInput={params => (
                            <TextField
                              {...params}
                              label="Produto*"
                              error={!!errors.products?.[index]?.productId}
                              helperText={errors.products?.[index]?.productId?.message}
                              fullWidth
                              variant="outlined"
                              sx={{
                                '& .MuiInputBase-input': { color: 'primary.main' },
                                '& .MuiSvgIcon-root': { color: 'primary.main' },
                                width: '100%',
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) => option.id === value.id}
                        />
                      )}
                    />
                  </Box>

                  <Box sx={{ width: '100%' }}>
                    <Controller
                      name={`products.${index}.quantity`}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Quantidade*"
                          type="number"
                          variant="outlined"
                          error={!!errors.products?.[index]?.quantity}
                          helperText={errors.products?.[index]?.quantity?.message}
                          onChange={e => field.onChange(Number(e.target.value))}
                        />
                      )}
                    />
                  </Box>

                  <Box sx={{ width: '100%' }}>
                    <Controller
                      name={`products.${index}.unitPrice`}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Preço Unitário*"
                          type="number"
                          variant="outlined"
                          error={!!errors.products?.[index]?.unitPrice}
                          helperText={errors.products?.[index]?.unitPrice?.message}
                          onChange={e => field.onChange(Number(e.target.value))}
                        />
                      )}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', pt: 1 }}>
                    <IconButton
                      onClick={() => handleRemoveProduct(index)}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}

          {errors.products && (
            <Typography color="error" variant="caption" sx={{ mt: 1 }}>
              {errors.products.message}
            </Typography>
          )}
        </Box>

        <Box sx={formStyles.buttonContainer}>
          <Tooltip
            title={registerDisabled && 'Por favor, preencha todos os campos obrigatórios'}
            arrow
          >
            <span style={{ width: '100%' }}>
              <Button type="submit" variant="contained" fullWidth disabled={registerDisabled}>
                {isPending ? <CircularProgress size={20} /> : 'Registrar'}
              </Button>
            </span>
          </Tooltip>
          <Button variant="outlined" fullWidth onClick={closeCreateSupplierOrderModal}>
            Cancelar
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default RegistrationSupplierOrderFormView;

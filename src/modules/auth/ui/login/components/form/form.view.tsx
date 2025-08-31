'use client';

import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { LoginFormValues } from './form.schema';
import { formStyles } from '@/common/utils/styles';

interface ILoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  isPending: boolean;
  methods: UseFormReturn<LoginFormValues>;
  showPassword: boolean;
  handleTogglePasswordVisibility: () => void;
  onForgotPassword?: () => void;
}

const LoginFormView: React.FC<ILoginFormProps> = ({
  onSubmit,
  isPending,
  methods,
  showPassword,
  handleTogglePasswordVisibility,
  onForgotPassword,
}) => {
  return (
    <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={formStyles.container}>
      <FormProvider {...methods}>
        <Box sx={formStyles.formContainer}>
          <Controller
            name="email"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Email *"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="password"
            control={methods.control}
            render={({ field, fieldState }) => (
              <Box sx={{ position: 'relative' }}>
                <TextField
                  {...field}
                  label="Senha *"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                            sx={{ color: 'text.primary' }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
            )}
          />

          {onForgotPassword && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                component="span"
                variant="body2"
                onClick={onForgotPassword}
                sx={{
                  color: 'text.primary',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  '&:hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                Esqueci minha senha
              </Typography>
            </Box>
          )}

          <Controller
            name="rememberMe"
            control={methods.control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onChange={e => field.onChange(e.target.checked)}
                    sx={{
                      color: 'text.primary',
                      '&.Mui-checked': {
                        color: 'text.primary',
                      },
                    }}
                  />
                }
                label="Lembrar login"
              />
            )}
          />
        </Box>
        <Box sx={formStyles.buttonContainer}>
          <Tooltip
            title={`${!methods.formState.isValid ? 'Preencha todos os campos para continuar.' : 'Entrar'}`}
            placement="top"
          >
            <span style={{ width: '100%' }}>
              <Button type="submit" variant="contained" fullWidth color="secondary">
                {isPending ? <CircularProgress size={20} /> : 'Entrar'}
              </Button>
            </span>
          </Tooltip>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default LoginFormView;

import { ComponentsOverrides, Theme, alpha } from '@mui/material';
import defaultTheme from '../default-theme';

interface MyButtonOverrides {
  MuiButton: {
    styleOverrides: ComponentsOverrides<Theme>['MuiButton'];
  };
}

export const ButtonStyles: MyButtonOverrides = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        fontWeight: 600,
        padding: '8px 16px',
        minWidth: '160px ',

        // Estados desabilitados
        '&.Mui-disabled': {
          cursor: 'not-allowed', // Cursor indicando que não pode clicar
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: alpha(defaultTheme.palette.text.primary, 0.3), // text.primary mais claro
              color: alpha(defaultTheme.palette.primary.main, 0.5), // texto mais claro
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              backgroundColor: alpha(defaultTheme.palette.text.secondary, 0.3), // text.secondary mais claro
              color: alpha(defaultTheme.palette.secondary.contrastText, 0.5), // texto mais claro
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              borderColor: alpha(defaultTheme.palette.text.primary, 0.3), // borda mais clara
              color: alpha(defaultTheme.palette.text.primary, 0.3), // texto mais claro
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              borderColor: alpha(defaultTheme.palette.text.secondary, 0.3), // borda mais clara
              color: alpha(defaultTheme.palette.text.secondary, 0.3), // texto mais claro
            }),
        },

        ...(ownerState.variant === 'contained' &&
          ownerState.color === 'primary' && {
            backgroundColor: defaultTheme.palette.text.primary,
            color: defaultTheme.palette.primary.main,
            '&:hover': {
              backgroundColor: alpha(defaultTheme.palette.text.primary, 0.8), // text.primary escurecido
            },
          }),

        ...(ownerState.variant === 'contained' &&
          ownerState.color === 'secondary' && {
            backgroundColor: defaultTheme.palette.text.secondary,
            color: defaultTheme.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: alpha(defaultTheme.palette.text.secondary, 0.8), // text.secondary escurecido
            },
          }),

        ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'primary' && {
            borderColor: defaultTheme.palette.text.primary,
            color: defaultTheme.palette.text.primary,
            '&:hover': {
              borderColor: alpha(defaultTheme.palette.text.primary, 0.8), // text.primary escurecido
              backgroundColor: 'transparent',
              color: alpha(defaultTheme.palette.text.primary, 0.8), // text.primary escurecido
            },
          }),

        ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'secondary' && {
            borderColor: defaultTheme.palette.text.secondary,
            color: defaultTheme.palette.text.secondary,
            '&:hover': {
              borderColor: alpha(defaultTheme.palette.text.secondary, 0.8), // text.secondary escurecido
              backgroundColor: 'transparent',
              color: alpha(defaultTheme.palette.text.secondary, 0.8), // text.secondary escurecido
            },
          }),
      }),
    },
  },
};

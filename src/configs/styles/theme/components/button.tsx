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

        '&.Mui-disabled': {
          cursor: 'not-allowed',
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: alpha(defaultTheme.palette.primary.main, 0.3),
              color: alpha(defaultTheme.palette.primary.contrastText, 0.5),
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.3),
              color: alpha(defaultTheme.palette.secondary.contrastText, 0.5),
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              backgroundColor: alpha(defaultTheme.palette.primary.main, 0.3),
              borderColor: alpha(defaultTheme.palette.line.primary, 0.5),
              color: alpha(defaultTheme.palette.primary.contrastText, 0.5),
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.3),
              borderColor: alpha(defaultTheme.palette.line.secondary, 0.5),
              color: alpha(defaultTheme.palette.secondary.contrastText, 0.5),
            }),
        },

        ...(ownerState.variant === 'contained' &&
          ownerState.color === 'primary' && {
            backgroundColor: defaultTheme.palette.primary.main,
            color: defaultTheme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: defaultTheme.palette.primary.dark,
            },
          }),

        ...(ownerState.variant === 'contained' &&
          ownerState.color === 'secondary' && {
            backgroundColor: defaultTheme.palette.secondary.main,
            color: defaultTheme.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: defaultTheme.palette.secondary.dark,
            },
          }),

        ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'primary' && {
            borderColor: defaultTheme.palette.primary.main,
            color: defaultTheme.palette.primary.main,
            '&:hover': {
              backgroundColor: defaultTheme.palette.primary.main,
              color: defaultTheme.palette.primary.contrastText,
            },
          }),

        ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'secondary' && {
            borderColor: defaultTheme.palette.secondary.main,
            color: defaultTheme.palette.secondary.contrastText,
            '&:hover': {
              borderColor: defaultTheme.palette.line.secondary,
              backgroundColor: 'transparent',
              color: defaultTheme.palette.secondary.dark,
            },
          }),
      }),
    },
  },
};

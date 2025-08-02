import { ComponentsOverrides, Theme } from '@mui/material';

interface TextFieldOverrides {
  MuiInputBase: {
    styleOverrides: ComponentsOverrides<Theme>['MuiInputBase'];
  };
  MuiFilledInput: {
    styleOverrides: ComponentsOverrides<Theme>['MuiFilledInput'];
  };
  MuiOutlinedInput: {
    styleOverrides: ComponentsOverrides<Theme>['MuiOutlinedInput'];
  };
  MuiInputLabel: {
    styleOverrides: ComponentsOverrides<Theme>['MuiInputLabel'];
  };
}

export const TextFieldStyles: TextFieldOverrides = {
  MuiInputBase: {
    styleOverrides: {
      input: {
        color: 'black !important', // Texto digitado sempre preto
        '&::placeholder': {
          color: 'rgba(0, 0, 0, 0.6) !important', // Placeholder preto com 60% transparência
          opacity: '1 !important',
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      input: {
        color: 'black !important', // Garante que o texto no filled input seja preto
        '&::placeholder': {
          color: 'rgba(0, 0, 0, 0.6) !important', // Placeholder específico para filled
          opacity: '1 !important',
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        color: 'black !important', // Garante que o texto no outlined input seja preto
        '&::placeholder': {
          color: 'rgba(0, 0, 0, 0.6) !important', // Placeholder específico para outlined
          opacity: '1 !important',
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: 'rgba(0, 0, 0, 0.7)', // Label em estado normal
        '&.Mui-focused': {
          color: 'black', // Label quando focado
        },
        '&.MuiFormLabel-filled': {
          color: 'black', // Label quando preenchido
        },
      },
    },
  },
};

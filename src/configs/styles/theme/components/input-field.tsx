import { ComponentsOverrides, Theme, alpha } from '@mui/material';

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
      input: ({ theme }) => ({
        color: 'text.primary !important', // Texto digitado sempre text.primary
        '&::placeholder': {
          color: `${alpha(theme.palette.text.primary, 0.6)} !important`, // Placeholder text.primary com 60% transparência
          opacity: '1 !important',
        },
      }),
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: 'text.primary',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderBottomColor: `${theme.palette.auxiliaryColors.line} !important`, // Borda inferior auxiliaryColors.line quando focado
        },
        '&:after': {
          borderBottomColor: `${theme.palette.auxiliaryColors.line} !important`, // Linha de foco auxiliaryColors.line
        },
      }),
      input: ({ theme }) => ({
        color: 'text.primary !important', // Garante que o texto no filled input seja text.primary
        '&::placeholder': {
          color: `${alpha(theme.palette.text.primary, 0.6)} !important`, // Placeholder text.primary com 60% transparência
          opacity: '1 !important',
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: `${theme.palette.auxiliaryColors.line} !important`, // Borda sempre auxiliaryColors.line
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: `${theme.palette.auxiliaryColors.line} !important`, // Borda auxiliaryColors.line quando focado
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: `${theme.palette.auxiliaryColors.line} !important`, // Borda auxiliaryColors.line no hover
        },
      }),
      input: ({ theme }) => ({
        color: 'text.primary !important', // Garante que o texto no outlined input seja text.primary
        '&::placeholder': {
          color: `${alpha(theme.palette.text.primary, 0.6)} !important`, // Placeholder text.primary com 60% transparência
          opacity: '1 !important',
        },
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: `${theme.palette.text.primary} !important`, // Label sempre text.primary
        '&.Mui-focused': {
          color: `${theme.palette.text.primary} !important`, // Label quando focado
        },
        '&.MuiFormLabel-filled': {
          color: `${theme.palette.text.primary} !important`, // Label quando preenchido
        },
        '&.Mui-error': {
          color: `${theme.palette.text.primary} !important`, // Label em estado de erro
        },
        '&.Mui-disabled': {
          color: `${theme.palette.text.primary} !important`, // Label quando desabilitado
        },
        '&.MuiInputLabel-shrink': {
          color: `${theme.palette.text.primary} !important`, // Label quando encolhido (ao clicar)
        },
        '&.MuiInputLabel-outlined': {
          color: `${theme.palette.text.primary} !important`, // Label para outlined input
        },
        '&.MuiInputLabel-filled': {
          color: `${theme.palette.text.primary} !important`, // Label para filled input
        },
        '&.MuiInputLabel-standard': {
          color: `${theme.palette.text.primary} !important`, // Label para standard input
        },
      }),
    },
  },
};

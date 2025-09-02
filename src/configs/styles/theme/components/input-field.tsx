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
  MuiAutocomplete: {
    styleOverrides: ComponentsOverrides<Theme>['MuiAutocomplete'];
  };
  MuiSwitch: {
    styleOverrides: ComponentsOverrides<Theme>['MuiSwitch'];
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
  MuiAutocomplete: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiAutocomplete-popupIndicator': {
          color: `${theme.palette.text.primary} !important`, // Seta do dropdown sempre text.primary
        },
        '& .MuiAutocomplete-clearIndicator': {
          color: `${theme.palette.text.primary} !important`, // Ícone de limpar sempre text.primary
        },
      }),
      option: ({ theme }) => ({
        color: `${theme.palette.primary.main} !important`, // Texto das opções sempre primary.main
        '&:hover': {
          backgroundColor: `${alpha(theme.palette.primary.main, 0.1)} !important`, // Background hover com primary.main transparente
        },
        '&.Mui-focused': {
          backgroundColor: `${alpha(theme.palette.primary.main, 0.1)} !important`, // Background quando focado
        },
        '&[aria-selected="true"]': {
          backgroundColor: `${alpha(theme.palette.primary.main, 0.2)} !important`, // Background quando selecionado
          color: `${theme.palette.primary.main} !important`,
        },
      }),
      paper: ({ theme }) => ({
        backgroundColor: `${theme.palette.background.paper} !important`, // Background do dropdown
        boxShadow: theme.shadows[8], // Sombra do dropdown
      }),
      listbox: ({ theme }) => ({
        padding: 0, // Remove padding padrão
        '& .MuiAutocomplete-option': {
          minHeight: 48, // Altura mínima das opções
          padding: theme.spacing(1, 2), // Padding interno das opções
        },
      }),
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiSwitch-switchBase': {
          color: `${theme.palette.text.primary} !important`, // Thumb inativo
          '&.Mui-checked': {
            color: `${theme.palette.text.secondary} !important`, // Thumb ativo
            '& + .MuiSwitch-track': {
              backgroundColor: `${alpha(theme.palette.text.secondary, 0.5)} !important`, // Track ativo
            },
          },
          '&:hover': {
            backgroundColor: `${alpha(theme.palette.text.primary, 0.04)} !important`, // Background hover inativo
          },
          '&.Mui-checked:hover': {
            backgroundColor: `${alpha(theme.palette.text.secondary, 0.04)} !important`, // Background hover ativo
          },
          '&.Mui-disabled': {
            color: `${alpha(theme.palette.text.primary, 0.3)} !important`, // Thumb desabilitado
            '& + .MuiSwitch-track': {
              backgroundColor: `${alpha(theme.palette.text.primary, 0.12)} !important`, // Track desabilitado
            },
          },
        },
        '& .MuiSwitch-track': {
          backgroundColor: `${alpha(theme.palette.text.primary, 0.3)} !important`, // Track inativo
        },
      }),
    },
  },
};

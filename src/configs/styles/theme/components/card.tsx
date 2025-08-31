import { ComponentsOverrides, Theme } from '@mui/material';
import defaultTheme from '../default-theme';

interface MyCardOverrides {
  MuiCard: {
    styleOverrides: ComponentsOverrides<Theme>['MuiCard'];
  };
}

export const CardStyles: MyCardOverrides = {
  MuiCard: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        backgroundColor: defaultTheme.palette.secondary.main,
        border: `1px solid ${defaultTheme.palette.auxiliaryColors.line}`,
        transition: 'all 0.2s ease-in-out',
        color: defaultTheme.palette.text.primary,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: ownerState.variant === 'elevation' ? defaultTheme.shadows[8] : 'none',
        },
      }),
    },
  },
};

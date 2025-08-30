'use client';
import { createTheme } from '@mui/material/styles';
import { ButtonStyles } from './components/button';
import { TypographyStyles } from './components/typography';
import { TextFieldStyles } from './components/input-field';
import { TooltipStyles } from './components/tooltip';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#464044',
      contrastText: '#EAEAEA',
    },
    secondary: {
      main: '#EAEAEA',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#00003F',
      secondary: '#EAEAEA',
    },
    background: {
      default: '#EAEAEA',
      paper: '#FFFFFF',
    },
    auxiliaryColors: {
      blue: '#010466B',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    ...TextFieldStyles,
    ...ButtonStyles,
    ...TypographyStyles,
    ...TooltipStyles,
  },
});

export default defaultTheme;

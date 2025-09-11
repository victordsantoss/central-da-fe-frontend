'use client';
import { createTheme } from '@mui/material/styles';
import { ButtonStyles } from './components/button';
import { TypographyStyles } from './components/typography';
import { TextFieldStyles } from './components/input-field';
import { TooltipStyles } from './components/tooltip';
import { CardStyles } from './components/card';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#D9DAE1',
      main: '#2D82B7',
      dark: '#13293D',
      contrastText: '#FAFAFA',
    },
    secondary: {
      light: '#415A77',
      main: '#1B263B',
      dark: '#0D1B2A',
      contrastText: '#FAFAFA',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#1D2433',
      secondary: '#FAFAFA',
    },
    line: {
      primary: '#E6E6E6',
      secondary: '#3E5A80',
    },
    auxiliares: {
      free: '#52a800',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    ...TextFieldStyles,
    ...ButtonStyles,
    ...CardStyles,
    ...TypographyStyles,
    ...TooltipStyles,
  },
});

export default defaultTheme;

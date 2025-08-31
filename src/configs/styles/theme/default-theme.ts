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
      main: '#121212',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#171717',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#fafafa',
      secondary: '#278f60',
    },
    background: {
      default: '#121212',
      paper: '#EAEAEA',
    },
    auxiliaryColors: {
      blue: '#010466B',
      line: '#2d2d2d',
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

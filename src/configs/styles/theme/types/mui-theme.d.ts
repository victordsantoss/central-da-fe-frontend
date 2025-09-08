import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    line: {
      primary: string;
      secondary: string;
    };
    auxiliares: {
      free: string;
    };
  }

  interface PaletteOptions {
    line: {
      primary: string;
      secondary: string;
    };
    auxiliares: {
      free: string;
    };
  }
}

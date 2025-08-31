import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/default-theme';

export const authLayoutStyle: {
  container: SxProps<Theme>;
  main: SxProps<Theme>;
} = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultTheme.palette.background.default,
    minHeight: '100vh',
    height: '100%',
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    paddingTop: { xs: '25px', md: '0px' },
  },
  main: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    paddingBottom: { xs: '200px', md: '80px' },
  },
};

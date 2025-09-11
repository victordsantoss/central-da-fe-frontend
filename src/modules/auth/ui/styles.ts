import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/default-theme';

export const authFormStyles: {
  container: SxProps<Theme>;
  form: Record<'container' | 'action', SxProps<Theme>>;
  divider: Record<'section' | 'icon', SxProps<Theme>>;
} = {
  container: {
    backgroundColor: defaultTheme.palette.background.default,
    padding: { xs: 2, md: 3 },
    borderRadius: 2,
    width: 'auto',
    minWidth: { xs: '95%', md: '400px', lg: '700px' },
    maxWidth: '95%',
    height: 'auto',
    maxHeight: { xs: '70%', md: '80%' },
    display: 'flex',
    justifyContent: 'center',
    gap: { xs: 2, md: 3 },
    border: `0.5px solid ${defaultTheme.palette.primary.light}`,
    color: defaultTheme.palette.text.primary,
    boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.1)',
  },

  form: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 2, md: 3 },
    },
    action: {
      color: defaultTheme.palette.text.primary,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },

  divider: {
    section: {
      [defaultTheme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    icon: {
      color: defaultTheme.palette.line.secondary,
      fontSize: 32,
    },
  },
};

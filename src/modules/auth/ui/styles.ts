import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/default-theme';

export const authFormStyles: {
  container: SxProps<Theme>;
  form: Record<'title' | 'subTitle' | 'container' | 'action', SxProps<Theme>>;
  divider: Record<'section' | 'icon', SxProps<Theme>>;
} = {
  container: {
    backgroundColor: defaultTheme.palette.background.default,
    padding: { xs: 2, md: 4 },
    borderRadius: 2,
    width: 'auto',
    minWidth: { xs: '95%', md: '400px', lg: '600px' },
    maxWidth: '95%',
    height: 'auto',
    maxHeight: { xs: '70%', md: '80%' },
    display: 'flex',
    justifyContent: 'center',
    gap: { xs: 2, md: 4 },
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
  },

  form: {
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: defaultTheme.palette.primary.main,
    },
    subTitle: {
      textAlign: 'center',
      color: defaultTheme.palette.primary.main,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 1, md: 2 },
    },
    action: {
      color: 'primary.main',
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
      color: defaultTheme.palette.primary.main,
      fontSize: 32,
    },
  },
};

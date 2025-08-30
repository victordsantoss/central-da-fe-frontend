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
    minWidth: { xs: '95%', md: '400px', lg: '600px' },
    maxWidth: '95%',
    height: 'auto',
    maxHeight: { xs: '70%', md: '80%' },
    display: 'flex',
    justifyContent: 'center',
    gap: { xs: 2, md: 3 },
    border: `1px solid ${defaultTheme.palette.secondary.main}`,
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
      color: defaultTheme.palette.primary.main,
      fontSize: 32,
    },
  },
};

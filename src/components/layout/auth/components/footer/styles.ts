import { SxProps, Theme } from '@mui/material';

export const footerStyles: {
  container: SxProps<Theme>;
  content: SxProps<Theme>;
  text: SxProps<Theme>;
  contactContainer: SxProps<Theme>;
  contactLink: SxProps<Theme>;
  contactText: SxProps<Theme>;
  icon: SxProps<Theme>;
} = {
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { xs: 2, md: 3 },
    gap: { xs: 1, md: 0 },
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    color: 'white',
    textAlign: { xs: 'center', md: 'left' },
    fontSize: { xs: '0.75rem', md: '0.875rem' },
  },
  contactContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 1, sm: 3 },
    alignItems: 'center',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    color: 'white',
    transition: 'all 0.3s ease',
    padding: 1,
    borderRadius: 1,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-1px)',
    },
  },
  contactText: {
    color: 'white',
    fontSize: { xs: '0.75rem', md: '0.875rem' },
  },
  icon: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    color: 'white',
  },
};

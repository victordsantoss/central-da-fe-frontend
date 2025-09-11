import { SxProps, Theme } from '@mui/material';
import defaultTheme from '@/configs/styles/theme/default-theme';

export const footerStyles: {
  container: SxProps<Theme>;
  content: SxProps<Theme>;
  mainContent: SxProps<Theme>;
  section: SxProps<Theme>;
  sectionTitle: SxProps<Theme>;
  sectionContent: SxProps<Theme>;
  churchText: SxProps<Theme>;
  psalmText: SxProps<Theme>;
  psalmReference: SxProps<Theme>;
  contactContainer: SxProps<Theme>;
  contactLink: SxProps<Theme>;
  contactText: SxProps<Theme>;
  icon: SxProps<Theme>;
  socialContainer: SxProps<Theme>;
  socialLink: SxProps<Theme>;
  socialIcon: SxProps<Theme>;
  copyright: SxProps<Theme>;
} = {
  container: {
    width: '100vw',
    backgroundColor: defaultTheme.palette.primary.light,
    backdropFilter: 'blur(10px)',
    color: defaultTheme.palette.primary.dark,
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: 2, md: 4 },
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
    gap: { xs: 3, md: 4 },
    marginBottom: 3,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  sectionTitle: {
    color: defaultTheme.palette.primary.dark,
    fontSize: { xs: '1rem', md: '1.125rem' },
    fontWeight: 600,
    marginBottom: 1,
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  churchText: {
    color: defaultTheme.palette.primary.dark,
    fontSize: { xs: '0.875rem', md: '1rem' },
    lineHeight: 1.6,
    textAlign: { xs: 'center', md: 'left' },
  },
  psalmText: {
    color: defaultTheme.palette.primary.dark,
    fontSize: { xs: '0.875rem', md: '1rem' },
    fontStyle: 'italic',
    lineHeight: 1.6,
    textAlign: { xs: 'center', md: 'left' },
    marginTop: 1,
  },
  psalmReference: {
    color: defaultTheme.palette.primary.dark,
    fontSize: { xs: '0.75rem', md: '0.875rem' },
    fontWeight: 500,
    textAlign: { xs: 'center', md: 'left' },
    marginTop: 0.5,
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    padding: 0.5,
    borderRadius: 1,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  contactText: {
    color: defaultTheme.palette.text.primary,
    fontSize: { xs: '0.875rem', md: '1rem' },
  },
  icon: {
    fontSize: { xs: '1.125rem', md: '1.25rem' },
    color: defaultTheme.palette.primary.dark,
  },
  socialContainer: {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: `1px solid ${defaultTheme.palette.primary.main}`,
    color: defaultTheme.palette.text.primary,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: defaultTheme.palette.primary.dark,
      color: defaultTheme.palette.text.secondary,
      transform: 'translateY(-2px) scale(1.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: 'inherit',
  },
  copyright: {
    color: defaultTheme.palette.primary.dark,
    textAlign: 'center',
    fontSize: { xs: '0.75rem', md: '0.875rem' },
    paddingTop: 2,
    borderTop: `1px solid ${defaultTheme.palette.primary.dark}20`,
  },
};

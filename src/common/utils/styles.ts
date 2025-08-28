import defaultTheme from '@/configs/styles/theme/default-theme';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

const defaultContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
};

const formStyles: {
  container: SxProps<Theme>;
  formContainer: SxProps<Theme>;
  buttonContainer: SxProps<Theme>;
  title: SxProps<Theme>;
  subTitle: SxProps<Theme>;
} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2, md: 3 },
    color: 'black',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2, md: 3 },
    paddingTop: { xs: 1 },
  },
  buttonContainer: {
    width: '100%',
    maxWidth: { xs: '100%', md: '500px' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 2, md: 3 },
    justifyContent: 'center',
    marginX: 'auto',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: defaultTheme.palette.primary.main,
  },
  subTitle: {
    textAlign: 'center',
    color: defaultTheme.palette.primary.main,
  },
};

export { defaultContainerStyles, formStyles };

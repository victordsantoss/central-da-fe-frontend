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
} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2, md: 4 },
    color: 'black',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1, md: 2 },
    paddingTop: { xs: 1 },
  },
  buttonContainer: {
    width: '100%',
    maxWidth: { xs: '100%', md: '500px' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 1, md: 2 },
    justifyContent: 'center',
    marginX: 'auto',
  },
};

export { defaultContainerStyles, formStyles };

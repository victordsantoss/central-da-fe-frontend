'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import { containerStyles } from './styles';

export default function PageLoadingComponent() {
  return (
    <Box
      sx={{
        ...containerStyles.container,
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <CircularProgress sx={{ color: 'text.primary' }} size={60} />
      <Typography variant="h6" color="text.primary">
        Carregando...
      </Typography>
    </Box>
  );
}

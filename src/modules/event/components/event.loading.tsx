'use client';

import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Stack,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { formStyles } from '@/common/utils/styles';

export const EventLoading = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        gap={2}
      >
        <IconButton disabled sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowBackIcon sx={{ color: 'grey.400' }} />
          <Typography
            variant="body1"
            sx={{ ...formStyles.title, textAlign: 'left', display: { xs: 'block', sm: 'none' } }}
          >
            Voltar
          </Typography>
        </IconButton>
        <Skeleton variant="text" width={300} height={48} />
      </Stack>

      {/* Tabs skeleton */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={0}
          aria-label="event details tabs"
          sx={{
            '& .MuiTab-root': {
              color: 'grey.400',
            },
          }}
        >
          <Tab label="Detalhes do Evento" />
          <Tab label="Andamento e Inscrições" />
        </Tabs>
      </Box>

      {/* Basic Data Card Skeleton */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={150} height={32} />
          </Stack>

          <Stack spacing={3}>
            <Skeleton variant="rectangular" height={56} />
            <Skeleton variant="rectangular" height={120} />
            <Skeleton variant="rectangular" height={120} />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={56} />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* Financial Details Card Skeleton */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={180} height={32} />
          </Stack>

          <Stack spacing={3}>
            <Skeleton variant="rectangular" height={40} width={200} />
            <Skeleton variant="rectangular" height={56} />
            <Skeleton variant="rectangular" height={56} />
          </Stack>
        </CardContent>
      </Card>

      {/* Schedules and Location Card Skeleton */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={200} height={32} />
          </Stack>

          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={56} />
            </Stack>
            <Skeleton variant="rectangular" height={56} />
          </Stack>
        </CardContent>
      </Card>

      {/* Social Media and Links Card Skeleton */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={250} height={32} />
          </Stack>

          <Stack spacing={3}>
            <Skeleton variant="rectangular" height={56} />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={56} />
            </Stack>

            <Skeleton variant="rectangular" height={56} />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

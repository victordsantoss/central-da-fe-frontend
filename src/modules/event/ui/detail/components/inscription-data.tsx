import { Box, Card, CardContent, Typography } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { formStyles } from '@/common/utils/styles';

export const InscriptionData = () => {
  return (
    <Box>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            mb={3}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: 'info.light',
                color: 'info.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ScheduleIcon fontSize="small" />
            </Box>
            Andamento e Inscrições
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 200,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Dados de Inscrições
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Em breve, você poderá acompanhar o andamento das inscrições e estatísticas do evento
              aqui.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

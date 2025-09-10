import { Box, Card, CardContent, Typography } from '@mui/material';

interface IEventInscriptionFormViewProps {
  readonly id: string;
}

export function EventInscriptionFormView({ id }: IEventInscriptionFormViewProps) {
  console.log('id', id);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="h3" component="h1">
            NOME TESTE
          </Typography>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Detalhes do Evento TESTE
            </Typography>
            <Typography>Data: TESTE</Typography>
            <Typography>Local: TESTE</Typography>
            <Typography>Valor: TESTE</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function SuccessView() {
  const { push } = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginY: 'auto',
        marginX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, gap: 1 }}>
        <Image priority width={140} height={140} src={'/assets/gifs/success.gif'} alt={'Sucesso'} />
        <Typography
          variant="h5"
          component="h1"
          textAlign="center"
          fontWeight="bold"
          color="primary"
        >
          Registro Concluído com Sucesso!
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography color="text.primary" sx={{ fontWeight: 400 }}>
            Parabéns! Sua conta foi criada com sucesso. Embora nossa área logada ainda esteja em
            desenvolvimento, você já pode se registrar em eventos disponíveis.
          </Typography>
          <Typography color="text.primary">
            Em breve, você terá acesso a recursos exclusivos e poderá gerenciar sua participação em
            eventos diretamente pela plataforma.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => push('/event/register')}
          >
            Registrar em um Evento
          </Button>
          <Button variant="contained" color="primary" fullWidth onClick={() => push('/login')}>
            Ir para Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

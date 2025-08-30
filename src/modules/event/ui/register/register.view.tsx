import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Church } from '@/services/domain/church.types';
import RegisterEventFormViewModel from './components/form';
import { formStyles } from '@/common/utils/styles';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface IRegisterEventViewProps {
  churchesData: Church.IListChurchesResponse;
}

export const RegisterEventView = ({ churchesData }: IRegisterEventViewProps) => {
  const { push } = useRouter();
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Stack direction={{ xs: 'column-reverse', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} gap={2}>
        <IconButton onClick={() => push('/event/dashboard')} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" sx={{ ...formStyles.title, textAlign: 'left' }}>
          Cadastrar Evento
        </Typography>
      </Stack>

      <RegisterEventFormViewModel churchesData={churchesData} />
    </Box>
  );
};

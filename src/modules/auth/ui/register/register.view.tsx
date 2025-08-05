import { Box, Typography } from '@mui/material';
import { defaultContainerStyles } from '@/common/utils/styles';
import { authFormStyles } from '../styles';
import RegisterFormViewModel from './components/form';
import { Church } from '@/services/domain/church.types';
import { Position } from '@/services/domain/position.types';

const title = 'Bem vindo(a) ao nosso sistema';
const subTitle = 'Faça seu cadastro para continuar explorando nossos serviços.';

interface RegisterViewProps {
  churchesData: Church.IListChurchesResponse;
  positionsData: Position.IListPositionsResponse;
}

const RegisterView = ({ churchesData, positionsData }: RegisterViewProps) => {
  return (
    <Box sx={{ ...defaultContainerStyles }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            ...authFormStyles.container,
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Typography variant="h3" sx={authFormStyles.form.title}>
              {title}
            </Typography>
            <Typography variant="body2" sx={authFormStyles.form.subTitle}>
              {subTitle}
            </Typography>
          </Box>
          <Box
            sx={{
              ...authFormStyles.form.container,
              overflowY: 'auto',
              flex: 1,
              minHeight: 0,
            }}
          >
            <RegisterFormViewModel churchesData={churchesData} positionsData={positionsData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterView;

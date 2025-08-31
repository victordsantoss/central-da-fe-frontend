import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Autocomplete,
} from '@mui/material';
import { RegisterFormValues } from './form.schema';
import { formStyles } from '@/common/utils/styles';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { formatCPF } from '@/common/utils/document';
import { Church } from '@/services/domain/church.types';
import { Position } from '@/services/domain/position.types';
import type { PositionModel } from '@/common/models/position.model';

interface IRegisterFormViewProps {
  push: (path: string) => void;
  onSubmit: (values: RegisterFormValues) => void;
  methods: UseFormReturn<RegisterFormValues>;
  isPending: boolean;
  showPassword: boolean;
  handleTogglePasswordVisibility: () => void;
  showConfirmPassword: boolean;
  handleToggleConfirmPasswordVisibility: () => void;
  churchesData: Church.IListChurchesResponse;
  positionsData: Position.IListPositionsResponse;
}

export const RegisterFormView = (props: IRegisterFormViewProps) => {
  const {
    onSubmit,
    methods,
    isPending,
    showPassword,
    handleTogglePasswordVisibility,
    showConfirmPassword,
    handleToggleConfirmPasswordVisibility,
    push,
    churchesData,
    positionsData,
  } = props;

  return (
    <Box
      component="form"
      onSubmit={methods.handleSubmit(onSubmit)}
      sx={{ ...formStyles.container, maxWidth: { xs: '100%', md: '600px' } }}
    >
      <FormProvider {...methods}>
        <Box sx={formStyles.formContainer}>
          <Controller
            name="email"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Email *"
                fullWidth
                placeholder="exemplo@email.com"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="name"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Nome *"
                fullWidth
                placeholder="Nome Completo"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onBlur={e => field.onChange(e.target.value.trim())}
              />
            )}
          />
          <Controller
            name="cpf"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="CPF *"
                fullWidth
                placeholder="000.000.000-00"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="outlined"
                onChange={e => {
                  const formatted = formatCPF(e.target.value);
                  field.onChange(formatted);
                }}
              />
            )}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Controller
              name="churchId"
              control={methods.control}
              render={({ field, fieldState }) => (
                <Autocomplete
                  id="church-select"
                  value={churchesData.data?.find(church => church.id === field.value) || null}
                  onChange={(_, newValue) => {
                    field.onChange(newValue?.id || '');
                  }}
                  options={churchesData.data || []}
                  getOptionLabel={option => option?.name || ''}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  sx={{ width: '100%' }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Congregação *"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />
            <Tooltip
              title="Selecione a congregação à qual você pertence ou deseja se filiar. Esta informação nos ajuda a organizar melhor os membros por congregação."
              placement="right"
              arrow
            >
              <InfoIcon sx={{ fontSize: 24, color: 'info.main', cursor: 'pointer' }} />
            </Tooltip>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Controller
              name="positionIds"
              control={methods.control}
              render={({ field, fieldState }) => (
                <Autocomplete
                  multiple
                  id="position-select"
                  value={
                    (field.value || [])
                      .map((id: string) => positionsData.data?.find(p => p.id === id))
                      .filter(Boolean) as PositionModel[]
                  }
                  onChange={(_, newValue) => {
                    field.onChange(newValue.map(position => position.id));
                  }}
                  options={positionsData.data || []}
                  getOptionLabel={option => option?.name || ''}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  sx={{ width: '100%' }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Cargo(s) *"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />
            <Tooltip
              title="Selecione um ou mais cargos que você desempenha. Você pode escolher múltiplas opções conforme sua atuação."
              placement="right"
              arrow
            >
              <InfoIcon sx={{ fontSize: 24, color: 'info.main', cursor: 'pointer' }} />
            </Tooltip>
          </Box>
          <Controller
            name="password"
            control={methods.control}
            render={({ field, fieldState }) => (
              <Box sx={{ position: 'relative' }}>
                <TextField
                  {...field}
                  label="Senha *"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
            )}
          />
          <Controller
            name="confirmPassword"
            control={methods.control}
            render={({ field, fieldState }) => (
              <Box sx={{ position: 'relative' }}>
                <TextField
                  {...field}
                  label="Confirmar Senha *"
                  type={showConfirmPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleToggleConfirmPasswordVisibility}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  onChange={e => {
                    field.onChange(e);
                    if (
                      methods.getValues('password') &&
                      e.target.value &&
                      methods.getValues('password') !== e.target.value
                    ) {
                      methods.setError('confirmPassword', {
                        type: 'manual',
                        message: 'As senhas não coincidem. Por favor, verifique e tente novamente.',
                      });
                    } else {
                      methods.clearErrors('confirmPassword');
                    }
                  }}
                />
              </Box>
            )}
          />
        </Box>
        <Box sx={formStyles.buttonContainer}>
          <Tooltip
            title={`${!methods.formState.isValid ? 'Preencha todos os campos para continuar.' : 'Registrar'}`}
            placement="top"
          >
            <span style={{ width: '100%' }}>
              <Button type="submit" variant="contained" color="secondary" fullWidth>
                {isPending ? <CircularProgress size={20} /> : 'Registrar'}
              </Button>
            </span>
          </Tooltip>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => push('/login')}
          >
            Voltar
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};

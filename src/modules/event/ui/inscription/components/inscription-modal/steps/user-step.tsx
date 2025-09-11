'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  Typography,
  CircularProgress,
  Stack,
  IconButton,
  InputAdornment,
  Autocomplete,
  Tooltip,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UserService } from '@/services/client/user.services';
import { useInscriptionModal } from '../inscription-modal.context';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InfoIcon from '@mui/icons-material/Info';
import { PositionService } from '@/services/client/position.service';
import { UserRegistrationSchema, UserRegistrationFormValues } from './user-step.schema';
import { useAlert } from '@/contexts/alert.context';
import { formatCPF } from '@/common/utils/document';
import { PositionModel } from '@/common/models/position.model';
import { Auth } from '@/services/domain/auth.types';
import { AuthService } from '@/services/client/auth.services';
import { User } from '@/services/domain/user.types';

interface IUserSearchStepProps {
  onNext: () => void;
}

export function UserSearchStep({ onNext }: Readonly<IUserSearchStepProps>) {
  const { userData, setUserData } = useInscriptionModal();
  const { showAlert } = useAlert();
  const [cpf, setCpf] = useState(userData?.cpf || '');
  const [showRegistrationForm, setShowRegistrationForm] = useState(!!userData);

  const methods = useForm<UserRegistrationFormValues>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      name: userData?.name || '',
      email: userData?.email || '',
      cpf: userData?.cpf || cpf,
      positionIds: userData?.positionIds || [],
    },
  });

  const positionsData = useQuery({
    queryKey: ['positions'],
    queryFn: () => PositionService.list({ page: 1, limit: 100 }),
  });

  const searchUserMutation = useMutation({
    mutationFn: (cpf: string) => UserService.getUserByCpf(cpf),
    onSuccess: data => {
      if (data) {
        console.log('data', data);
        methods.setValue('name', data.name);
        methods.setValue('email', data.email);
        methods.setValue('cpf', data.cpf);
        methods.setValue('positionIds', data.positionIds);

        setUserData({
          id: data.id,
          name: data.name,
          cpf: data.cpf,
          email: data.email,
          positionIds: data.positionIds,
        });
        showAlert('Usuário encontrado com sucesso!', 'success');
        setShowRegistrationForm(true);
      }
    },
    onError: () => {
      setUserData(null);
      methods.reset();
      showAlert('Usuário não encontrado. Preencha os dados para cadastrar.', 'info');
      methods.setValue('cpf', cpf);
      setShowRegistrationForm(true);
    },
  });

  const handleSearch = () => {
    if (!cpf || cpf.length < 14) {
      return;
    }
    searchUserMutation.mutate(cpf);
  };

  const createUserMutation = useMutation({
    mutationFn: (userData: Auth.ICreateUserWithRandomPasswordRequest) =>
      AuthService.createUserWithRandomPassword(userData),
    onSuccess: (data: User.IUserByCpfResponse) => {
      setUserData({
        id: data.id,
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        positionIds: data.positionIds,
      });
      onNext();
    },
    onError: error => {
      console.error('Erro ao criar usuário:', error);
    },
  });

  console.log('userData', userData);
  console.log('searchUserMutation.data', searchUserMutation.data);

  const handleRegistrationSubmit = useCallback(
    async (data: UserRegistrationFormValues) => {
      if (!userData) {
        await createUserMutation.mutateAsync(data);
        setShowRegistrationForm(false);
      } else {
        setShowRegistrationForm(false);
        onNext();
      }
    },
    [createUserMutation, onNext, userData]
  );

  useEffect(() => {
    if (!cpf || cpf.length < 14) {
      setShowRegistrationForm(false);
    }
  }, [cpf, methods]);

  return (
    <Box>
      <Stack spacing={2}>
        <TextField
          label="CPF"
          value={cpf}
          onChange={e => {
            const formatted = formatCPF(e.target.value);
            setCpf(formatted);
          }}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
          placeholder="000.000.000-00"
          fullWidth
          error={searchUserMutation.isError}
          helperText={searchUserMutation.isError ? 'Usuário não encontrado' : ''}
          disabled={searchUserMutation.isPending}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSearch}
                    disabled={searchUserMutation.isPending || !cpf || cpf.length < 14}
                    edge="end"
                    color="primary"
                  >
                    {searchUserMutation.isPending ? <CircularProgress size={20} /> : <SearchIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        {!searchUserMutation.data && !showRegistrationForm && (
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              backgroundColor: 'white',
              borderRadius: 3,
              p: { xs: 2, sm: 3 },
              border: 'none',
              maxWidth: '100%',
            }}
          >
            <Typography variant="h5" color="info.main" fontWeight={600}>
              Inscrição no Evento
            </Typography>
            <Typography variant="body1" color="text.primary">
              Digite o CPF para buscar e inscrever-se no evento. Se você não estiver cadastrado,
              você poderá preencher os dados manualmente.
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                maxWidth: 400,
                mx: 'auto',
                p: 2,
                backgroundColor: 'grey.50',
                borderRadius: 2,
                border: 1,
                borderColor: 'grey.200',
              }}
            >
              💡 <strong>Dica:</strong> Se você já possui cadastro na igreja, digite seu CPF acima.
              Caso contrário, preencha os dados do formulário que aparecerá após a busca.
            </Typography>
          </Box>
        )}

        {showRegistrationForm && (
          <Box>
            <FormProvider {...methods}>
              <Box component="form" onSubmit={methods.handleSubmit(handleRegistrationSubmit)}>
                <Stack spacing={2}>
                  <Controller
                    name="name"
                    control={methods.control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label="Nome Completo *"
                        fullWidth
                        placeholder="Nome Completo"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        disabled={!!searchUserMutation.data || !!userData}
                        variant="outlined"
                        onBlur={e => field.onChange(e.target.value.trim())}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonOutlineIcon color="primary" />
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={methods.control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label="Email *"
                        fullWidth
                        disabled={!!searchUserMutation.data || !!userData}
                        placeholder="exemplo@email.com"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        variant="outlined"
                        onBlur={e => field.onChange(e.target.value.trim())}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon color="primary" />
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
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
                              .map((id: string) =>
                                positionsData.data?.data?.find((p: PositionModel) => p.id === id)
                              )
                              .filter(Boolean) as PositionModel[]
                          }
                          onChange={(_, newValue) => {
                            field.onChange(newValue.map(position => position.id));
                          }}
                          options={positionsData.data?.data || []}
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
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: { xs: '100%', sm: 'auto' },
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                      {createUserMutation.isPending ? (
                        <CircularProgress size={20} color="primary" />
                      ) : (
                        'Prosseguir'
                      )}
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </FormProvider>
          </Box>
        )}
      </Stack>
    </Box>
  );
}

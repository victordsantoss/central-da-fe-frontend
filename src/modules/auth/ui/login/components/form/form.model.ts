import { useState } from 'react';
import { LoginFormValues, LoginSchema } from './form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/contexts/alert.context';
import { isAxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/client/auth.services.';
import { useAuth } from '@/contexts/auth.context';
import { AuthCookie } from '@/storages/cookies/auth.cookies';
export const useLoginFormModel = () => {
  const { push } = useRouter();
  const { showAlert } = useAlert();
  const { persistUser } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (value: { email: string; password: string }) => AuthService.login(value),
    onError: error => {
      if (isAxiosError(error)) showAlert(error.response?.data.message, 'error');
    },
    onSuccess: async (token: string) => {
      AuthCookie.setToken(token, 30);
      persistUser(token);
      showAlert('Usuário autenticado com sucesso!', 'success');
      push('event/dashboard');
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    mutate(data);
  };

  return {
    showPassword,
    setShowPassword,
    handleTogglePasswordVisibility,
    methods,
    onSubmit,
    isPending,
  };
};

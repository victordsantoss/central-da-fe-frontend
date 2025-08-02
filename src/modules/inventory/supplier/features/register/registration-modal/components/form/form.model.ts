import { useMutation } from '@tanstack/react-query';
import { SupplierService } from '@/services/supplier';
import { RegistrationsSupplierSchema, RegistrationSuppluerFormValues } from './form.schema';
import { useAlert } from '@/contexts/alert.context';
import { isAxiosError } from 'axios';
import { Supplier } from '@/services/supplier/supplier.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { revalidadeSuppliersDashboard } from '@/modules/inventory/supplier/actions/revalidate-dashboard.action';

export const useRegistrationSuppilerFormModel = () => {
  const { showAlert } = useAlert();
  const methods = useForm<RegistrationSuppluerFormValues>({
    resolver: zodResolver(RegistrationsSupplierSchema),
    defaultValues: { name: '', email: '', phone: '', address: '' },
  });

  const { mutateAsync, isPending } = useMutation<
    Supplier.IRegisterResponse,
    Error,
    RegistrationSuppluerFormValues
  >({
    mutationFn: payload => SupplierService.register(payload),
    onError: error => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      } else {
        showAlert('Erro desconhecido', 'error');
      }
    },
    onSuccess: async () => {
      showAlert('Fornecedor registrado com sucesso!', 'success');
      await revalidadeSuppliersDashboard();
    },
  });

  const onSubmit = async (data: RegistrationSuppluerFormValues) => {
    await mutateAsync(data);
  };

  return {
    methods,
    onSubmit,
    isPending,
  };
};

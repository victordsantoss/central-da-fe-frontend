import { RegisterEventFormValues, RegisterEventSchema } from './form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/contexts/alert.context';
import { isAxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { EventCategory } from '@/common/enums/event.enum';
import { EventService } from '@/services/client/event.services';
import dayjs from 'dayjs';
import { Church } from '@/services/domain/church.types';

export const useRegisterEventFormModel = (churchesData: Church.IListChurchesResponse) => {
  const { push } = useRouter();
  const { showAlert } = useAlert();
  const methods = useForm<RegisterEventFormValues>({
    resolver: zodResolver(RegisterEventSchema),
    defaultValues: {
      name: '',
      description: '',
      category: EventCategory.EVENT,
      isPaid: false,
      price: undefined,
      availableTickets: undefined,
      startDate: dayjs(),
      endDate: dayjs(),
      address: {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
      },
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (value: RegisterEventFormValues) => EventService.registerEvent(value),
    onError: error => {
      if (isAxiosError(error)) showAlert(error.response?.data.message, 'error');
    },
    onSuccess: async () => {
      showAlert('Evento cadastrado com sucesso!', 'success');
      push('/event/dashboard');
    },
  });

  const onSubmit = (data: RegisterEventFormValues) => {
    mutate({
      ...data,
      startDate: data.startDate,
      endDate: data.endDate,
    });
  };

  return {
    methods,
    onSubmit,
    isPending,
    churchesData,
  };
};

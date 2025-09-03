import { Option } from '@/components/filter/filter.types';
import { useRouter } from 'next/navigation';
export const useEventDashboardModel = () => {
  const router = useRouter();

  const onRegisterClick = () => {
    router.push('/event/register');
  };

  const orderOptions: Option[] = [{ value: 'name', label: 'Nome' }];

  return {
    onRegisterClick,
    orderOptions,
  };
};

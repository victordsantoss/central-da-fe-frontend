import { useRouter } from 'next/navigation';

export const useEventDetailModel = () => {
  const router = useRouter();

  const onBackClick = () => {
    router.push('/event/dashboard');
  };

  const onEditClick = (id: string) => {
    router.push(`/event/edit/${id}`);
  };

  return {
    onBackClick,
    onEditClick,
  };
}; 
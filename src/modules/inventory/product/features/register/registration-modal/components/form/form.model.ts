import { useMutation, useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/client/product';
import { ProductCategoryService } from '@/services/client/product/category';
import { RegistrationProductSchema, RegistrationProductFormValues } from './form.schema';
import { useAlert } from '@/contexts/alert.context';
import { isAxiosError } from 'axios';
import { Product } from '@/services/client/product/product.types';
import { Category } from '@/services/client/product/category/category.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { revalidateProductsDashboard } from '@/modules/inventory/product/actions/revalidate-dashboard.action';

export const useRegistrationProductFormModel = () => {
  const { showAlert } = useAlert();
  const methods = useForm<RegistrationProductFormValues>({
    resolver: zodResolver(RegistrationProductSchema),
    defaultValues: { name: '', code: '', description: '', categories: [] },
  });

  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery<
    Category.IListResponse,
    Error
  >({
    queryKey: ['product-categories'],
    queryFn: () => ProductCategoryService.list({ page: 1, limit: 100 }),
    staleTime: 5 * 60 * 1000,
  });

  const { mutateAsync, isPending } = useMutation<
    Product.IRegisterResponse,
    Error,
    RegistrationProductFormValues
  >({
    mutationFn: payload => ProductService.register(payload),
    onError: error => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      } else {
        showAlert('Erro desconhecido', 'error');
      }
    },
    onSuccess: async () => {
      showAlert('Produto registrado com sucesso!', 'success');
      await revalidateProductsDashboard();
    },
  });

  const onSubmit = async (data: RegistrationProductFormValues) => {
    await mutateAsync(data);
  };

  return {
    methods,
    onSubmit,
    isPending,
    categories: categoriesData?.data || [],
    isLoadingCategories,
  };
};

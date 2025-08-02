import { useMutation, useQuery } from '@tanstack/react-query';
import { useAlert } from '@/contexts/alert.context';
import { isAxiosError } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SupplierOrderSchema, SupplierOrderFormValues } from './form.schema';
import { SupplierOrderService } from '@/services/supplier-order';
import { SupplierOrder } from '@/services/supplier-order/supplier-order.types';
import { revalidateSupplierOrderDashboard } from '@/modules/inventory/supplier-order/actions/revalidate-dashboard.action';
import { ProductService } from '@/services/product';
import { SupplierService } from '@/services/supplier';

interface RegistrationSupplierOrderFormViewModelProps {
  closeCreateSupplierOrderModal: () => void;
}

export const useRegistrationSupplierOrderFormModel = ({
  closeCreateSupplierOrderModal,
}: RegistrationSupplierOrderFormViewModelProps) => {
  const { showAlert } = useAlert();
  const methods = useForm<SupplierOrderFormValues>({
    resolver: zodResolver(SupplierOrderSchema),
    defaultValues: {
      supplierId: '',
      description: '',
      expectedDeliveryDate: '',
      products: [{ productId: '', quantity: 1, unitPrice: 0 }],
    },
  });

  const { data: productsData, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', 'list'],
    queryFn: () => ProductService.list({ page: 1, limit: 100 }),
  });

  const { data: suppliersData, isLoading: isLoadingSuppliers } = useQuery({
    queryKey: ['suppliers', 'list'],
    queryFn: () => SupplierService.list({ page: 1, limit: 100 }),
  });

  const { mutateAsync, isPending } = useMutation<
    SupplierOrder.IRegisterResponse,
    Error,
    SupplierOrderFormValues
  >({
    mutationFn: payload => SupplierOrderService.register(payload),
    onError: error => {
      if (isAxiosError(error)) {
        showAlert(error.response?.data.message, 'error');
      } else {
        showAlert('Erro desconhecido', 'error');
      }
    },
    onSuccess: async () => {
      showAlert('Pedido ao fornecedor registrado com sucesso!', 'success');
      await revalidateSupplierOrderDashboard();
      closeCreateSupplierOrderModal();
      methods.reset();
    },
  });

  const onSubmit = async (data: SupplierOrderFormValues) => {
    await mutateAsync(data);
  };

  return {
    methods,
    onSubmit,
    isPending,
    products: productsData?.data || [],
    isLoadingProducts,
    suppliers: suppliersData?.data || [],
    isLoadingSuppliers,
    closeCreateSupplierOrderModal,
  };
};

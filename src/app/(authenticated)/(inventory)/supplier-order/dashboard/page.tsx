import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import { IFetchErrorResponse, IFetchSuccessResponse } from '@/common/types/fetch.types';
import { apiFetch, handleApiError } from '@/configs/api/ssr-fetch';
import SupplierOrderDashboardViewModel from '@/modules/inventory/supplier-order/features/dashboard';
import { ISupplierOrderResponseDto } from '@/modules/inventory/supplier-order/types/list.response.dto';

export type SupplierOrderDashboardResponse =
  | IFetchSuccessResponse<IPaginatedResponse<ISupplierOrderResponseDto>>
  | IFetchErrorResponse;

export default async function SupplierOrderDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const listEndpoint = '/supplier-order';
  const filters = await searchParams;

  const [supplierOrders] = await Promise.all([
    await apiFetch<SupplierOrderDashboardResponse>(
      listEndpoint,
      {
        method: 'GET',
        next: {
          tags: ['supplier-order-dashboard'],
        },
        cache: 'no-cache',
      },
      filters
    ),
  ]);

  const supplierOrderDashboardData =
    handleApiError<IPaginatedResponse<ISupplierOrderResponseDto>>(supplierOrders);

  return <SupplierOrderDashboardViewModel content={supplierOrderDashboardData} />;
}

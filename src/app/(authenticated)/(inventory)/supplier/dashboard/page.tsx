import { SupplierModel } from '@/common/models/supplier.model';
import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import { IFetchErrorResponse, IFetchSuccessResponse } from '@/common/types/fetch.types';
import { apiFetch, handleApiError } from '@/configs/api/ssr-fetch';
import SupplierDashboardViewModel from '@/modules/inventory/supplier/features/dashboard';

export type SupplierDashboardResponse =
  | IFetchSuccessResponse<IPaginatedResponse<SupplierModel>>
  | IFetchErrorResponse;

export default async function SupplierDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const listEndpoint = '/supplier';
  const filters = await searchParams;

  const [suppliers] = await Promise.all([
    await apiFetch<SupplierDashboardResponse>(
      listEndpoint,
      {
        method: 'GET',
        next: {
          tags: ['supplier-dashboard'],
        },
        cache: 'no-cache',
      },
      filters
    ),
  ]);

  const supplierDashboardData = handleApiError<IPaginatedResponse<SupplierModel>>(suppliers);

  return <SupplierDashboardViewModel content={supplierDashboardData} />;
}

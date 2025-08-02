import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import { IFetchSuccessResponse, IFetchErrorResponse } from '@/common/types/fetch.types';
import { apiFetch, handleApiError } from '@/configs/api/ssr-fetch';
import ProductDashboardViewModel from '@/modules/inventory/product/features/dashboard';
import { ProductModel } from '@/common/models/product.model';

export type ProductDashboardResponse =
  | IFetchSuccessResponse<IPaginatedResponse<ProductModel>>
  | IFetchErrorResponse;

export default async function ProductDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const listEndtpoint = '/product';
  const filters = await searchParams;

  const [products] = await Promise.all([
    await apiFetch<ProductDashboardResponse>(
      listEndtpoint,
      {
        method: 'GET',
        next: {
          tags: ['product-dashboard'],
        },
        cache: 'no-cache',
      },
      filters
    ),
  ]);

  const productDashboardData = handleApiError<IPaginatedResponse<ProductModel>>(products);

  return <ProductDashboardViewModel content={productDashboardData} />;
}

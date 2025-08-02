'use client';

import { useProductDashboardModel } from './dashboard.model';
import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import { ProductModel } from '@/common/models/product.model';
import { ProductDashboardView } from './dashboard.view';

interface IProductDashboardViewModelProps {
  content: IPaginatedResponse<ProductModel>;
}

const ProductDashboardViewModel = ({ content }: IProductDashboardViewModelProps) => {
  const methods = useProductDashboardModel();

  return <ProductDashboardView content={content} {...methods} />;
};

export default ProductDashboardViewModel;

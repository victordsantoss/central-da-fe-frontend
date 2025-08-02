'use client';

import { SupplierModel } from '@/common/models/supplier.model';
import { useSupplierDashboardModel } from './dashboard.model';
import { SupplierDashboardView } from './dashboard.view';
import { IPaginatedResponse } from '@/common/types/base-pagination.types';

interface ISupplierDashboardViewModelProps {
  content: IPaginatedResponse<SupplierModel>;
}

const SupplierDashboardViewModel = ({ content }: ISupplierDashboardViewModelProps) => {
  const methods = useSupplierDashboardModel();

  return <SupplierDashboardView content={content} {...methods} />;
};

export default SupplierDashboardViewModel;

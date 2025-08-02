'use client';

import { useSupplierOrderDashboardModel } from './dashboard.model';
import { SupplierOrderDashboardView } from './dashboard.view';
import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import { ISupplierOrderResponseDto } from '../../types/list.response.dto';

interface ISupplierOrderDashboardViewModelProps {
  content: IPaginatedResponse<ISupplierOrderResponseDto>;
}

const SupplierOrderDashboardViewModel = ({ content }: ISupplierOrderDashboardViewModelProps) => {
  const methods = useSupplierOrderDashboardModel();

  return <SupplierOrderDashboardView content={content} {...methods} />;
};

export default SupplierOrderDashboardViewModel;

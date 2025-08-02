import { SupplierModel } from '@/common/models/supplier.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';

export namespace Supplier {
  export type IRegisterRequest = {
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    address: string;
  };
  export type IListSuppliersRequest = IPaginatedRequest;
  export type IListSuppliersResponse = IPaginatedResponse<SupplierModel>;
  export type IRegisterResponse = SupplierModel;
}

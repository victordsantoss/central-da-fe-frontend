import { ProductModel } from '@/common/models/product.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';

export namespace Product {
  export type IRegisterRequest = {
    name: string;
    code: string;
    description?: string;
    categories?: string[];
  };
  export type IListProductsRequest = IPaginatedRequest;
  export type IListProductsResponse = IPaginatedResponse<ProductModel>;
  export type IRegisterResponse = ProductModel;
}

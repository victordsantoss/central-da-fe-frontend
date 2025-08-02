import { CategoryModel } from '@/common/models/category.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';

export namespace Category {
  export type IListRequest = IPaginatedRequest;
  export type IListResponse = IPaginatedResponse<CategoryModel> & {};
}

import { ChurchModel } from '@/common/models/church.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';

export namespace Church {
  export type IListChurchesRequest = IPaginatedRequest;
  export type IListChurchesResponse = IPaginatedResponse<ChurchModel>;
}

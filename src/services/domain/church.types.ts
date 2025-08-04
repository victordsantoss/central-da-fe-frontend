import { ChurchModel } from '@/common/models/church.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';
import { IFetchSuccessResponse, IFetchErrorResponse } from '@/common/types/fetch.types';

export namespace Church {
  export type IListChurchesRequest = IPaginatedRequest;
  export type IListChurchesResponse =
    | IFetchSuccessResponse<IPaginatedResponse<ChurchModel>>
    | IFetchErrorResponse;
}

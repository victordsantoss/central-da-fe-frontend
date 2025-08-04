import { PositionModel } from '@/common/models/position.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';
import { IFetchSuccessResponse, IFetchErrorResponse } from '@/common/types/fetch.types';

export namespace Position {
  export type IListPositionsRequest = IPaginatedRequest;
  export type IListPositionsResponse =
    | IFetchSuccessResponse<IPaginatedResponse<PositionModel>>
    | IFetchErrorResponse;
}

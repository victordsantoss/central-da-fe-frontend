import { PositionModel } from '@/common/models/position.model';
import { IPaginatedRequest, IPaginatedResponse } from '@/common/types/base-pagination.types';
export namespace Position {
  export type IListPositionsRequest = IPaginatedRequest;
  export type IListPositionsResponse = IPaginatedResponse<PositionModel>;
}

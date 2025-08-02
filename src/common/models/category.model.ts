import { BaseStatusModel } from '../enums/status.enum';

export type CategoryModel = {
  id: number;
  name: string;
  description: string;
  status: BaseStatusModel;
  createdAt: Date;
  updatedAt: Date;
};

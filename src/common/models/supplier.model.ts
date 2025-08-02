import { BaseStatusModel } from '../enums/status.enum';

export type SupplierModel = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: BaseStatusModel;
  createdAt: Date;
  updatedAt: Date;
};
